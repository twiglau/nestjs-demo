import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { PolicyService } from './policy.service';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';
import { CreatePolicyPermissionDto } from './dto/create-policy-permission.dto';
import { Serialize } from '@/common/decorators/serialize.decorator';
import { PublicPolicyDto } from './dto/public-policy.dto';
import { UpdatePolicyPermissionDto } from './dto/update-policy-permission.dto';

@Controller('policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Post()
  create(@Body() createPolicyDto: CreatePolicyDto) {
    return this.policyService.create(createPolicyDto);
  }

  @Post('permission')
  createPolicyWithPermission(@Body() dto: CreatePolicyPermissionDto) {
    return this.policyService.createPolicyWithPermission(dto);
  }

  @Get()
  @Serialize(PublicPolicyDto)
  findAll(
    @Query(
      'page',
      new ParseIntPipe({
        optional: true,
      }),
    )
    page: number = 1,
    @Query(
      'size',
      new ParseIntPipe({
        optional: true,
      }),
    )
    size: number = 10,
    @Query('action') action: string,
    @Query('effect') effect: string,
    @Query('subject') subject: string,
  ) {
    return this.policyService.find(page, size, { action, effect, subject });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePolicyDto: UpdatePolicyDto) {
    return this.policyService.update(+id, updatePolicyDto);
  }

  @Put(':id/permission')
  updatePolicyPermission(
    @Param('id') id: string,
    @Body() dto: UpdatePolicyPermissionDto,
  ) {
    return this.policyService.updatePolicyPermission(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.policyService.remove(+id);
  }
}
