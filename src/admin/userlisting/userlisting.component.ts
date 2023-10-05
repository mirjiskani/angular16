import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
export interface PeriodicElement {
  _id: string;
  name: number;
  email: number;
}
let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})

export class UserlistingComponent implements OnInit {
  title = 'User listing';
  userData = ELEMENT_DATA;
  displayedColumns: string[] = ['_id', 'name', 'email'];
  dataSource = this.userData;
  constructor(private apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    // ...
    this.apiService.userListing('users').subscribe((response) => {
      return response.data
    })
  }
}
