import { Module } from '@nestjs/common';
import { DownloadService } from './download.service';
import { DownloadResolver } from './download.resolver';

@Module({
  providers: [DownloadResolver, DownloadService],
})
export class DownloadModule {}
