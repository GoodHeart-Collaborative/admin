import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { FAQS_DELETE, FAQS, FAQS_DETAILS } from 'src/app/constant/urls';

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
  async onFaqDetailsHandler(id) {
    const params = {
      contentId: id
    };
    return await this.$http.get(FAQS_DETAILS, params).toPromise();
  }

  async onEditFaqHnadler(id, params) {
    return await this.$http.put(FAQS_DELETE(id), params).toPromise();
  }
  async onDeleteFaqHnadler(id) {
    return await this.$http.delete(FAQS_DELETE(id)).toPromise();
  }

  async onEditContentHnadler(id, data) {
    return await this.$http.put(`content/${id}`, data).toPromise();
  }

  onGetContentDetails(type) {
    return fetch(`http://womencomstgapi.appskeeper.com/v1/content/view?type=${type}`)
      .then(response => {
        return response.clone().text();
      });
  }
}
