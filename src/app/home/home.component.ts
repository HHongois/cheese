import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {

  public data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getConfig();
  }

  configUrl = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=fromagescsv-fromagescsv&rows=20&facet=departement&facet=fromage&facet=lait';

  getConfig() {
    this.http.get(this.configUrl).subscribe((response) => this.data = response);
  }

}
