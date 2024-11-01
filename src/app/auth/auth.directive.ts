import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  constructor() { 
    effect(() => { //effect function is called when the signal value changes
      if(this.authService.activePermission() === this.userType()){ //now angular will set subsription on both signals in the if and calls this fucntion when it changes.
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else{
        this.viewContainerRef.clear();
      }
    });
  }
}
