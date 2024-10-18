import {
  Body,
  Controller,
  ExceptionFilter,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { Role, Users } from '@prisma/client';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { Public } from './auth.decorator';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Handles user sign-up requests.
   *
   * @param {SignUpDto} data - The data transfer object containing user sign-up information.
   * @returns {Promise<Users | ExceptionFilter>} The created user object or exception throw.
   */
  @Public()
  @Post('sign-up')
  signUp(@Body() data: SignUpDto): Promise<Users | ExceptionFilter> {
    return this.authService.signUp(data);
  }

  @Public()
  @Post('sign-in')
  signIn(@Body() data: SignInDto) {
    return this.authService.signIn(data);
  }

  @Roles(Role.STUDENT)
  @UseGuards(RolesGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
