import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "brazilianCurrency",
})
export class BrazilianCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return;
    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  }
}
