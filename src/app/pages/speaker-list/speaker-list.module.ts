import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SpeakerListPage } from './speaker-list';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerListPageRoutingModule,
    CdkAccordionModule
  ],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}
