import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() placeholder;
  @Output() setSearch = new EventEmitter();
  search = '';
  searchValue = new FormControl ('');

  constructor() {}

  ngOnInit() {
    this.makeSearch();
  }
  searchResult(event) {
    // if (this.search.trim()) {
      // this.setSearch.emit(event);
    // }
    // this.setSearch.emit(this.search.trim());
  }
  resetSearch() {
    this.search = '';
    this.setSearch.emit('');
  }

  makeSearch() {
    this.searchValue.valueChanges.pipe(debounceTime(800), distinctUntilChanged()).subscribe(res => {

      this.searchEmit(res);
    });

  }
  clearSearch() {
    this.searchValue.setValue('')
    this.setSearch.emit('');
  }


  searchEmit(text) {
    if (text) {
      text = text.trim();
      if (text) {
        this.setSearch.emit(text.toLowerCase());
      }
    } else if (text == '' || !text) {
      this.clearSearch();
    }
  }
}
