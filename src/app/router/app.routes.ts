import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { PositiveMessageComponent } from '../components/pages/positive-message/positive-message.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full'},
  { path: 'messages', component: PositiveMessageComponent },
];
