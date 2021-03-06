import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'customImage'
})
export class CustomImagePipe implements PipeTransform {

  defaultImages = {
    USER: '/assets/default-image/user.jpg',
    IMAGE_PLACEHOLDER: '/assets/default-image/image_placeholder.jpg',
    GRATITUDE_IMAGE : '/assets/images/gratitute placeholder_pink@3x.png'
  }
  constructor() {

  }
  transform(src: string, type?: string) {
    const img = new Image();
    img.src = src;
    return new Observable((observer) => {
      observer.next(type && this.defaultImages[type] ? this.defaultImages[type] : 'assets/default-image/default.png');
      if (src) {
        img.onload = () => {
          observer.next(img.src);
        };
      }
    });
  }

}
