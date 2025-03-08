import { Injectable } from '@nestjs/common';
import { CreateDownloadInput } from './dto/create-download.input';
import { UpdateDownloadInput } from './dto/update-download.input';

@Injectable()
export class DownloadService {
  create(createDownloadInput: CreateDownloadInput) {
    return 'This action adds a new download';
  }

  findAll() {
    return `This action returns all download`;
  }

  findOne(id: number) {
    return `This action returns a #${id} download`;
  }

  update(id: number, updateDownloadInput: UpdateDownloadInput) {
    return `This action updates a #${id} download`;
  }

  remove(id: number) {
    return `This action removes a #${id} download`;
  }
}
