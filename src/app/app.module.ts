import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//all the required or generated components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//to perform http client request
import { HttpClientModule } from '@angular/common/http';
//to create froms
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule} from '@angular/forms';
import{RouterModule, Routes} from '@angular/router';
//all the matcard modules required
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes:Routes=[
  {
    path:'', redirectTo:'dahsboard',pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule, MatInputModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatExpansionModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
