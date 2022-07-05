import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private appUrl = "https://jsonplaceholder.typicode.com"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.appUrl + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(post : any) : Observable<Post>{
    return this.httpClient.post<Post>(this.appUrl + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id: any): Observable<Post>{
    return this.httpClient.get<Post>(this.appUrl + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: any, post: any): Observable<Post> {
    return this.httpClient.put<Post>(this.appUrl + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: any){
    return this.httpClient.delete<Post>(this.appUrl + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
