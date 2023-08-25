export class CreateUserDto {
  email: string
  first_name: string
  last_name: string
  phone_number: string
  birth_date: string
}

export class ReadUserDto extends CreateUserDto {
  id: number
  creation_dt: Date
}
