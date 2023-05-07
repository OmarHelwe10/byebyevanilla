import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  @Input() flag : string = ''
  @Input() name: string=''
  @Input() population: number = 0;
  @Input() capital:string='';
  @Input() currencies:string[]=[];

  constructor() {
  }
  ngOnInit(): void {
  }



}
