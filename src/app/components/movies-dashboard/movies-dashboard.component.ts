import { Component, OnInit } from '@angular/core';
import { MoviesService } from './service/movies.service';

@Component({
  selector: 'movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css'],
})
export class MoviesComponent implements OnInit {
  public movies: any;
  constructor(
    private moviesService: MoviesService
  ) { }
  
  inputLabel: string = 'Search for a movie..'

  ngOnInit(): void {
    this.getMovies();
  }
 
    public getMovies() {
      this.moviesService.getAll().subscribe({
        next: (res: any) => { 
          this.movies = res.results;
         },
        error: (err: any) => { console.log(err) }
      }
      )
    }
}