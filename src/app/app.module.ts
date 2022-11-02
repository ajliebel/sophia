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
import { DropdownDirective } from './shared/dropdown.directive';
import { PhilosopherStartComponent } from './philosophers/philosopher-start/philosopher-start.component';
import { PhilosopherEditComponent } from './philosophers/philosopher-edit/philosopher-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PhilosopherService } from './philosophers/philosopher.service';
import { SchoolStartComponent } from './schools/school-start/school-start.component';
import { SchoolService } from './schools/school.service';
import { SchoolEditComponent } from './schools/school-edit/school-edit.component';

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
    ReferenceItemComponent,
    DropdownDirective,
    PhilosopherStartComponent,
    PhilosopherEditComponent,
    SchoolStartComponent,
    SchoolEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PhilosopherService, SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
