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

    const requestUrl = this.baseUrl;

    return this.http.get<any[]>(requestUrl);

  }

   /** Delete: delete bookmark from cache */
   delete (id: number): Observable<any> {
    const requestUrl = `${this.baseUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.delete<any>(requestUrl);
  }

}
