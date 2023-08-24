import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name)

  async validateUser({ username, password }) {
    return password ? { username } : null
  }
}
