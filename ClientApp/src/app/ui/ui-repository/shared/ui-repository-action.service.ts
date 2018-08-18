import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UiRepositoryActionService {

  private subject = new Subject<any>();

  constructor() { }

  sendAction(id: number) {
    this.subject.next(id);
  }


  clearRequest() {
    this.subject.next();
  }

  getAction(): Observable<any> {
    return this.subject.asObservable();
  }

}
