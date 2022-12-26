import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { VisionComponent } from './vision/vision.component';
import { MenuComponent } from './menu/menu.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    VisionComponent,
    MenuComponent,
    PromocionesComponent,
    RecuperacionComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
