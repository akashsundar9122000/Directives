import { Directive } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)':'onclick()'
  }
})
export class LogDirective {

  onclick(){
    console.log("CLICKED!!!");
  }

}
