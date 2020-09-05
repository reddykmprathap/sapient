import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {


      public url = 'http://api.spacexdata.com/v3/launches?limit=100';
      public launch = '';
      public landing = '';
      public year = '';
      public developerName = 'K.M PRATHAP REDDY';
      public years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
      public launchingValues = ['true', 'false'];
      public landingValues = [{value: 'true', getBgColor: 'landTrue'}, {value: 'false', getBgColor: 'landFalse'}];

      filteredFlightsts$ = new BehaviorSubject<any[]>([]);
      httpData1$ = new BehaviorSubject<any[]>([]);

      constructor(private http: HttpClient, private dataService: DataService) { }

      ngOnInit() {
        this.dataService.getGrid(this.launch, this.landing, this.year).subscribe(data => {
          console.log(data + 'got the Data');
          this.httpData1$.next(JSON.parse(JSON.stringify(data)));
          this.filteredFlightsts$.next(this.httpData1$.value);
        },
          (err: HttpErrorResponse) => {
            console.log('ERROR MESSAGE ' + err.message);
          }
        );
      }

      // FIlter the grid by using year
      changeValueByYear(value: string) {
        this.year = value;
        this.changed();
      }

      // FIlter the grid by using launching value
      changeValueByLaunch(value: string) {
        this.launch = value;
        this.changed();
      }

      // FIlter the grid by using landing value
      changeValueByLanding(value: string) {
        console.log(JSON.stringify(value), 'km2 value');
        this.landing = value;
        this.changed();
      }

      // Refresh the grid while filtering
      changed() {
        this.ngOnInit();
      }

    }
