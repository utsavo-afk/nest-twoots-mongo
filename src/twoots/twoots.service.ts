import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { CreateTweetDto } from './dto/create-twoot.dto';
import { UpdateTwootDto } from './dto/update-twoot.dto';
import { Twoot, TwootDocument } from './twoot.model';

@Injectable()
export class TwootsService {
  constructor(
    @InjectModel(Twoot.name) private readonly twootModel: Model<TwootDocument>,
  ) {}
  async create(createTwootDto: CreateTweetDto): Promise<Twoot> {
    const createdTwoot = new this.twootModel(createTwootDto);
    return createdTwoot.save();
  }
  async list(): Promise<Twoot[]> {
    return this.twootModel.find().exec();
  }
  async update(
    id: string,
    updateTwootDto: UpdateTwootDto,
  ): Promise<UpdateWriteOpResult> {
    return this.twootModel.findByIdAndUpdate({ _id: id }, updateTwootDto, {
      new: true,
    });
  }
  async remove(id: string) {
    return this.twootModel.findByIdAndRemove(id);
  }
}
