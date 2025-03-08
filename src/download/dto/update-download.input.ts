import { CreateDownloadInput } from './create-download.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDownloadInput extends PartialType(CreateDownloadInput) {
  @Field(() => Int)
  id: number;
}
