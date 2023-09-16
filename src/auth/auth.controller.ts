import { Logger, Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto, SignupDto } from './auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './jwt-auth.guard';
import { UserService } from '../user/user.service';

@Controller('auth')
@ApiTags("auth")
export class AuthController {
  private readonly logger = new Logger(AuthController.name)

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post("login")
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Public()
  async login(@Request() request) {
    return this.authService.login(request.user)
  }

  @Post("signup")
  @HttpCode(200)
  @Public()
  async signup(@Body() data: SignupDto) {
    this.logger.debug(data)
    const user = await this.userService.create(data)
    return this.authService.login(user)
  }
}
