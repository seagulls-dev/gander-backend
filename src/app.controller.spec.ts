import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(appController).toBeDefined();
    });

    it('should have a controller instance', () => {
      expect(appController).toBeInstanceOf(AppController);
    });

    it('add result should be correct', () => {
      expect(appController.add({ first: 10, second: 20 })).toBe(30);
    });
  });
});
