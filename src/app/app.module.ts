import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ng-bootstrap
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    MenuComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
