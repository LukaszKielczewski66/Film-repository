import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})

export class SidenavListComponent implements OnInit {

    @Output() public sidenavClose = new EventEmitter();

    constructor() { }
  
    ngOnInit(): void {}

    public closeSidenav = () => {
        this.sidenavClose.emit();
    }
}