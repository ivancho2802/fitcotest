import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgChartsModule } from 'ng2-charts';
import { QRCodeModule } from 'angularx-qrcode';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  imports: [
    QRCodeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    CdkAccordionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgChartsModule,
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
