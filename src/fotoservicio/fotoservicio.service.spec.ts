import { Test, TestingModule } from '@nestjs/testing';
import { FotoservicioService } from './fotoservicio.service';

describe('FotoservicioService', () => {
  let service: FotoservicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FotoservicioService],
    }).compile();

    service = module.get<FotoservicioService>(FotoservicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
