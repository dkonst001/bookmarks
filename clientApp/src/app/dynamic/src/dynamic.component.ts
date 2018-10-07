import { Component, OnInit, ComponentRef, Input, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';

import { DynamicComponentFactoryService } from '../shared/dynamic-component-factory.service';

import { DynamicContent } from '../shared/dynamic-component-context';

@Component({
  selector: 'app-dynamic',
  template:`
    <div>
        <div #container></div>
    </div>
  `,
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input() type: string;
  @Input() context: any;

  private componentRef: ComponentRef<{}>;


  constructor( private dynamicComponentFactoryService: DynamicComponentFactoryService) { }

  ngOnInit() {

    // if (this.type) {
      // console.log('context', this.context)
      this.componentRef = this.dynamicComponentFactoryService.addDynamicComponent(this.type, this.container);
      const instance = <DynamicContent> this.componentRef.instance;
      instance.context = this.context;
      instance.ref = this.componentRef;
    //}
  }

  ngOnDestroy() {

    this.componentRef = this.dynamicComponentFactoryService.removeDynamicComponent(this.componentRef)

  }

}
