import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders().set('Content-type','application/json').set('Accept','application/json')
  httpOptions = {
    headers: this.headers
  }
  url = "https://api.spaceXdata.com/v3/launches?limit=100";
  constructor(private http: HttpClient) { }
  
  getGrid(launchSucces, landSuccess, launchYear): Observable<any> {
      return this.http.get(`${this.url}launch_success=${launchSucces}&land_success=${landSuccess}&launch_year=${launchYear}`).pipe(
      tap(data => {
        console.log(data + "skm service data");
      })
    );
  }  
}