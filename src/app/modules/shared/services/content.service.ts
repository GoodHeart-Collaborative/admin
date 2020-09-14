import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { FAQS_DELETE, FAQS } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private $http: HttpService) { }

  async  onContentDetailsHandler(params) {
    const data = await this.$http.get('content/view', params).toPromise();
    return data;
  }

  async onAddContentHnadler(data) {
    return await this.$http.post('content', data).toPromise();
  }
  async  queryData(params) {
    const data = await this.$http.get(FAQS, params).toPromise();
    return data;
  }
  async onAddFaqHnadler(data) {
    return await this.$http.post(FAQS, data).toPromise();
  }
  async onDeleteFaqHnadler(data) {
    return await this.$http.delete(FAQS_DELETE).toPromise();
  }

  async onEditContentHnadler(id, data) {
    return await this.$http.put(`content/${id}`, data).toPromise();
  }

  onGetContentDetails(type) {
    return fetch(`http://womencomdevapi.appskeeper.com/v1/content/view?type=${type}`)
      .then(response => {
        console.log(response.clone().text());
        return response.clone().text();
      });
  }
}
