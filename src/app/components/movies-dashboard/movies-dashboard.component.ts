import { Component, OnInit } from '@angular/core';
import { MoviesService } from './service/movies.service';

@Component({
  selector: 'movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css'],
})
export class MoviesComponent implements OnInit {
  public movies: any = [];
  public page = 1;
  public inputLabel: string = 'Search for a movie..'

  constructor(
    private moviesService: MoviesService
  ) { }
  
  ngOnInit(): void {
    this.getMovies(this.page);
  }
 
    public getMovies(page: number) {
      this.moviesService.getAll(page).subscribe({
        next: (res: any) => { 
          if (res.results) {
            res.results.forEach((movie: any) => {
              this.movies.push(movie);
            })
          }
         },
        error: (err: any) => { console.log(err) }
      }
      )
    }

    public loadMovies() {
      this.page++;
      this.getMovies(this.page);
    }
}