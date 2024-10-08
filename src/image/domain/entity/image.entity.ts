import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema({
  collection: 'images',
  timestamps: true,
})
export class Image extends Document {
  @ApiProperty({ description: 'url' })
  @IsString()
  url: string;

  @ApiProperty({ description: 'key' })
  @IsString()
  key: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
