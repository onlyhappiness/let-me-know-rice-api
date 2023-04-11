import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  private readonly config = {
    region: '',
    credentials: {
      accessKeyId: '',
      secretAccessKey: '',
    },
  };

  private readonly s3 = new S3(this.config);

  async uploadFile(image: Express.Multer.File) {
    try {
      const key = uuidv4();
      const response = await this.s3
        .upload({
          Bucket: '',
          Key: '',
          Body: '',
          ContentType: '',
        })
        .promise();

      return response;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('S3 업로드 실패');
    }
  }
}
