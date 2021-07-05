import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Region } from './entities/region.entity';
import { CreateRegionDto } from './dto/create-region.dto';
import { RegionService } from './region.service';
import { UpdateRegionDto } from './dto/update-region.dto';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  async readAllRegions(): Promise<Region[]> {
    return await this.regionService.findAllRegions();
  }

  @Get('/:id')
  async readRegion(@Param('id') regionId: number): Promise<Region> {
    return this.regionService.findOne(regionId);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createRegion(@Body() createRegionDto: CreateRegionDto) {
    return await this.regionService.createRegion(createRegionDto);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async updateRegion(
    @Param('id') regionId: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ) {
    return await this.regionService.updateRegion(regionId, updateRegionDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteRegion(@Param('id') regionId: number) {
    return await this.regionService.deleteRegion(regionId);
  }
}
