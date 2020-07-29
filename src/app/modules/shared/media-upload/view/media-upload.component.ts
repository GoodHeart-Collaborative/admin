import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileUploadService } from '../../services/file-upload.service';
import { PopupService } from '../../popup';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';
import { onSelectFile } from 'src/app/constant/file-input';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.scss']
})
export class MediaUploadComponent implements OnInit {
  imageFile: any;
  @ViewChild('file', { static: false }) img;
  @ViewChild('myVideo', { static: false }) video: ElementRef<HTMLVideoElement>;
  @Output() uploadMedia = new EventEmitter();
  @Input() profilePicURL;
  @Input() contentId;
  imageChangedEvent: any;
  isImage: boolean;
  file: File;
  isVideo: boolean;
  @Input() videoSrc: string | ArrayBuffer;
  private _canvas: HTMLCanvasElement;

  // mediaFiles: any[] = [];
  // @Input() mediaControl: FormControl;
  // @Input() maxlength: number;
  // currentMediaCounts = 0;
  // @Output() removeMedia = new EventEmitter();
  constructor(
    private $popup: PopupService,
    renderer: Renderer2,
    private $upload: FileUploadService) {
    this._canvas = renderer.createElement('canvas');

  }

  ngOnInit() {
  }

  async onSelectFile(event) {
    try {
      this.checkMediaType(event.target.files[0], event);
      // Image Upload
      if (this.isImage) {
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
    if (file.type.split('/')[0] == 'image' && this.checkContentType(1)) {
      this.isImage = true;
    } else if (file.type.split('/')[0].toLowerCase() == 'video' && this.checkContentType(2)) {
      // return 'video';
      this.isVideo = true;
      this.videoSelected(event);

    } else {
      return null;
    }
  }

  imageSelectedFromInput(event) {
    this.imageChangedEvent = event;
  }

  imageSelected(event) {
    this.profilePicURL = event.base64;
    this.uploadMedia.emit(
      {
        file: event.file,
        type: 1
      });
    this.videoSrc = '';
    this.isVideo = false;
  }

  videoSelected(event) {
    this.file = event.target.files[0];
    let size;
    let type;
    if (this.file) {
      size = Math.round(this.file.size / 1024);
      type = this.file.type;
    }
    if (type !== "video/mp4" && type !== "video/x-m4v" &&
      type !== "video/3gpp" && this.file) {
      this.$upload.showAlert('Please select any video mp4/x-m4v/3gp format file.')
    } else if (size > 1024 * 10) {
      this.$upload.showAlert('Image size must be less then 10 MB')
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.videoSrc = event.target['result'];
        this.profilePicURL = '';
      };
    }
    event.target.value = '';
  }

  onCanPlayHandler(video: HTMLVideoElement) {
    if (!this.file) {
      return;
    }
    try {
      this.createThumbnail(video, `${Date.now()}.png`).then((thumbnail: File) => {
        this.uploadMedia.emit({
          type: 2,
          videoFile: this.file,
          thumbNailFile: thumbnail
        });
        this.isImage = false;
      });
    } catch (err) {}
  }
/**
 * Create Thumbnail for Video
 * @param video
 * @param name
 */
  createThumbnail(video: HTMLVideoElement, name: string = 'thumbnail.png'): Promise<File> {
    try {
      return new Promise((resolve, reject) => {
        const context = this._canvas.getContext('2d');
        this._canvas.height = video.videoHeight;
        this._canvas.width = video.videoWidth;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        this._canvas.toBlob((blob) => {
          const file = new File([blob], name, { type: 'image/png' });
          resolve(file);
        });
      });
    } catch (err) {
    }
  }

  /**
   * Content Type Checking for Image , Video, Voic-Notes
   * @param mediaType
   */
  checkContentType(mediaType: number) {
    if (this.contentId) {
      switch (mediaType) {
        case 1:
          if ([2, 3].includes(this.contentId)) {
            return true;
          } else {
            this.img.nativeElement.value = null;
            this.$upload.showAlert('Invalid content type selected');
            return false;
          }
          break;
        case 2:
          if ([1].includes(this.contentId)) {
            return true;
          } else {
            this.img.nativeElement.value = null;
            this.$upload.showAlert('Invalid content type selected');
            return false;
          }
          break;
        case 3:
          if ([4].includes(this.contentId)) {
            return true;
          } else {
            this.img.nativeElement.value = null;

            this.$upload.showAlert('Invalid content type selected');
            return false;
          }
          break;

        default:
          break;
      }
    }
    return true;
  }

  /**
   * Remove Media
   */
  removeMedia() {
    this.isImage = false;
    this.isVideo = false;
    this.imageChangedEvent = null;
    this.img.nativeElement.value = null;
    this.profilePicURL = '';
    this.videoSrc = '';
    this.uploadMedia.emit(null);
  }

  closeCropper() {
    this.img.nativeElement.value = null;
    this.imageChangedEvent = null;
  }
}
