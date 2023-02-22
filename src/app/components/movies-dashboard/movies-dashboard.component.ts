import { Component, OnInit } from '@angular/core';
import { MoviesService } from './service/movies.service';

@Component({
  selector: 'movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css'],
})
export class MoviesComponent implements OnInit {
  public movies: any;
  public inputLabel: string = 'Search for a movie..'

  constructor(
    private moviesService: MoviesService
  ) { }
  
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