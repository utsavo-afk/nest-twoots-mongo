import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTweetDto } from './dto/create-twoot.dto';
import { UpdateTwootDto } from './dto/update-twoot.dto';
import { TwootsService } from './twoots.service';

@Controller('twoots')
export class TwootsController {
  constructor(private readonly twootsService: TwootsService) {}
  @Post()
  create(@Body() createTwootDto: CreateTweetDto) {
    return this.twootsService.create(createTwootDto);
  }

  @Get()
  list() {
    return this.twootsService.list();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTwootDto: UpdateTwootDto) {
    return this.twootsService.update(id, updateTwootDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.twootsService.remove(id);
  }
}
