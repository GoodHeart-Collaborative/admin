import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('videoEle', { static: false }) video: ElementRef<HTMLVideoElement>;
  @Output() uploadMedia = new EventEmitter();
  @Input() profilePicURL;
  imageChangedEvent: any;
  isImage: boolean;
  isVideo: boolean;
  @Input() videoSrc: string | ArrayBuffer;
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
      this.checkMediaType(event.target.files[0], event);
      // Image Upload 
      if (this.isImage) {
        console.log(this.isImage);
        let result = await onSelectFile(event);
        this.imageFile = result.file;
        this.imageSelectedFromInput(event);
      }

      // Video Upload    
    } catch (err) {
      if (err.type) {
        this.$upload.showAlert(invalidImageError());
      } else if (err.size) {
        this.$upload.showAlert(invalidFileSize());
      }
    }

  }

  /**
   * Check media file
   * @param file
   */
  checkMediaType(file, event) {
    if (file.type.split('/')[0] == 'image') {
      this.isImage = true;
    } else if (file.type.split('/')[0].toLowerCase() == 'video') {
      // return 'video';
      this.isVideo = true;
      this.videoSelected(event);

    } else {
      return null;
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

    this.uploadMedia.emit(
      {
        file: event.file,
        type: 1
      });
  }

  closeCropper() {
    this.img.nativeElement.value = null;
    this.imageChangedEvent = null;
  }

  videoSelected(event) {
    let file: File = event.target.files[0];

    let size;
    let type;
    if (file) {
      size = Math.round(file.size / 1024);
      type = file.type;

    }
    if (type !== "video/mp4" && type !== "video/x-m4v" &&
      type !== "video/3gpp" && file) {

      this.$upload.showAlert('Please select any video mp4/x-m4v/3gp format file.')

    } else if (size > 1024 * 50) {
      this.$upload.showAlert('Image size must be less then 50 MB')
    } else {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.videoSrc = event.target['result'];
        console.log(this.video);


      };
      // let getvideoDom=document.getElementsByTagName('video');
      // console.log(getvideoDom);
      console.log(this.$upload.capture(this.video.nativeElement, event.target.files[0]));
      console.log();
      this.$upload.capture(this.video.nativeElement, event.target.files[0]).then(res => {
        console.log(res);
        this.videoSrc = '';
        this.profilePicURL = res.base64;
        console.log(file, this.profilePicURL);
        
        this.uploadMedia.emit({
          type: 2,
          videoFile: file,
          thumbNailFile: res.file
        });
     });



      // console.log(getvideoDom)
      // this.uploadMedia.emit({
      //   file: event.target.files[0],
      //   type: 2
      // });
    }
    event.target.value = '';
  }



}
