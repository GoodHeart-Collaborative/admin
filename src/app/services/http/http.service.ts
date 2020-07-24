import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from 'aws-sdk/clients/apigatewayv2';

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

  async get<T = any>(url: string, options?: Options): Promise<any> {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.get<any>(url, options).toPromise();
    return resp;
  }

  async post<T = any>(url: string, body: object, options?: Options): Promise<any>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.post<any>(url, body, options).toPromise();
    return resp;
  }

  async put<T = any>(url: string, body: object,  options?: Options): Promise<any>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.put<any>(url, body, options).toPromise();
    return resp;
  }

  async patch<T = any>(url: string, body: object,  options?: Options): Promise<any>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.patch<any>(url, body, options).toPromise();
    return resp;
  }

  async delete<T = any>(url: string, options: Options): Promise<any>  {
    if (!options || !options.skipLoader) { // Default Loader will start
      //
    }
    const resp = await this.$http.get<any>(url, options).toPromise();
    return resp;
  }

 
}
