import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "date",
})
export class DatePipe implements PipeTransform {
  transform(value: Date): string {
    return this.getNiceDate(value);
  }

  getNiceDate(date: Date) {
    return new Date(date).toDateString();
  }
}
