import { Module } from '@nestjs/common';
import { ServicesController } from './controllers/services/services.controller';
import { ServicesService } from './services/services/services.service';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
