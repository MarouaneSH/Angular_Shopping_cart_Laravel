import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators/catchError';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Rx'


const apiUrl =  "http://localhost:8000/api";

@Injectable()
export class ApiService {



  constructor(private http:HttpClient) { }

  get(path,params:HttpParams = new HttpParams()){
      return this.http.get(`${apiUrl}/${path}`, {params})
             .pipe(
               catchError(this.handleError)
            );
  }



  handleError(err:any){
    console.log("sdds");
    return Observable.throw(err);
  }
}
