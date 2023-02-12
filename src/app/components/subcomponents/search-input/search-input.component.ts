import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() { }

  @Input() label = '';

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];  
  
  ngOnInit(): void {}
 
}