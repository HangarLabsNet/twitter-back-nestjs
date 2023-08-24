export class LoginDto {
  username: string
  password: string
}

export class SignupDto {
  name: string
  birth_date: string
  phone_number?: string
  email?: string
}
