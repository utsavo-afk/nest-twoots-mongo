import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum TwootStatus {
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT',
}

export type TwootDocument = HydratedDocument<Twoot>;

@Schema({ timestamps: true })
export class Twoot {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: TwootStatus, default: TwootStatus.DRAFT })
  status: TwootStatus;
}

export const TwootSchema = SchemaFactory.createForClass(Twoot);
