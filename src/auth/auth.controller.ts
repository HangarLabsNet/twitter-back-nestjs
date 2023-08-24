import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto, SignupDto } from './auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './jwt-auth.guard';

@Controller('auth')
@ApiTags("auth")
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post("login")
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Public()
  async login(@Body() data: LoginDto, @Request() request) {
    return this.authService.login(request.user)
  }

  @Post("signup")
  @HttpCode(200)
  async signup(@Body() data: SignupDto) {
    return {
      "token": "123asd"
    }
  }
}
