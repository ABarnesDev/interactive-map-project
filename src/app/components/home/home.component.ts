import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Country} from "../../interfaces/country";
import {CountryDataService} from "../../services/country-data.service";
import {SvgIconComponent} from "angular-svg-icon";
import {AsyncPipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SvgIconComponent,
    AsyncPipe,
    DecimalPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  country$!: Observable<Country>;

  constructor(private countryDataService: CountryDataService) {}

  // Whenever a country on the map is clicked, retrieve the country's data by calling getCountryData from countryDataService
  // Set this.country$ to the response from getCountryData
  selectCountry(event: any) {
    if (event.target.id) {
      this.country$ = this.countryDataService.getCountryData(event.target.id);
    }
  }
}
