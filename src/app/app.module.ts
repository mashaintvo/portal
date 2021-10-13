import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ArticlesComponent } from './articles/articles.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { InfoBannerComponent } from './info-banner/info-banner.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ServicesComponent,
    ProductsComponent,
    ArticlesComponent,
    PriceTableComponent,
    TestimonialComponent,
    InfoBannerComponent,
    ContactComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
