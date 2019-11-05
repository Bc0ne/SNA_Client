import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemDatasetComponent } from './item-dataset/item-dataset.component';
import { DatasetInputComponent } from './dataset-input/dataset-input.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatasetGraphComponent } from './dataset-graph/dataset-graph.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxEchartsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ItemDatasetComponent,
    DatasetInputComponent,
    DatasetGraphComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ItemDatasetComponent,
    DatasetInputComponent,
    NgxPaginationModule,
    DatasetGraphComponent
  ]
})
export class ComponentsModule { }
