import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { MomentPipe } from './moment.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/event-details/location/location.component';
import { HeaderComponent } from './components/event-details/header/header.component';
import { OrganizersComponent } from './components/event-details/organizers/organizers.component';
import { PricingComponent } from './components/event-details/pricing/pricing.component';
import { ScheduleComponent } from './components/event-details/schedule/schedule.component';
import { SpeakersComponent } from './components/event-details/speakers/speakers.component';
import { SponsorsComponent } from './components/event-details/sponsors/sponsors.component';
import { BasicInfoComponent } from './components/event-details/basic-info/basic-info.component';
import { BannerComponent } from './components/event-details/banner/banner.component';
import { EventFooterComponent } from './components/event-details/event-footer/event-footer.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { LiveEventsComponent } from './components/live-events/live-events.component';
import { EventCategoriesComponent } from './components/event-categories/event-categories.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { PhoneConfirmationComponent } from './pages/phone-confirmation/phone-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentPipe,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    DiscoverPageComponent,
    SettingsPageComponent,
    AccountPageComponent,
    EventPageComponent,
    NavbarComponent,
    FooterComponent,
    LocationComponent,
    HeaderComponent,
    OrganizersComponent,
    PricingComponent,
    ScheduleComponent,
    SpeakersComponent,
    SponsorsComponent,
    BasicInfoComponent,
    BannerComponent,
    EventFooterComponent,
    AdBannerComponent,
    LiveEventsComponent,
    EventCategoriesComponent,
    EventsListComponent,
    PhoneConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule

  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
