import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable()
export class TimesService {

  apiUrl:string = "http://localhost:3000";
  constructor(public http: HttpClient){

  }

  public getTimes() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/times').subscribe(data => {
        resolve(data);
      },
      err => {
        console.log(err);
      });
    });
  }

}
