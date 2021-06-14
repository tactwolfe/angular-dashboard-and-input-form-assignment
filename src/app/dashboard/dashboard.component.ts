import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent  {

  title = 'alpha';
  data=[
    {
      cardcolor:"bg-primary",
      cardtype:"Primary Card"
    },
    {
      cardcolor:"bg-warning",
      cardtype:"Warning Card"
    },
    {
      cardcolor:"bg-success",
      cardtype:"Success Card"
    },
    {
      cardcolor:"bg-danger",
      cardtype:"Danger Card"
    }
  ]
}
