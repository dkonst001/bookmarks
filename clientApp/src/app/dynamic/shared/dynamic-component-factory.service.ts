import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
  ComponentRef
} from '@angular/core'

import { DynamicComponentsService } from './dynamic-components.service';

@Injectable()
export class DynamicComponentFactoryService {


  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private dynamicComponentsService: DynamicComponentsService) {
  }

  public addDynamicComponent(type: string, container: ViewContainerRef)  {
    const componentType = this.dynamicComponentsService.getComponentType(type)
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType)
    const componentRef = container.createComponent(factory);
    return componentRef;

  }

  public removeDynamicComponent(componentRef: ComponentRef<{}>): any {
    if (componentRef) {
      componentRef.destroy();
      componentRef = null;
    }
    return componentRef;
  }

}
