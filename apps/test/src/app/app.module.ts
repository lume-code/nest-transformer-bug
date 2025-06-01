import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SMSProviderModule } from './sms-provider/sms-provider.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SMSProviderEntity } from './sms-provider/sms-provider.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [SMSProviderEntity],
      synchronize: true,
      logging: true,
    }),
    SMSProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
