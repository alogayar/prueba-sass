
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './prime/view/sample/sample.component';



/* Servicios */
import { CarService } from './prime/services/carservice';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Componentes Prime */
import {ButtonModule} from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {TabViewModule} from 'primeng/tabview';
import {PickListModule} from 'primeng/picklist';

import {RadioButtonModule} from 'primeng/radiobutton';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CheckboxModule,
    FormsModule,
    ListboxModule,
    BreadcrumbModule,
    TabViewModule,
    PickListModule,
    ButtonModule,
    RadioButtonModule,
    AccordionModule,    
    BrowserAnimationsModule,
    
    
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
