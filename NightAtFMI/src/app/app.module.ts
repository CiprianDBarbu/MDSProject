import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DownloadComponent } from './download/download.component';
import { ForumComponent } from './forum/forum.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomSectionComponent,
    TutorialComponent,
    DownloadComponent,
    ForumComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
