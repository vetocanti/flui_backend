import { Test, TestingModule } from '@nestjs/testing';
import { FotoservicioController } from './fotoservicio.controller';
import { FotoservicioService } from './fotoservicio.service';

describe('FotoservicioController', () => {
  let controller: FotoservicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FotoservicioController],
      providers: [FotoservicioService],
    }).compile();

    controller = module.get<FotoservicioController>(FotoservicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
