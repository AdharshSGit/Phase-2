import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatMenuModule, MatSelectModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatSlideToggleModule, MatTableDataSource, MatTableModule, MatCheckboxModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HRdashboardComponent } from './hrdashboard/hrdashboard.component';
import { HRDashboardModule } from './hrdashboard/hrdashboard.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { ModalComponent } from './hrdashboard/modal/modal.component';
import { StreamComponent } from './stream/stream.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { DisplayprojectComponent } from './displayproject/displayproject.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { StatusModalComponent } from './project/status-modal/status-modal.component';
import { ChartComponent } from './chart/chart.component';
import { FieldErrorDisplayModule } from './field-error-display/field-error-display.module';
import { AvatarModule } from 'ngx-avatar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RemoveemployeeComponent } from './removeemployee/removeemployee.component';
import {MatBadgeModule} from '@angular/material/badge';
//import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HRdashboardComponent,
    NavbarComponent,
    ModalComponent,
    StreamComponent,
    NavbarComponent,
    AddprojectComponent,
    DisplayprojectComponent,
    ProjectComponent,
    LoginComponent,
    WelcomepageComponent,
    StatusModalComponent,
    ChartComponent,
    ResetpasswordComponent,
    RemoveemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    RouterModule.forRoot([]),
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    BrowserAnimationsModule,
    HRDashboardModule,
    MatTableModule,
    HttpClientModule,
    MatCheckboxModule,
    HttpClientModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule,
    MatFormFieldModule,
    FieldErrorDisplayModule,
    MatSnackBarModule,
    AvatarModule,
    MatTooltipModule,
    MatMomentDateModule,
    MatBadgeModule,
    
    /*AngularWeatherWidgetModule.forRoot({
      key: OPEN_WEATHER_MAP_API_KEY,
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    })*/
    
  ],
  providers: [ AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, StatusModalComponent,RemoveemployeeComponent]
})
export class AppModule {
}
