import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from 'src/app/containers/home/home.service';
import { DatasetModel } from './dataset.model';
import { Dataset } from 'src/app/containers/home/dataset.model';

@Component({
  selector: 'app-dataset-input',
  templateUrl: './dataset-input.component.html',
  styleUrls: ['./dataset-input.component.css']
})
export class DatasetInputComponent implements OnInit {

  datasetForm: FormGroup;
  datasetModel: DatasetModel = new DatasetModel();
  @Output() onDatasetCreationSucceed = new EventEmitter<Dataset>();

  constructor(private fb: FormBuilder, private homeService: HomeService) { }

  ngOnInit() {
    this.datasetForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(5)]]
    })
  }

  saveDataset(): void {
    if (this.datasetForm.valid) {
      if (this.datasetForm.dirty) {
        const dataset = { ...this.datasetModel, ...this.datasetForm.value }
        this.homeService.saveDataset(dataset).subscribe(res => {
          this.onDatasetCreationSucceed.emit(res.data);
        })
      }
    }
  }
}
