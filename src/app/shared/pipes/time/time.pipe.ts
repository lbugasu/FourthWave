import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "time",
})
export class TimePipe implements PipeTransform {
  transform(value: string | number): string {
    return this.toHHMMSS(value as string);
  }

  toHHMMSS(duration: string) {
    if (`${duration}`.split(":").length > 1) {
      return duration;
    }
      const secs: number = +duration;;
      var hours = Math.floor(secs / 3600);
    var minutes = Math.floor(secs / 60) % 60;
    var seconds = secs % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  }

  getNiceDuration(duration: string) {
    if (duration.split(":").length == 1) {
      return new Date(+duration * 1000).toISOString().substr(11, 8);
    }
    return duration;
  }
}
