import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private $http: HttpService) {}

  async  onContentDetailsHandler(params) {
      const data = await this.$http.get('content/view', params).toPromise();
      return data;
    }
    async onAddContentHnadler(data) {
      return await this.$http.post('content', data).toPromise();
    }
    async onEditContentHnadler(data) {
      return await this.$http.put('content', data).toPromise();
    }

    onGetContentDetails(type) {
   
    return fetch(`http://womencomdevapi.appskeeper.com/v1/content/view?type=${type}`)

          .then(response => {
              if (response.ok) {
                  return response.clone().text(); //then consume it again, the error happens
               }
             });
  }
}
