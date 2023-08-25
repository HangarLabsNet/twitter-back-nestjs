import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { CreateUserDto, ReadUserDto } from './user.dto';

@Injectable()
export class UserService {
  
  async findAll(): Promise<ReadUserDto[]> {
    return UserModel.query().castTo()
  }

  async create(data: CreateUserDto): Promise<ReadUserDto> {
    return UserModel.query().insert(data).castTo()
  }

  async findOneByEmailOrPhone(emailOrPhone: string): Promise<ReadUserDto> {
    return UserModel.query()
      .where({ email: emailOrPhone })
      .orWhere({ phone_number: emailOrPhone })
      .first().castTo()
  }
}
