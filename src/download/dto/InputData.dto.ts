import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { FormatItem, Quality } from '../enum/download.enum';

@InputType()
export class DownloadInput {
  @Field()
  @MinLength(15, { message: 'Please enter a valid URL.' })
  url: string;

  @Field(() => Quality)
  @IsNotEmpty({ message: 'Please select a Quality.' })
  quality: Quality;

  @Field(() => FormatItem)
  @IsNotEmpty({ message: 'Please select a Format.' })
  format: FormatItem;
}
