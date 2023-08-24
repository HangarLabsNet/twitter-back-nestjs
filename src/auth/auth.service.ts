import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name)

  constructor(
    private jwtService: JwtService
  ) {}

  async validateUser({ username, password }) {
    return password ? { username, userId: new Date().toISOString() } : null
  }

  async login(user) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
