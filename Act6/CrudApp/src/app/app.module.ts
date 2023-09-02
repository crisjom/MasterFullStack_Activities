import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { UserformComponent } from './components/userform/userform.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewuserComponent,
    UpdateuserComponent,
    UserdetailsComponent,
    UserformComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  

}
