import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
//componentes
import { CancionesComponent } from './canciones/canciones.component';
//servicios
import { CancionesService } from './providers/canciones.service';
import { HttpClientModule } from '@angular/common/http';
//PIPI ESTRADA


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
