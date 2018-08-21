import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class RepositoryProxyService {
// Repository Proxy (HTTP) logic


  githubUrl: string;
  baseUrl: string;

  constructor(private http: HttpClient,
              // Defined in main.ts
              @Inject('GITHUB_URL') githubUrl: string,
              @Inject('BASE_URL') baseUrl: string) {

              this.githubUrl = githubUrl;
              this.baseUrl = baseUrl;
  }

  searchtRepositories(searchKeyword: string): Observable<any[]> {

    const requestUrl = `${this.githubUrl}?q=${searchKeyword}`;

    return this.http.get<any[]>(requestUrl);

  }

   /** POST: add a new Bookmark to session cache */
   bookmarkRepository (item: any): Observable<any> {
    const requestUrl = this.baseUrl;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<any>(requestUrl, {id: item.id, item: item} , httpOptions);
  }

}
