import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClassificationService {
  constructor(private readonly prismaService: PrismaService) {}

  async fetchClassifications() {
    return await this.prismaService.classifications.findMany();
  }
  
}
