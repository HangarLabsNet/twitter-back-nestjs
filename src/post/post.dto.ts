import { IsString } from "class-validator"

export class ReadPostDto {
  id: string;
  user_id: string
  content: string;
  creation_dt: string
}

export class CreatePostDto {
  @IsString()
  content: string;
}
