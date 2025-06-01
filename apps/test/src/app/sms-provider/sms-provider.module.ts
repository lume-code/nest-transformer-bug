import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { SMSProviderEntity } from './sms-provider.entity';
import { SMSProviderQueryService } from './sms-provider-query.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SMSProviderEntity])],

      services: [SMSProviderQueryService],
      resolvers: [],
    }),
  ],
})
export class SMSProviderModule {
  // This module can be used to encapsulate SMS provider related functionality
  // such as services, controllers, and providers.
}
