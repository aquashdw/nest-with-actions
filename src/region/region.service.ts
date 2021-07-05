import { Injectable, NotFoundException } from '@nestjs/common';
import { Region } from './entities/region.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
  ) {}

  findAllRegions(): Promise<Region[]> {
    return this.regionRepository.find();
  }

  findOne(regionId: number): Promise<Region> {
    return this.regionRepository
      .findOneOrFail({ id: regionId })
      .catch((reason) => {
        throw new NotFoundException(`region with id: ${regionId} not found`);
      });
  }

  async createRegion(createRegionDto: CreateRegionDto): Promise<void> {
    await this.regionRepository.insert({ name: createRegionDto.name });
  }

  async updateRegion(
    regionId: number,
    updateRegionDto: UpdateRegionDto,
  ): Promise<void> {
    const updateTarget: Region = await this.regionRepository
      .findOneOrFail({ id: regionId })
      .catch((reason) => {
        throw new NotFoundException(`region with id: ${regionId} not found`);
      });
    updateTarget.name = updateRegionDto.name;
    await this.regionRepository.save(updateTarget);
  }

  async deleteRegion(regionId: number): Promise<void> {
    await this.regionRepository.delete({ id: regionId });
  }
}
