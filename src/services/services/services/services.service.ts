import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesService {
  private services = [
    {
      name: 'Website Front-end Coding',
      description:
        'With this option we will provide you with a front-end of a website, written using HTML, CSS, Tailwind, plain JavaScript and/or React',
      imgURL: 'An image url for this service',
      price: 750,
    },
    {
      name: 'Website Front-end UI/UX Design',
      description:
        'With this option we will provide you with front-end UI/UX Design of a website',
      imgURL: 'An image url for this service',
      price: 800,
    },
    {
      name: 'Website SEO',
      description:
        'With this option we will improve the SEO of an existing website',
      imgURL: 'An image url for this service',
      price: 400,
    },
    {
      name: 'Website API',
      description:
        'With this option we will provide you with a web API written in Express, NestJS, or ASP.NET',
      imgURL: 'An image url for this service',
      price: 1250,
    },
    {
      name: 'Database Integration',
      description:
        'With this option we will connect an existing API to a database',
      imgURL: 'An image url for this service',
      price: 500,
    },
    {
      name: 'Unit Tests',
      description:
        'With this option we will create unit tests for either the backend and/or the front-end of your website using Jest, or XUnit',
      imgURL: 'An image url for this service',
      price: 1100,
    },
    {
      name: 'Authorisation and Authentication',
      description:
        'With this option we will set up your site with Authorisation and Authentications',
      imgURL: 'An image url for this service',
      price: 2000,
    },
  ];

  getServices() {
    return this.services;
  }
}
