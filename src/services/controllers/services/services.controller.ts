import { Controller, Get } from '@nestjs/common';
import { ServicesService } from 'src/services/services/services/services.service';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  getServices() {
    return this.servicesService.getServices();
  }
}
