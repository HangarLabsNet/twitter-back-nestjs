export class PageDto<T> {
  constructor(data: T[], total: number) {
    this.data = data
    this.total = total
  }
  
  data: T[]
  total: number
}
