import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RoutingModule } from './routing/routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from "./components/navbar/navbar.component";


const routes: Routes = [
  { path: '/home', redirectTo: '/tst', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MatToolbarModule,
        MatIconModule,
        RoutingModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class AppModule { }
