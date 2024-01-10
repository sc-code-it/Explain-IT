import { Routes } from '@angular/router';
import { PositiveInfoComponent } from '../components/pages/positive-info/positive-info.component';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full'},
  { path: 'pos-info', component: PositiveInfoComponent },
];
