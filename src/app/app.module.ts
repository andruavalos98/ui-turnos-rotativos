// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadoModule } from './empleado/empleado.module';
import { JornadaModule } from './jornada/jornada.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EmpleadoModule,
    JornadaModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
