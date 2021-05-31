import { Component, NgModule, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// @NgModule({
//   imports: [MatSliderModule]
// })

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
