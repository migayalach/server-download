import { Module } from '@nestjs/common';
import { DownloadModule } from './download/download.module';

@Module({
  imports: [DownloadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
