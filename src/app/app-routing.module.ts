import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhilosopherDetailComponent } from './philosophers/philosopher-detail/philosopher-detail.component';
import { PhilosopherEditComponent } from './philosophers/philosopher-edit/philosopher-edit.component';
import { PhilosopherStartComponent } from './philosophers/philosopher-start/philosopher-start.component';
import { PhilosophersComponent } from './philosophers/philosophers.component';
import { ReferencesComponent } from './references/references.component';
import { SchoolDetailComponent } from './schools/school-detail/school-detail.component';
import { SchoolEditComponent } from './schools/school-edit/school-edit.component';
import { SchoolStartComponent } from './schools/school-start/school-start.component';
import { SchoolsComponent } from './schools/schools.component';

const routes: Routes = [
  { path: '', redirectTo: '/philosophers', pathMatch: 'full' },
  { path: 'philosophers', component: PhilosophersComponent, children: [
   { path: '', component: PhilosopherStartComponent },
   { path: 'new', component: PhilosopherEditComponent},
   { path: ':id' , component: PhilosopherDetailComponent},
   { path: ':id/edit', component: PhilosopherEditComponent}
  ]},
  { path: 'references', component: ReferencesComponent}, 
  { path: 'schools', component: SchoolsComponent, children: [
    {path: '', component: SchoolStartComponent},
    {path: 'new', component: SchoolEditComponent},
    {path: ':id', component: SchoolDetailComponent },
    { path: ':id/edit', component: SchoolEditComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
