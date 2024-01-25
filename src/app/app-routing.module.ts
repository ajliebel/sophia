import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhilosopherDetailComponent } from './philosophers/philosopher-detail/philosopher-detail.component';
import { PhilosopherEditComponent } from './philosophers/philosopher-edit/philosopher-edit.component';
import { PhilosopherReferenceComponent } from './philosophers/philosopher-reference/philosopher-reference.component';
import { PhilosopherStartComponent } from './philosophers/philosopher-start/philosopher-start.component';
import { PhilosophersComponent } from './philosophers/philosophers.component';
import { ReferenceDetailComponent } from './references/reference-detail/reference-detail.component';
import { ReferenceEditComponent } from './references/reference-edit/reference-edit.component';
import { ReferencesStartComponent } from './references/references-start/references-start.component';
import { ReferencesComponent } from './references/references.component';
import { SchoolDetailComponent } from './schools/school-detail/school-detail.component';
import { SchoolEditComponent } from './schools/school-edit/school-edit.component';
import { SchoolStartComponent } from './schools/school-start/school-start.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolReferenceComponent } from './schools/school-reference/school-reference.component';

const routes: Routes = [
  { path: '', redirectTo: '/philosophers', pathMatch: 'full' },
  { path: 'philosophers', component: PhilosophersComponent, children: [
   { path: '', component: PhilosopherStartComponent },
   { path: 'new', component: PhilosopherEditComponent},
   { path: ':id' , component: PhilosopherDetailComponent},
   { path: ':id/edit', component: PhilosopherEditComponent},
   { path: ':id/associate', component: PhilosopherReferenceComponent}
  ]},
  { path: 'references', component: ReferencesComponent, children: [ 
  {path: '', component: ReferencesStartComponent},
  {path: 'new', component: ReferenceEditComponent},
  {path: ':id', component: ReferenceDetailComponent },
  { path: ':id/edit', component: ReferenceEditComponent}
  ]},
  { path: 'schools', component: SchoolsComponent, children: [
    {path: '', component: SchoolStartComponent},
    {path: 'new', component: SchoolEditComponent},
    {path: ':id', component: SchoolDetailComponent },
    {path: ':id/edit', component: SchoolEditComponent},
    {path: ':id/associate', component: SchoolReferenceComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
