import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomeService } from 'src/app/containers/home/home.service';
import { User } from './user.model';
import { Dataset } from 'src/app/containers/home/dataset.model';

@Component({
  selector: 'app-item-dataset',
  templateUrl: './item-dataset.component.html',
  styleUrls: ['./item-dataset.component.css']
})
export class ItemDatasetComponent implements OnChanges {

  @Input() dataset: Dataset;
  @Output() onDatasetDeletionSucceed: EventEmitter<number>;
  users: User[];
  usersCount: number = 0;
  isDeleted: boolean = false;

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  uploadResponse = { status: '', message: '' };


  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private homeService: HomeService) {
    this.onDatasetDeletionSucceed = new EventEmitter<number>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataset.currentValue && changes.dataset.previousValue) {
      this.getDatasetUsers();
    } else if (changes.dataset.currentValue) {
      this.getDatasetUsers();
    }
  }

  getDatasetUsers() {
    this.homeService.getUsersByDatasetId(this.dataset.id).subscribe(res => {
      this.users = res.data.users;
      this.usersCount = this.users.length;
      this.dataset = res.data.dataset;
    });
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.homeService.uploadDataByDatasetId(this.dataset.id, formData)
      .subscribe((res) => {
        this.uploadResponse = res;
        this.getDatasetUsers();
      })
  }

  deleteDataset() {
    this.isDeleted = true;
    this.homeService.deleteDatasetById(this.dataset.id).subscribe((res) => {
      this.onDatasetDeletionSucceed.emit(this.dataset.id);
      this.dataset = null;
      this.isDeleted = false;
    });
  }
}


