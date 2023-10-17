import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: "[delayHide]",
})
export class DelayhideDirective implements OnInit {

  @Input()
  delayHide = 0

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewContainerRef.clear();
    }, this.delayHide)
  }

}
