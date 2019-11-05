import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';

import { HomeService } from './home.service';
import { Dataset } from './dataset.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datasets: Dataset[] = [];
  selectedDataset: any;
  newDataset: boolean;

  constructor(private cdr: ChangeDetectorRef, private homeService: HomeService) { }

  ngOnInit() {
    this.getAllDatasets();
  }

  getAllDatasets() {
    this.homeService.getAllDatasets().subscribe(res => {
      this.datasets = res.data;
    });
  }

  onSelect(dataset: any) {
    this.newDataset = false;
    this.selectedDataset = dataset;
  }

  createDataset() {
    this.selectedDataset = null;
    this.newDataset = true;
  }

  addItemToSidebar($event) {
    this.datasets.push($event);
    this.selectedDataset = $event;
    this.newDataset = false;
  }

  deleteDatasetFromSidebar() {
    this.selectedDataset = null;
  }
}
