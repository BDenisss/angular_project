import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectsListComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];
