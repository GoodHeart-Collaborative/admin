import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  imageFile: any;
  @Input() profilePicURL;
  @Output() uploadMedia = new EventEmitter();
  imageChangedEvent: any;
  @ViewChild('file', { static: false }) img;
  saveEvent: any;

  constructor(
    private $upload: FileUploadService
  ) { }

  ngOnInit() {
  }

  async onSelectFile(event) {
    this.saveEvent = event;
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.imageSelectedFromInput(event);
    } catch (err) {
      this.saveEvent.target.value = null;
      if (err.type) {
        this.$upload.showAlert(invalidImageError());
      } else if (err.size) {
        this.$upload.showAlert(invalidFileSize());
      }
    }
  }

  imageSelected(event) {
    this.profilePicURL = event.base64;
    this.uploadMedia.emit(event.file);
  }

  imageSelectedFromInput(event) {
    this.imageChangedEvent = event;
  }

  closeCropper() {
    // this.img.nativeElement.value = null;
    this.saveEvent.target.value = null;
    this.imageChangedEvent = null;
  }

  removeMedia() {
    // this.img.nativeElement.value = null;
    this.saveEvent.target.value = null;
    this.profilePicURL = '';    
    this.imageChangedEvent = null;
    this.uploadMedia.emit(null);
  }
}
