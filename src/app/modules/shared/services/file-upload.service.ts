import { Injectable, Inject } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../../../environments/environment';
import { LoaderService } from './loader.service';
import { UtilityService } from './utility.service';
import { SOMETHING_WENT_WRONG } from '../../../constant/messages';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    bucket: S3;
    scaleFactor = 0.25;
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private $loaderService: LoaderService,
        private $utilityService: UtilityService
    ) {
        this.bucket = new S3(
            {
                accessKeyId: environment.config.AWS_ACCESS_KEY,
                secretAccessKey: environment.config.AWS_SECRET_KEY,
                region: environment.config.REGION,
            }
        );
    }
    async uploadFile(fileToUpload: File, loader = true) {
        try {
            const params = {
                Bucket: environment.config.BUCKET_NAME,
                Key: fileToUpload.name || new Date().getTime() + '.png',
                Body: fileToUpload,
                ACL: 'public-read'
            };
            if (loader) {
                this.$loaderService.loader.next(true);
            }
            return new Promise((resolve, reject) => {
                this.bucket.upload(params, (err, data) => {
                    if (err) {
                        if (loader) {
                            this.$loaderService.loader.next(false);
                        }
                        this.$utilityService.error(SOMETHING_WENT_WRONG);
                        reject(err);
                    } else {
                        if (loader) {
                            this.$loaderService.loader.next(false);
                        }
                        resolve(data);
                    }
                }).on('httpUploadProgress', (progress) => {
                });

            });
        } catch (err) {
            this.$loaderService.loader.next(false);
        }
    }

    showAlert(message) {
        this.$utilityService.error(message);
    }

    async capture(video, blob) {
        // let w = video.videoWidth * this.scaleFactor;
        // let h = video.videoHeight * this.scaleFactor;
        // let canvas = this.document.createElement('canvas');
        // canvas.width = w;
        // canvas.height = h;
        // let ctx = canvas.getContext('2d');
        // ctx.drawImage(video, 0, 0, w, h);
        // let dataURI = canvas.toDataURL('image/jpeg');
        const abc = await this.generateThumbnail(blob);
        // let a =
        let boj = {
            // canvas: canvas,
            file: this.dataURLtoFile(abc, `${'Thumb'}${+new Date()}.jpg`),
            base64: abc
        }
        return boj;
    }

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    async generateThumbnail(videoFile: Blob): Promise<string> {
        const video: HTMLVideoElement = this.document.createElement('video');
        const canvas: HTMLCanvasElement = this.document.createElement('canvas');
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        return new Promise<string>((resolve, reject) => {
            canvas.addEventListener('error', reject);
            video.addEventListener('error', reject);
            video.addEventListener('canplay', event => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                resolve(canvas.toDataURL());
            });
            if (videoFile.type) {
                video.setAttribute('type', videoFile.type);
            }
            video.preload = 'auto';
            video.src = window.URL.createObjectURL(videoFile);
            video.load();
        });
    }


}
