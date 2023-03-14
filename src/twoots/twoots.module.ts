import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Twoot, TwootSchema } from './twoot.model';
import { TwootsController } from './twoots.controller';
import { TwootsService } from './twoots.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Twoot.name, schema: TwootSchema }]),
  ],
  controllers: [TwootsController],
  providers: [TwootsService],
})
export class TwootsModule {}
