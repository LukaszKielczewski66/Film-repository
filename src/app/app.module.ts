import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MovieCard } from './components/subcomponents/movie-card/movie-card.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidenavListComponent,
        MoviesComponent,
        ActorsComponent,
        SearchComponent,
        MovieCard
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
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
        MatAutocompleteModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule
    ],
})
export class AppModule { }
