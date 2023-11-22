import { Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Page d'accueil comme racine
    { path: 'projects-list', component: ProjectListComponent },];
