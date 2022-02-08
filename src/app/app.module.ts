import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CultosComponent } from './cultos/cultos.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasComponent } from './programas/programas.component';
import { ListPredicaComponent } from './list-predica/list-predica.component';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'cultos', component: CultosComponent },
  { path: 'admin', component: AdministracionComponent },
  { path: 'list-pred', component: ListPredicaComponent },
  { path: 'programs', component: ProgramasComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CultosComponent,
    AdministracionComponent,
    ProgramasComponent,
    ListPredicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { 
  
}
