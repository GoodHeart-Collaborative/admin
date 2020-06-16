import { Injectable } from "@angular/core";
import * as S3 from "aws-sdk/clients/s3";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class FileUploadService {
  bucket: S3;
  constructor() {
    this.bucket = new S3({
      accessKeyId: environment.config.AWS_ACCESS_KEY,
      secretAccessKey: environment.config.AWS_SECRET_KEY,
      region: environment.config.AWS_REGION,
      params: {
        ContentType: "application/pdf"
      }
    });
  }

  getFilename(url) {
    if (url) {
      let m = url.toString().match(/.*\/(.+?)\./);
      if (m && m.length > 1) {
        return m[1];
      }
    }
    return "";
  }
  async uploadFile(fileToUpload: File) {
    try {
      const type = fileToUpload.type.split("/");
      const nameWithoutExtn = fileToUpload.name.replace(/\.[^/.]+$/, "");
      const fileName = `${nameWithoutExtn}${new Date().getTime()}.${
        type[type.length - 1]
      }`;

      const params = {
        Bucket: environment.config.AWS_BUCKET,
        Key: `indicator/${fileName}`,
        Body: fileToUpload,
        ACL: "public-read"
      };

      return new Promise((resolve, reject) => {
        this.bucket
          .upload(params, function(err, data) {
            if (err) {
              reject(err);

              // this._loaderService.loader.next(false);
              return false;
            } else {
              // this._loaderService.loader.next(false);
              resolve(data);
            }
          })
          .on("httpUploadProgress", progress => {});
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  async uploadMultipleFiles(files) {
    try {
      let data = [];
      for (let i = 0; i < files.length; i++) {
        // console.log(files[i]);

        data.push(this.uploadFile(files[i]));
      }
      let result = await Promise.all(data);

      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
