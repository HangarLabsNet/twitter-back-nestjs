import { PageDto } from "src/common.dto";

export class ReadPostDto {
  id: string;
  content: string;
  creationDt: string
}

export class CreatePostDto {
  content: string;
}
