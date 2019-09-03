import { ScreenComponent } from './../screen/screen.component';
import { StatCardComponent } from './../stat-card/stat-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { InfoCardsComponent } from '../info-cards/info-cards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage, InfoCardsComponent, StatCardComponent, ScreenComponent]
})
export class DashboardPageModule {}
