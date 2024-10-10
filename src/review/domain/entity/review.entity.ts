import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document, SchemaTypes } from 'mongoose';

@Schema({
  collection: 'reviews',
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Review extends Document {
  @ApiProperty({
    description: 'store',
    required: true,
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: 'stores', required: true })
  @IsNotEmpty()
  storeId: string;

  @ApiProperty({
    description: 'user',
    required: true,
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: 'users', required: true })
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: 'content',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  content: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

ReviewSchema.virtual('user', {
  ref: 'users',
  localField: 'userId',
  foreignField: '_id',
  // justOne: true,
});

ReviewSchema.virtual('store', {
  ref: 'stores',
  localField: 'storeId',
  foreignField: '_id',
  // justOne: true
});
