import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { startWith } from 'rxjs/operators';

@Injectable()
export class UiRepositoryActionService {

  private subject = new Subject<any>();

  constructor() { }

  sendAction(id: number, action: string) {
    this.subject.next({id: id, action: action})
    ;
  }


  clearRequest() {
    this.subject.next();
  }

  getAction(): Observable<any> {
    return this.subject.asObservable();
  }

}
