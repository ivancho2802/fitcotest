import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulePage } from './schedule';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    NgChartsModule
  ],
  declarations: [
    SchedulePage,
    ScheduleFilterPage
  ]
})
export class ScheduleModule { }
