import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesService {
  private services = [
    {
      name: 'Website Front-end',
      description:
        'With this option we will provide you with a front-end of a website',
      imgURL: 'An image url for this service',
      price: 750,
    },
    {
      name: 'Website back-end',
      description:
        'With this option we will provide you with a back-end of a website',
      imgURL: 'An image url for this service',
      price: 1250,
    },
    {
      name: 'Website front-end + back-end',
      description:
        'With this option we will provide you with both a front-end and a back-end of a website',
      imgURL: 'An image url for this service',
      price: 1500,
    },
  ];

  getServices() {
    return this.services;
  }
}
