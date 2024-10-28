import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
  pure : false,
  standalone: true
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.log("hello nilax");
    
    return value.split(' ')
    .map(word => word.charAt(0).toUpperCase() + 
    word.slice(1).toLowerCase())
    .join(' ');
  }

}

@Pipe({
  name: 'FilterArray',
  standalone: true
})
export class FilterArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const UserInput : any = args[0];

    return value.filter((a:any) => a.toString().toLowerCase().includes(UserInput.toLowerCase()));
  }

}
