import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCard implements OnInit {
  constructor() { }
  
  inputLabel = 'Search for a movie..'

  ngOnInit(): void {}
 
}