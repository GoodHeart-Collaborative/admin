import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() placeholder;
  @Output() setSearch = new EventEmitter();
  search = '';
  constructor() {}

  ngOnInit() {}
  searchResult(event) {
    // if (this.search.trim()) {
      this.setSearch.emit(event);
    // }
    // this.setSearch.emit(this.search.trim());
  }
  resetSearch() {
    this.search = '';
    this.setSearch.emit('');
  }
}
