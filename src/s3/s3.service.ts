import {
  ObjectCannedACL,
  PutObjectCommand,
  S3Client,
  S3ClientConfigType,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as crypto from 'crypto';
import { Model } from 'mongoose';
import { Image } from 'src/image/domain/entity/image.entity';
import { ImageService } from 'src/image/image.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service {
  constructor(
    @InjectModel(Image.name)
    private readonly imageModel: Model<Image>,

    private readonly imageService: ImageService,
  ) {}

  private readonly config: S3ClientConfigType = {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  };
  private readonly bucketName = process.env.AWS_S3_BUCKET_NAME;

  private readonly s3 = new S3Client(this.config);

  async uploadFile(file: Express.Multer.File) {
    const key = uuidv4();

    const hash = crypto.createHash('sha256').update(file.buffer).digest('hex');

    const image = await this.imageService.findImageBykey(hash);

    if (image) {
      return image;
    } else {
      const params = {
        Key: key,
        Body: file.buffer,
        Bucket: this.bucketName,
        ACL: ObjectCannedACL.public_read,
        ContentType: file.mimetype, // 파일의 MIME 타입 설정
      };

      const command = new PutObjectCommand(params);

      await this.s3.send(command);
      const imageUrl = `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

      const image = await this.imageModel.create({
        url: imageUrl,
        hash: hash,
      });

      return image;
    }
  }
}
