import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Region } from './entities/region.entity';

@Controller('region')
export class RegionController {
  @Get()
  readAllRegions(): Region[] {
    return null;
  }

  @Get('/:id')
  readRegion(@Param('id') regionId: number): Region {
    return null;
  }

  @Post('')
  createRegion() {
    return null;
  }

  @Patch('/:id')
  updateRegion(@Param('id') regionId: number) {
    return null;
  }

  @Delete('/:id')
  deleteRegion() {
    return null;
  }
}
