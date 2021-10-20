import { Test, TestingModule } from '@nestjs/testing';
import { Tests2Controller } from './tests2.controller';

describe('Tests2Controller', () => {
  let controller: Tests2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Tests2Controller],
    }).compile();

    controller = module.get<Tests2Controller>(Tests2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
