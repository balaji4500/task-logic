import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MytaskComponent } from './mytask/mytask.component';
import { CompleteComponent } from './complete/complete.component';
import { DeleteComponent } from './delete/delete.component';
import {HttpClientModule} from '@angular/common/http'
import { MyserviceService } from './myservice.service';
import { ImportantComponent } from './important/important.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    MytaskComponent,
    CompleteComponent,
    DeleteComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,NgIf,MatSidenavModule,MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule

    
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
