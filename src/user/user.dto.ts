import { IsEmail, IsDateString, IsNumberString } from "class-validator"

export class CreateUserDto {
  @IsEmail()
  email: string

  first_name: string
  last_name: string

  @IsNumberString()
  phone_number: string

  @IsDateString()
  birth_date: string
}

export class ReadUserDto extends CreateUserDto {
  id: number
  creation_dt: Date
}
