import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { MoviesComponent } from './components/movies-dashboard/movies-dashboard.component';
import { ActorsComponent } from './components/actors-dashboard/actors-dashboard.component';
import { SearchComponent } from './components/subcomponents/search-input/search-input.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidenavListComponent,
        MoviesComponent,
        ActorsComponent,
        SearchComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        RoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
    ],
})
export class AppModule { }
