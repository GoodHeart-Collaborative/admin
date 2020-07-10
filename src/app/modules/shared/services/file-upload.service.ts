import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../../../environments/environment';
import { LoaderService } from './loader.service';
import { UtilityService } from './utility.service';
import { SOMETHING_WENT_WRONG } from '../../../constant/messages';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    bucket: S3;
    constructor(
        private _loaderService: LoaderService,
        private _utilityService: UtilityService
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
                this._loaderService.loader.next(true);
            }
            return new Promise((resolve, reject) => {
                this.bucket.upload(params, (err, data) => {
                    if (err) {
                        if (loader) {
                            this._loaderService.loader.next(false);
                        }
                        this._utilityService.showAlert(SOMETHING_WENT_WRONG);
                        reject(err);
                    } else {
                        if (loader) {
                            this._loaderService.loader.next(false);
                        }
                        resolve(data);
                    }
                }).on('httpUploadProgress', (progress) => {
                });

            });
        } catch (err) {
            this._loaderService.loader.next(false);
            console.error(err.message);
        }
    }

    showAlert(message) {
        this._utilityService.showAlert(message);
      }
}
