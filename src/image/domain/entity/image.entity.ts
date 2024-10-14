import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema({
  collection: 'images',
  timestamps: true,
})
export class Image extends Document {
  @ApiProperty({ description: 'url', required: true })
  @Prop({ required: true })
  @IsString()
  url: string;

  @ApiProperty({ description: 'hash', required: true })
  @Prop({ required: true })
  @IsString()
  hash: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
