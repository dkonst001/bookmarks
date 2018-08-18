import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class BookmarkProxyService {

  baseUrl: string;

  constructor(private http: HttpClient,
              @Inject('BASE_URL') baseUrl: string) {

              this.baseUrl = baseUrl;

  }

  get(): Observable<any[]> {

    const requestUrl = this.baseUrl + 'api/Bookmarks/Get';

    return this.http.get<any[]>(requestUrl);

  }

   /** POST: add a new Group to the database */
   unBookmarkRepository (item: any): Observable<any> {
    const requestUrl = this.baseUrl + 'api/Bookmarks/BookmarkRepository';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<any>(requestUrl, {id: item.id, item: item} , httpOptions);
  }

}
