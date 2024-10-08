import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema({
  collection: 'stores',
  timestamps: true,
})
export class Store extends Document {
  @ApiProperty({
    description: 'name',
    required: true,
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'address',
    required: true,
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'latitude',
    required: true,
    type: Number,
  })
  @Prop({ required: true, type: Number })
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({
    description: 'longitude',
    required: true,
    type: Number,
  })
  @Prop({ required: true, type: Number })
  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  // image
  //   @ApiProperty({
  //     description: 'store image',
  //     required: false,
  //     type: () => Image,
  //   })
  //   @Prop({ type: Image, required: false })
  //   image?: Image;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
