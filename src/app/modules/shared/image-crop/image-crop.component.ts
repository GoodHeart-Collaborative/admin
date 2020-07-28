import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

// import { ERROR_MESSAGES } from 'src/app/constant/error';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss']
})
export class ImageCropComponent implements OnInit {
  constructor(
  ) { }

  @Input() roundCropper: boolean;
  @Input() aspectRatio;

  @Output() imageData = new EventEmitter<any>();
  @Output() closeCropper = new EventEmitter<any>();
  // @Output() closeCropper = new EventEmitter<any>();

  @Input() imageChangedEvent: any = '';
  croppedImage: any = '';
  imageDataObj: any;
  isFileSelected: boolean = false;
  isCropperOpen: boolean = true;
  fileSizeInvalid: boolean = false;
  msg = "";
  ngOnInit() {
console.log(this.imageChangedEvent);


  }

  // on file upload
  fileChangeEvent(event: any): void {
    let file: File = event.target.files[0];
    let size;
    let type;
    if (file) {
      size = Math.round(file.size / 1024);
      type = file.type;
    }
    if (type !== "image/jpg" && type !== "image/jpeg" &&
      type !== "image/png") {
      this.fileSizeInvalid = true;
      // this.msg = ERROR_MESSAGES.INVAID_MEDIA.image;
    } else if (size > 1024 * 10) {

      this.fileSizeInvalid = true;
      // this.msg = ERROR_MESSAGES.INVAID_MEDIA.image_size
    } else {
      this.imageChangedEvent = event;
      this.isFileSelected = true;
    }
  }


  // event on cropping image
  imageCropped(event) {
    console.log(event);

    this.imageDataObj = event;
    this.croppedImage = event.base64;
  }

  // to send image data and close cropper
  crop() {
    this.imageData.emit(this.imageDataObj);
    this.cancelCropper();
  }

  // go back to uplad image
  backToUploadFile() {
    this.isFileSelected = false;
    this.cancelCropper()
  }

  // cancel cropper
  cancelCropper() {
    // this.isCropperOpen = false;
    this.imageChangedEvent = null;
    if (!this.imageDataObj) {

      this.imageData.emit(null);
    }
    this.closeCropper.emit(false);


  }

}
