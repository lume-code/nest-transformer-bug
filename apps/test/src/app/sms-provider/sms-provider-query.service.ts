import { InjectRepository } from '@nestjs/typeorm';
import { QueryService } from '@ptc-org/nestjs-query-core';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { Repository } from 'typeorm';
import { SMSProviderEntity } from './sms-provider.entity';

@QueryService(SMSProviderEntity)
export class SMSProviderQueryService extends TypeOrmQueryService<SMSProviderEntity> {
  constructor(
    @InjectRepository(SMSProviderEntity)
    public override repo: Repository<SMSProviderEntity>
  ) {
    super(repo);
  }

  override async createOne(record: any): Promise<SMSProviderEntity> {
    return super.createOne(record);
  }
}
