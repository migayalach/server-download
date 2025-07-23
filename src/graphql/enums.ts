import { registerEnumType } from '@nestjs/graphql';
import { FormatItem, Quality } from 'src/download/enum/download.enum';

registerEnumType(Quality, { name: 'Quality' });
registerEnumType(FormatItem, { name: 'Format' });
