import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public cheese;
  configUrl = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=fromagescsv-fromagescsv&facet=departement&facet=fromage&facet=lait&facet=recordid&refine.recordid=';

  constructor(private http: HttpClient, public route: ActivatedRoute) { }
  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    this.route.params.subscribe((params) => {
      this.http.get(this.configUrl + params['id']).subscribe((response) => this.cheese = response);
    });
  }


}
