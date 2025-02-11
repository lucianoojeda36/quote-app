import { Controller, Get, Param } from '@nestjs/common';
import { UserFacade } from 'src/facades/user/user-facade';
import { UserResponseDto } from './dto/user-response.dto';
import { CustomLoggerService } from 'src/common/logger/logger.service';

@Controller('users')
export class UserController {
  constructor(
    private userFacade: UserFacade,
    private logger: CustomLoggerService,
  ) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserResponseDto> {
    this.logger.log(`Fetching user with ID: ${id}`);
    try {
      const result = await this.userFacade.findById(id);
      if (!result) {
        this.logger.warn(`User with ID: ${id} not found`);
      } else {
        this.logger.log(`User with ID: ${id} retrieved successfully`);
      }
      return result;
    } catch (error) {
      this.logger.error('Error fetching user', error.stack);
      throw error;
    }
  }

  // @Put(':id')
  // async updateUser(
  //   @Param('id') id: string,
  //   @Body() userData: UpdateUserDto,
  // ): Promise<UserResponseDto> {
  //   return this.userFacade.update(id, userData);
  // }

  // @Delete(':id')
  // async deleteUser(@Param('id') id: string): Promise<void> {
  //   return this.userFacade.delete(id);
  // }
}
