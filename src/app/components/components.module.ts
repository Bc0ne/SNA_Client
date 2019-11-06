import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemDatasetComponent } from './item-dataset/item-dataset.component';
import { DatasetInputComponent } from './dataset-input/dataset-input.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatasetGraphComponent } from './dataset-graph/dataset-graph.component';
import { LinkVisualComponent } from './dataset-graph/link-visual/link-visual.component';
import { NodeVisualComponent } from './dataset-graph/node-visual/node-visual.component';
import { ZoomableDirective } from './dataset-graph/directives/zoomable.directive';
import { DraggableDirective } from './dataset-graph/directives/draggable.directive';

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
    DatasetInputComponent,
    DatasetGraphComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    ZoomableDirective,
    DraggableDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ItemDatasetComponent,
    DatasetInputComponent,
    NgxPaginationModule,
    DatasetGraphComponent,
    ZoomableDirective,
    DraggableDirective,
    LinkVisualComponent,
    NodeVisualComponent
  ]
})
export class ComponentsModule { }
