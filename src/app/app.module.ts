// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadoModule } from './empleado/empleado.module';
import { HttpClientModule } from '@angular/common/http';
import { JornadaModule } from './jornada/jornada.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TipoJornadaModule } from './tipo-jornada/tipo-jornada.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LandingComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EmpleadoModule,
    HttpClientModule,
    JornadaModule,
    RouterModule,
    TipoJornadaModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
