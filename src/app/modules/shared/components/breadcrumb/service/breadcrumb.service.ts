import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private $subject: Subject<{}> = new Subject();
  get events() {
    return this.$subject.asObservable();
  }
  constructor() { }
  replace(target: string, label: string, url?: string) {
    this.$subject.next({ target, label, url });
  }
}
