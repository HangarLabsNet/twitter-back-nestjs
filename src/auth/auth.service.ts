import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name)

  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async validateUser({ username, password }) {
    return password
      ? await this.userService.findOneByEmailOrPhone(username) 
      : null
  }

  async login(user) {
    const payload = {
      sub: user.id,
      first_name: user.first_name,
      last_name: user.last_name
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
