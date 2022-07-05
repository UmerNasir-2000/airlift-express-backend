import { Controller, Get } from '@nestjs/common';
import { ClassificationService } from './classification.service';

@Controller('classification')
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}

  @Get("/")
  fetchClassifications() {
    return this.classificationService.fetchClassifications();
  }
  
}
