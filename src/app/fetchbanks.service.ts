import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class FetchbanksService {

  private url = 'https://app.fyle.in/api/bank_branches?';
  constructor(private http: HttpClient) { }

  fetchBank(cityName) {
  return this.http.get(this.url + 'city=' + cityName.toUpperCase() + '&offset=0&limit=50');
  }
}
