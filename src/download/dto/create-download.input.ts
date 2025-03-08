import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDownloadInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
