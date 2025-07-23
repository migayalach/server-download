import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { DownloadService } from './download.service';
import { DownloadInput } from './dto/InputData.dto';

@Resolver('Download')
export class DownloadResolver {
  constructor(private readonly downloadService: DownloadService) {}

  @Mutation(() => String)
  public async downloadingResourcer(
    @Args('inputData') inputData: DownloadInput,
  ): Promise<any> {
    return await this.downloadService.downloading(inputData);
  }

  @Query(() => String)
  hello(): string {
    return 'Hello, you can download your favorite videos and musics from YouTube.';
  }
}
