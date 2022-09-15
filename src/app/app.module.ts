import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componentent';
import { PhilosophersComponent } from './philosophers/philosophers.component';
import { PhilosopherListComponent } from './philosophers/philosopher-list/philosopher-list.component';
import { PhilosopherDetailComponent } from './philosophers/philosopher-detail/philosopher-detail.component';
import { PhilosopherItemComponent } from './philosophers/philosopher-list/philosopher-item/philosopher-item.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolListComponent } from './schools/school-list/school-list.component';
import { SchoolDetailComponent } from './schools/school-detail/school-detail.component';
import { SchoolItemComponent } from './schools/school-list/school-item/school-item.component';
import { ReferencesComponent } from './references/references.component';
import { ReferenceListComponent } from './references/reference-list/reference-list.component';
import { ReferenceDetailComponent } from './references/reference-detail/reference-detail.component';
import { ReferenceItemComponent } from './references/reference-list/reference-item/reference-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhilosophersComponent,
    PhilosopherListComponent,
    PhilosopherDetailComponent,
    PhilosopherItemComponent,
    SchoolsComponent,
    SchoolListComponent,
    SchoolDetailComponent,
    SchoolItemComponent,
    ReferencesComponent,
    ReferenceListComponent,
    ReferenceDetailComponent,
    ReferenceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
