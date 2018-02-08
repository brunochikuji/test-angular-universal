// import { SeoPageIdGuard } from './seo-page-id-guard';
// import { SeoPropertyDetailGuard } from './seo-property-detail-guard';
// import { SeoGuard } from './seo.guard';
// import { SeoService } from './seo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { PageIdComponent } from './page-id/page-id.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertiesService } from './services/properties.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    PageIdComponent,
    PropertiesComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-demystified'
    }),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        // canActivate: [SeoGuard],
        data: {
          title: ['Home page'],
          desc: 'My First Static Website built with Angular Universal'
        }
      },
      {
        path: 'page.html', component: PageComponent,
        // canActivate: [SeoGuard],
        data: {
          title: ['Elements List'],
          desc: 'My List of elements in my Static Website'
        }
      },
      {
        path: 'page/:id', component: PageIdComponent,
        // canActivate: [SeoPageIdGuard]
      },
      {
        path: 'properties.html', component: PropertiesComponent,
        // canActivate: [SeoGuard],
        data: {
          title: ['Imóveis'],
          desc: 'Lista de Imóveis'
        }
      },
      {
        path: 'properties/:code', component: PropertyDetailComponent,
        // canActivate: [SeoPropertyDetailGuard]
      }      
    ])
  ],
  providers: [
    PropertiesService
    // SeoService, SeoGuard, SeoPageIdGuard, SeoPropertyDetailGuard, PropertiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
