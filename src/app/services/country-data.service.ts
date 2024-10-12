import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private http: HttpClient) { }

  // Get the country's information from the World Bank api and return an observable to be used in the home component
  getCountryData(countryCode: string): Observable<Country> {

    // Return an observable of type Country by using a forkJoin to combine the observables for the country's data and population
    return forkJoin({
      // Get the country's data from the World Bank api
      countryData: this.http.get(`https://api.worldbank.org/v2/country/${countryCode}?format=json`).pipe(map((data: any) => data[1][0])),
      // Get the country's population from the World Bank api
      population: this.http.get(`https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.TOTL?date=2023&format=json`).pipe(map((data: any) => data[1][0].value))
    })
  }
}
