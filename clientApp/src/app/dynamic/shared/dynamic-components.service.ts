import { Injectable } from '@angular/core';
import { UnknownComponent } from '../src/unknown.component';
import { UiRepositoryComponent } from '../../ui/ui-repository/src/ui-repository.component';


@Injectable()
export class DynamicComponentsService {

  private mappings = {
    'repository': UiRepositoryComponent,
 };

  constructor() { }


 getComponentType(typeName: string) {
     const type = this.mappings[typeName];
     return type || UnknownComponent;
 }

}
