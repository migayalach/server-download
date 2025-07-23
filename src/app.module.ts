import { Module } from '@nestjs/common';
import { DownloadModule } from './download/download.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      introspection: true,
      context: ({ req, res }: { req: Request; res: Response }) => ({
        req,
        res,
      }),
    }),
    DownloadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
