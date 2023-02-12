import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor() { }
  
  inputLabel = 'Search for a movie..'

  ngOnInit(): void {}
 
}