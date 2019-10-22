import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component'
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventsService } from './events.service';
import { InetrceptorService } from './inetrceptor.service'


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SpecialEventsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, EventsService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InetrceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
