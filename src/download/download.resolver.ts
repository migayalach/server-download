import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DownloadService } from './download.service';
import { Download } from './entities/download.entity';
import { CreateDownloadInput } from './dto/create-download.input';
import { UpdateDownloadInput } from './dto/update-download.input';

@Resolver(() => Download)
export class DownloadResolver {
  constructor(private readonly downloadService: DownloadService) {}

  @Mutation(() => Download)
  createDownload(@Args('createDownloadInput') createDownloadInput: CreateDownloadInput) {
    return this.downloadService.create(createDownloadInput);
  }

  @Query(() => [Download], { name: 'download' })
  findAll() {
    return this.downloadService.findAll();
  }

  @Query(() => Download, { name: 'download' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.downloadService.findOne(id);
  }

  @Mutation(() => Download)
  updateDownload(@Args('updateDownloadInput') updateDownloadInput: UpdateDownloadInput) {
    return this.downloadService.update(updateDownloadInput.id, updateDownloadInput);
  }

  @Mutation(() => Download)
  removeDownload(@Args('id', { type: () => Int }) id: number) {
    return this.downloadService.remove(id);
  }
}
