import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppTranslateLoader } from './_config/translate-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { DarkModeToggleComponent } from './shared/dark-mode-toggle/dark-mode-toggle.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AdminComponent } from './admin/admin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavService } from './services/nav.service';
import { AddUserComponent } from './addUser/addUser.component';
import { MatMenuModule } from '@angular/material/menu';
import { PoliceComponent } from './police/police.component';
import { FirefighterComponent } from './firefighter/firefighter.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DarkModeToggleComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LanguageSelectorComponent,
    AdminComponent,
    SidenavComponent,
    AddUserComponent,
    PoliceComponent,
    FirefighterComponent,
    AmbulanceComponent,
    ViewLogsComponent
   ],
  imports: [
    // Local Modules
    AppRoutingModule,
    // Angular Modules
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Material Modules
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatMenuModule,
    // Translate Modules
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: AppTranslateLoader },
    }),
  ],
  providers: [
    // Local Services
    NavService,
    // Angular Services
    // Material Services
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
