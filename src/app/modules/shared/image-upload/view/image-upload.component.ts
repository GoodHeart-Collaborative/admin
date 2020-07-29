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

  constructor(
    private $upload: FileUploadService
  ) { }

  ngOnInit() {
  }

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.imageSelectedFromInput(event);
    } catch (err) {
      if (err.type) {
        this.$upload.showAlert(invalidImageError());
      } else if (err.size) {
        this.$upload.showAlert(invalidFileSize());
      }
    }
  }

  imageSelected(event) {
    this.profilePicURL = event.base64;
    this.uploadMedia.emit(this.profilePicURL);
  }

  imageSelectedFromInput(event) {
    this.imageChangedEvent = event;
  }

  closeCropper() {
    this.img.nativeElement.value = null;
    this.imageChangedEvent = null;
  }
}
