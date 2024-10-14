import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from './domain/entity/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image.name)
    private readonly imageModel: Model<Image>,
  ) {}

  /** 이미지 hash로 이미지 찾기 */
  async findImageBykey(hash: string) {
    const image = await this.imageModel.findOne({ hash });
    return image;
  }
}
