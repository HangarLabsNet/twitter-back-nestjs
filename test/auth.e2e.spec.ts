import { config } from 'dotenv';
config()

import { ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify"
import { AppModule } from '../src/app.module';

describe('Auth', () => {
  let app: NestFastifyApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
    .compile();

    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());

    app.useGlobalPipes(new ValidationPipe({
      whitelist: true
    }));

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  })

  it(`GET /posts`, () => {
    return app
      .inject({
        method: 'GET',
        url: '/posts',
      })
      .then((result) => {
        expect(result.statusCode).toEqual(401);
      });
  });

  let accessToken

  it(`POST /auth/signup`, () => {
    return app
      .inject({
        method: 'POST',
        url: '/auth/signup',
        body: {
          'email': 'test@test.com',
          'first_name': 'test',
          'last_name': 'e2e',
          'phone_number': '+51987123654',
          'birth_date': '2001-01-01',
          // 'password': '124356',
        }
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        const resultBody = result.json()
        accessToken = resultBody.access_token
      });
  });

  it(`GET /posts with signup token`, () => {
    return app
      .inject({
        method: 'GET',
        url: '/posts',
        headers: {
          'authorization': `Bearer ${accessToken}`
        }
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it(`POST /auth/login`, () => {
    return app
      .inject({
        method: 'POST',
        url: '/auth/login',
        body: {
          'username': 'test@test.com',
          'password': '124356'
        }
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        const resultBody = result.json()
        accessToken = resultBody.access_token
      });
  });

  it(`GET /posts with login token`, () => {
    return app
      .inject({
        method: 'GET',
        url: '/posts',
        headers: {
          'authorization': `Bearer ${accessToken}`
        }
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  afterAll(async () => {
    await app.close();
  });
})
