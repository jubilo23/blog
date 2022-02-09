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
import { ListDirigirComponent } from './list-dirigir/list-dirigir.component';
import { ListTalentoComponent } from './list-talento/list-talento.component';
import { ListAseoComponent } from './list-aseo/list-aseo.component';
import { ListSchoolSundayComponent } from './list-school-sunday/list-school-sunday.component';
import { BautizosComponent } from './bautizos/bautizos.component';
import { LiderazgoComponent } from './liderazgo/liderazgo.component';
import { VaronesComponent } from './varones/varones.component';
import { FemenilComponent } from './femenil/femenil.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'cultos', component: CultosComponent },
  { path: 'admin', component: AdministracionComponent },
  { path: 'list-pred', component: ListPredicaComponent },
  { path: 'programs', component: ProgramasComponent },
  { path: 'list-direction', component: ListDirigirComponent },
  { path: 'list-talent', component: ListTalentoComponent },
  { path: 'list-aseo', component: ListAseoComponent},
  { path: 'list-school', component: ListSchoolSundayComponent},
  { path: 'bautizo', component: BautizosComponent},
  { path: 'organigram', component: OrganigramaComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CultosComponent,
    AdministracionComponent,
    ProgramasComponent,
    ListPredicaComponent,
    ListDirigirComponent,
    ListTalentoComponent,
    ListAseoComponent,
    ListSchoolSundayComponent,
    BautizosComponent,
    LiderazgoComponent,
    VaronesComponent,
    FemenilComponent,
    OrganigramaComponent
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
