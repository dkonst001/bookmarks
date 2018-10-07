import { Injectable, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UiItemActionService {

  private subject = new Subject<any>();

  constructor() { }

  sendAction(id: number, action: string, ref?: ComponentRef<{}>) {
    this.subject.next({id: id, action: action, ref: ref})
    ;
  }


  clearRequest() {
    this.subject.next();
  }

  getAction(): Observable<any> {
    return this.subject.asObservable();
  }

}
