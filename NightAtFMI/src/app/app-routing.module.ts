import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DownloadComponent } from './download/download.component';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'download', component:  DownloadComponent},
  {path:'forum', component: ForumComponent},
  {path:'tutorial', component:TutorialComponent},
  {path: '**',  redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }