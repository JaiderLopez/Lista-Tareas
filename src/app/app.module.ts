import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Componets/listar/listar.component';
import { environment } from './environtment';
import { AddComponent } from './Componets/add/add.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VerTareaComponent } from './Componets/ver-tarea/ver-tarea.component';
import { AddTareaComponent } from './Componets/add-tarea/add-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    VerTareaComponent,
    AddTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
