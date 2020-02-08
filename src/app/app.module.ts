import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddschoolComponent } from './addschool/addschool.component';
import { RouterModule, Routes } from '@angular/router';
import { AddclassComponent } from './addclass/addclass.component';
import { AdditemComponent } from './additem/additem.component';
import { SignupComponent } from './signup/signup.component';
import { SchoolComponent } from './school/school.component';
import { MatMenuModule} from '@angular/material';
// import { SchoolsComponent } from './school/schools.component';

const appRoutes: Routes = [
  // { path: 'home', component: HomeComponent2, data: { breadcrumb: 'Home' } },
  // { path: 'overview/:id/:name', component: DistrictOverviewComponent, data: { breadcrumb: 'Home' } },
  // { path: 'overview/:id', component: DistrictOverviewComponent, data: { breadcrumb: 'Home' } },
  // { path: 'state/:id/:name', component: StateOverviewComponent},
  { path: 'addSchool', component: AddschoolComponent},
  { path: 'home', component: HomeComponent},
  { path: 'school/:id', component: SchoolComponent},
  { path: 'signup', component: SignupComponent},
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  { path: 'addClass', component: AddclassComponent},
  { path: 'addItem', component: AdditemComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddschoolComponent,
    AddclassComponent,
    AdditemComponent,
    SignupComponent,
    SchoolComponent
    // SchoolsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
