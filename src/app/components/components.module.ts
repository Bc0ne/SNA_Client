import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemDatasetComponent } from './item-dataset/item-dataset.component';
import { DatasetInputComponent } from './dataset-input/dataset-input.component';
import {NgxPaginationModule} from'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ItemDatasetComponent,
    DatasetInputComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ItemDatasetComponent,
    DatasetInputComponent
  ]
})
export class ComponentsModule { }
