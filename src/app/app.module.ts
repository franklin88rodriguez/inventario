import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarequipoComponent } from './registrarequipo/registrarequipo.component';
import { AsignarequipoComponent } from './asignarequipo/asignarequipo.component';
import { AdministrarComponent } from './administrar/administrar.component';
import { RegistrousuariosComponent } from './registrousuarios/registrousuarios.component';
import { ConsultarequipoComponent } from './consultarequipo/consultarequipo.component';
import { PruebasComponent } from './pruebas/pruebas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistrarequipoComponent,
    AsignarequipoComponent,
    AdministrarComponent,
    RegistrousuariosComponent,
    ConsultarequipoComponent,
    PruebasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
