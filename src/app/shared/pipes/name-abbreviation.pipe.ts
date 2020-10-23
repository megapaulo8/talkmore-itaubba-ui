import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nameAbreviation",
})
export class NameAbbreviationPipe implements PipeTransform {
  transform(name: string): string {
    if (!name) return;
    const newName = name.match(/\b\w/g) || [];
    return ((newName.shift() || '') + (newName.pop() || '')).toUpperCase();
  }
}
