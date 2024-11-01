import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onClickLink($event)'
    }
})
export class SafeLinkDirective{
    queryParam = input('myapp', {alias:'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    onClickLink(event: MouseEvent){
        const confirm = window.confirm('Do you want to leave the page?');
        if(confirm){
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?' + this.queryParam();
            return;
        }
        event.preventDefault();
    }
}