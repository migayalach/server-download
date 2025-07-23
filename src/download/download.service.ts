import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DownloadInput } from './dto/InputData.dto';

@Injectable()
export class DownloadService {
  public async downloading(inputData: DownloadInput) {
    try {
      return `This action returns a item download`;
    } catch (error) {
      throw new HttpException(
        'Error downloading the file.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
