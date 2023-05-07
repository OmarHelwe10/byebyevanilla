import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  MyCountries: CountryInfo[] = [];
  constructor() {
    //alert('Constructor called')
   }

  ngOnInit(): void {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {
           let c = new CountryInfo();
           c.name = json[i].name.common;
           c.flag = json[i].flags.png;
           c.population = json[i].population;
           c.capital = json[i].capital;
         c.currencies = Object.keys((json[i]).currencies);
           this.MyCountries.push(c);
        }
      })
  }

}


export class CountryInfo
{
  flag: string = '';
  name :string = '';
  population: number = 0;
  capital:string='';
   currencies:string[]=[];
}
