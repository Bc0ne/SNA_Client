import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomeService } from 'src/app/containers/home/home.service';

@Component({
  selector: 'app-item-dataset',
  templateUrl: './item-dataset.component.html',
  styleUrls: ['./item-dataset.component.css']
})
export class ItemDatasetComponent implements OnChanges {

  data: any;
  @Input() dataset: any;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  users: any[];
  usersCount: number = 0;


  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private homeService: HomeService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataset.previousValue) {
      this.getUsersCount();
    } else if (changes.dataset.currentValue) {
      this.getUsersCount();
    }
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
      .subscribe(res => {
        this.dataset.isImported = true;
      })
  }

  getUsersCount() {
    this.homeService.getUserCountByDatasetId(this.dataset.id).subscribe(res => {
      this.users = res;
      this.usersCount = this.users.length;
    });
  }
}


