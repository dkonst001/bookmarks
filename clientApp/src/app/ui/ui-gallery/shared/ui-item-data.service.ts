import { Injectable } from '@angular/core';

@Injectable()
export class UiItemDataService {

  private _item: any;
  private _action: string;

  constructor() { }

  set item(item: any){
    this._item = item;
  }

  set action(action: string){
    this._action = action;
  }

  get item() {
    return this._item
  }

  get action() {
    return this._action
  }


}
