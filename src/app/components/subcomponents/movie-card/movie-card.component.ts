import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCard implements OnInit {
  constructor() { }
  @Input() movie: any;
  inputLabel = 'Search for a movie..'

  ngOnInit(): void {
    if (this.movie.titleText.text === "Midnight in the Garden of Good and Evil") {
      this.movie.primaryImage.url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3cjpSug_CjEimz1uMY-8glL-Z7zxpuTu2Q&usqp=CAU";
      this.movie.titleText.text = "Midnight in the Garden";
    }
  }
 
}