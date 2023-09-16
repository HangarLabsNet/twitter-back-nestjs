import { IsEmail, IsDateString, IsNumberString, IsString } from "class-validator"

export class LoginDto {
  username: string
  password: string
}

export class SignupDto {
  @IsEmail()
  email: string

  @IsString()
  first_name: string

  @IsString()
  last_name: string

  @IsNumberString()
  phone_number: string

  @IsDateString()
  birth_date: string
}
