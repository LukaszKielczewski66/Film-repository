import { Component, OnInit } from '@angular/core';
import { ActorsService } from './service/actors-service';

@Component({
  selector: 'actors-dashboard',
  templateUrl: './actors-dashboard.component.html',
  styleUrls: ['./actors-dashboard.component.css'],
})
export class ActorsComponent implements OnInit {
  public inputLabel: string = 'Search for an actor..'
  public actors: any;
  constructor(private actorsService: ActorsService) { }
  
  ngOnInit(): void {
    this.actorsService.getAll().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
 
}