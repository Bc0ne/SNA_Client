import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    HomeRoutingModule,
    ComponentsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
