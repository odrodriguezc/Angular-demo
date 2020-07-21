import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { UserComponent } from './user.component';
import { User2Component } from './user2/user2.component';
import { ParentComponent } from './hierarchy/parent.component';
import { CalculateurComponent } from './hierarchy/calculateur.component';
import { ResultatComponent } from './hierarchy/resultat.component';
import { Logger } from './hierarchy/logger';
import { AlertLogger } from './hierarchy/alert.logger';
import { ConsoleLogger } from './hierarchy/console.logger';
import { URL_TOKEN } from './hierarchy/url.token';
import { RefrigeratorComponent } from './refrigerator.component';
import { EmployeeComponent } from './employee.component';
import { PricePipe } from './price.pipe';
import { HLDirective } from './hl.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    UserComponent,
    User2Component,
    ParentComponent,
    CalculateurComponent,
    ResultatComponent,
    RefrigeratorComponent,
    EmployeeComponent,
    PricePipe,
    HLDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    { provide: Logger, useClass: ConsoleLogger },
    { provide: URL_TOKEN, useValue: 'http://google.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
