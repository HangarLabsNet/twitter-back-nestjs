import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto, SignupDto } from './auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiTags("auth")
export class AuthController {

  @Post("login")
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  async login(@Body() data: LoginDto, @Request() request) {
    return request.user
  }

  @Post("signup")
  @HttpCode(200)
  async signup(@Body() data: SignupDto) {
    return {
      "token": "123asd"
    }
  }
}
