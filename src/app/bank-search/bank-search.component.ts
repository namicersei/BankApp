import { Component, OnInit } from '@angular/core';
import { FetchbanksService } from '../fetchbanks.service';
import { Bank } from '../bankStruct';
@Component({
  selector: 'app-bank-search',
  templateUrl: './bank-search.component.html',
  styleUrls: ['./bank-search.component.css']
})
export class BankSearchComponent implements OnInit {
  public optionSelected;
  public arrayOfBanks: Bank[];
  arrayOfCities = ['Kolkata', 'Bangalore', 'Mumbai', 'Delhi', 'Chennai'];
  constructor(private service: FetchbanksService) { }

  ngOnInit() {
  }
  searchBank(event) {
   this.service.fetchBank(event).subscribe((branches: any) => {
     console.log(branches);
     this.arrayOfBanks = branches;
   });
  }



}
