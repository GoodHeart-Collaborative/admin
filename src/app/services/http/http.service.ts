import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
  observe?: 'body';
  hasBaseUrl?: boolean;
  skipLoader?: boolean;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private $http: HttpClient,
    // private $loader: Loader
  ) { }

  async get<T = any>(url: string, options?: Options): Promise<Api.Response<T>> {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.get<Api.Response<T>>(url, options).toPromise();
   
    return resp;
  }

  async post<T = any>(url: string, body: object, options?: Options): Promise<Api.Response<T>>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.post<Api.Response<T>>(url, body, options).toPromise();
    return resp;
  }

  async put<T = any>(url: string, body: object,  options?: Options): Promise<Api.Response<T>>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.put<Api.Response<T>>(url, body, options).toPromise();
    return resp;
  }

  async patch<T = any>(url: string, body: object,  options?: Options): Promise<Api.Response<T>>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.patch<Api.Response<T>>(url, body, options).toPromise();
    return resp;
  }

  async delete<T = any>(url: string, options: Options): Promise<Api.Response<T>>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.get<Api.Response<T>>(url, options).toPromise();
    return resp;
  }

 
}
