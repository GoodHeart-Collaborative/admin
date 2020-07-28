import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileUploadService } from '../../services/file-upload.service';
import { PopupService } from '../../popup';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';
import { onSelectFile } from 'src/app/constant/file-input';

@Component({
  selector: 'media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.scss']
})
export class MediaUploadComponent implements OnInit {
  imageFile: any;
  @ViewChild('file', { static: false }) img;

 @Output() uploadMedia = new EventEmitter();
 @Input() profilePicURL;
  imageChangedEvent: any;
  // mediaFiles: any[] = [];
  // @Input() mediaControl: FormControl;
  // @Input() maxlength: number;
  // currentMediaCounts = 0;
  // @Output() removeMedia = new EventEmitter();
  constructor(
    private $popup: PopupService, 
    private $upload: FileUploadService) { }

  ngOnInit() {
  }

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.imageSelectedFromInput(event);

      // this.profilePicURL = result.url;
    } catch (err) {
      if (err.type) {
        this.$upload.showAlert(invalidImageError());
      } else if (err.size) {
        this.$upload.showAlert(invalidFileSize());
      }
    }
  }

  // onMarkDefault(media: any) {
  //   const defaultMedia = this.mediaFiles.find(mediaItem => mediaItem.isDefault);
  //   if (defaultMedia) {
  //     defaultMedia.isDefault = false;
  //   }
  //   media.isDefault = true;
  // }


 // async onRemoveMedia(media: any) {
 //   const index = this.mediaFiles.findIndex(el => el.s3Url == media);
 //   if (index >= 0) {
 //     this.mediaFiles.splice(index, 1);
  //   }
  //   const valueOfForm = this.mediaControl.value;
  //   const indexForForm = valueOfForm.indexOf(media);
  //   valueOfForm.splice(indexForForm, 1);
  //   this.mediaControl.setValue(valueOfForm);
 //   this.removeMedia.emit(media.split('/')[media.split('/').length - 1])
  // }


  // async onChangeHandler(input: HTMLInputElement) {
  //   const files = input.files;
  //   if (files.length > (this.maxlength - this.mediaControl.value.length)) {
  //     this.$popup.error(`Max ${this.maxlength - this.mediaControl.value.length} images can be attached!`);
  //   } else {
  //     for (let i = 0; i < files.length; i++) {
  //       const reader = new FileReader();
  //       const file = files.item(i);
  //       const media = {
  //         file,
  //         isDefault: false,
  //         dataUrl: ''
  //       };
  //       reader.onload = () => {
  //         media.dataUrl = reader.result as string;
  //       };
  //       reader.readAsDataURL(file);

  //       console.log(this.mediaFiles, media.dataUrl);

  //       if (!this.mediaFiles.find(med => med.dataUrl === media.dataUrl)) {
  //         if (!this.mediaFiles.length) {
  //           media.isDefault = true;
  //         }
  //         media['s3Url'] = await this._upload.uploadFile(file);
  //         this.mediaFiles.push(media);
  //         const mediasForFrom = this.mediaControl.value;
  //         mediasForFrom.push(media['s3Url']);
  //         this.mediaControl.setValue(mediasForFrom);


  //       } else {
  //         this.$popup.error('Chosen file is already added');
  //       }
  //       // };
  //       // reader.readAsDataURL(file);
  //     }
  //   }
  //   input.value = '';
  // }

  imageSelectedFromInput(event) {
    this.imageChangedEvent = event;
    console.log(this.imageChangedEvent);

  }

  imageSelected(event) {
    console.log(event);
    this.profilePicURL = event.base64;
    console.log(this.imageChangedEvent.target.files[0]);
    this.uploadMedia.emit(event.file);

  }

  closeCropper() {
    this.img.nativeElement.value = null;
    this.imageChangedEvent = null;
  }



}
