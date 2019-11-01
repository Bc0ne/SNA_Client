import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';

import { HomeService } from './home.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datasets: any[] = [];
  selectedDataset: any;
  newDataset: boolean;

  constructor(private cdr: ChangeDetectorRef, private homeService: HomeService) { }


  ngOnInit() {
    this.reloadSidebar();
  }

  onSelect(dataset: any) {
    this.newDataset = false;
    this.selectedDataset = dataset;
  }

  createDataset() {
    this.selectedDataset = null;
    this.newDataset = true;

  }

  reloadSidebar() {
    this.homeService.getAllDatasets().subscribe(res => {
      this.datasets = res;
    });
  }

}
