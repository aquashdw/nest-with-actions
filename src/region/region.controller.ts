import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Player } from '../players/entities/player.entity';

@Controller('region')
export class RegionController {
  @Get()
  readAllRegions(): Player[] {
    return null;
  }

  @Get('/:id')
  readRegion(@Param('id') regionId: number): Player {
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
