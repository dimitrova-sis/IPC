import { OnDestroy, Directive, Component } from '@angular/core'

@Component({
    template: ''
  })
export class BaseComponent implements OnDestroy {
  protected isAlive = true

  constructor() { }

  ngOnDestroy() {
    this.isAlive = false
  }
}