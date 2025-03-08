import { Test, TestingModule } from '@nestjs/testing';
import { DownloadResolver } from './download.resolver';
import { DownloadService } from './download.service';

describe('DownloadResolver', () => {
  let resolver: DownloadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadResolver, DownloadService],
    }).compile();

    resolver = module.get<DownloadResolver>(DownloadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
