import {
  ObjectCannedACL,
  PutObjectCommand,
  S3Client,
  S3ClientConfigType,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Service {
  private readonly config: S3ClientConfigType = {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  };
  private readonly bucketName = process.env.AWS_S3_BUCKET_NAME;

  private readonly s3 = new S3Client(this.config);

  async uploadFile(file) {
    const key = `${Date.now()}-${file.originalname}`;

    const params = {
      Key: key,
      Body: file.buffer,
      Bucket: this.bucketName,
      ACL: ObjectCannedACL.public_read,
      ContentType: file.mimetype, // 파일의 MIME 타입 설정
    };

    const command = new PutObjectCommand(params);
    const response = await this.s3.send(command);

    const imageUrl = `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return imageUrl;
  }
}
