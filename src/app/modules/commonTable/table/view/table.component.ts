import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChildren,
  QueryList,
  EventEmitter,
  ContentChildren,
  ViewChild,
  ElementRef,
  TemplateRef
} from '@angular/core';
import { MatTableDataSource, MatCheckboxChange, MatCheckbox, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ForDirective } from '../../for';
import * as Table from '../interfaces';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  exportAs: 'DataTable'
})
export class TableComponent implements OnInit {
  filterCount: any;
  @Input() noPaginator = false;
  @Input()
  set disabled(state: boolean) {
    this.$disabled = coerceBooleanProperty(state);
    if (!this.$disabled && this.searchRef) {
      setTimeout(() => {
        this.searchRef.nativeElement.focus();
      });
    }
  }
  get disabled(): boolean {
    return this.$disabled;
  }
  @Input()
  set tableSource(source: Table.Source<any>) {
    if (source) {
      this.$tableSource = source;
      this.dataSource = new MatTableDataSource(source.data.rows || []);
      if (this.paginator) {
        this.paginator.pageIndex = source.data.pageIndex;
        this.paginator.pageSize = source.data.pageSize;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }

  get tableSource() {
    return this.$tableSource;
  }
  get displayedColumns(): string[] {
    if (this.tableSource) {
      const columns = this.tableSource.columns.map(column => column.id).filter(column => {
        if (this.accessLevel !== 2 && column === 'actions') {
          return false;
        }
        return true;
      });


      const indexedColumns = this.tableSource.options && this.tableSource.options.index ? ['index', ...columns] : columns;

      return this.tableSource.options && this.tableSource.options.selection ? indexedColumns : indexedColumns;
    }
    return [];
  }
  get headerTemplate(): TemplateRef<any> {
    if (this.templates) {
      const header = this.templates.find((template: ForDirective) => template.name === 'header');
      if (header) {
        return header.ref;
      }
    }
    return null;
  }
  get checkBoxes(): MatCheckbox[] {
    return this.checkBoxList ? this.checkBoxList.toArray() : [];
  }
  get rowCheckBoxes(): MatCheckbox[] {
    return this.checkBoxes.filter((_, index: number) => index > 0);
  }
  get selection() {
    return this.rowCheckBoxes.reduce((total, checkBox, index) => {
      if (checkBox.checked) {
        return total.concat({ ...this.tableSource.data[index] });
      }
      return total;
    }, []);
  }
  get total(): number {
    if (this.tableSource && this.tableSource.data) {
      return this.tableSource.data.total || 0;
    }
    return 0;
  }
  get pageSize(): number {
    return this.$tableSource.data.pageSize;
  }
  get prevCount(): number {
    const { pageIndex, pageSize } = this.$tableSource.data;
    return pageIndex * pageSize;
  }
  get isEmpty(): boolean {
    if (this.tableSource && this.tableSource.data && this.tableSource.data.rows) {
      return !this.tableSource.data.rows.length;
    }
    return true;
  }
  get isLoaded(): boolean {
    return !!this.tableSource.data.rows;
  }
  get isInactive(): boolean {
    return this.total === 0 || !this.isLoaded || this.disabled;
  }
  get isSearchApplied(): boolean {
    return this.optionEvent.data.searchText && this.optionEvent.data.searchText.length > 0;
  }
  get isFilterApplied(): boolean {
    const filterData = this.optionEvent.data.filterData;
    return (function recursiveCheck(value: any): boolean {
      if (value) {
        if (typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date)) {
          return Object.keys(value).some(key => {
            return recursiveCheck(value[key]);
          });
        }
        return true;
      }
      return false;
    })(filterData);
  }
  get searchHint(): string {
    let hint: string;
    switch (this.$searchHintType) {
      case 'SEARCHED': {
        hint = 'Search is already done.';
        break;
      }
      case 'INVALID': {
        hint = 'At least 3 charactor required to search.';
        break;
      }
      case 'DEFAULT':
      default: {
        hint = 'Please tap enter to search.';
        break;
      }
    }
    return hint;
  }
  get label(): string {
    return this.$tableSource ? this.$tableSource.label : 'Data List';
  }
  get placeholder() {
    const search = this.tableSource && this.tableSource.options && this.tableSource.options.search;
    if (search && typeof search === 'string') {
      return search;
    }
    return 'Search';
  }
  get hasSorting(): boolean {
    return this.tableSource && this.tableSource.options && this.tableSource.options.sorting;
  }
  get hasSearch(): boolean {
    return this.tableSource && this.tableSource.options && !!this.tableSource.options.search;
  }
  get hasFilter(): boolean {
    return this.tableSource && this.tableSource.options && !!this.tableSource.options.filterComponent;
  }
  get hasAdd(): boolean {
    return this.tableSource && this.tableSource.options && !!this.tableSource.options.addComponent;
  }
  get hasPagination(): boolean {
    return this.tableSource && this.tableSource.options && this.tableSource.options.pagination;
  }
  constructor(
    private $dialog: MatDialog,
    private $utility: UtilityService) {

  }
  private $disabled = false;
  accessLevel = 2;

  @Input() moduleName: string;
  private $tableSource: Table.Source<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  @Output() selectChange: EventEmitter<any> = new EventEmitter();
  @Output() optionChange: EventEmitter<any> = new EventEmitter();
  @Output() onAddCahnges: EventEmitter<any> = new EventEmitter();

  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChildren(MatCheckbox) checkBoxList: QueryList<MatCheckbox>;
  @ViewChild('searchInput', { static: true }) searchRef: ElementRef<HTMLInputElement>;
  // search handler
  private $searchHintType: Table.SearchHintType = 'DEFAULT';
  isSearchError = false;
  optionEvent: Table.OptionEvent = {
    type: null,
    data: {
      pageIndex: 0,
      pageSize: 10,
      searchText: null,
      filterData: null,
      sortData: null
    }
  };

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(): void {

  }

  ngOnInit() {
  }

  templateOutlet(column: Table.Column<any>) {
    if (this.templates) {
      const template = this.templates.find(query => query.name === column.templateBy);
      return template ? template.ref : null;
    }
    return null;
  }
  onHeadSelectionChangeHandler(event: MatCheckboxChange) {
    this.rowCheckBoxes.forEach((checkBox: MatCheckbox) => {
      if ((event.checked && !checkBox.checked) || (!event.checked && checkBox.checked)) {
        checkBox.toggle();
      }
    });
    this._emitSelectEvent();
  }
  onSelectionChangeHandler(event: MatCheckboxChange) {
    const someUnChecked = this.rowCheckBoxes.some(checkBox => !checkBox.checked);
    const everyChecked = this.rowCheckBoxes.every(checkBox => checkBox.checked);
    if ((someUnChecked && this.checkBoxList.first.checked) || (everyChecked && !this.checkBoxList.first.checked)) {
      this.checkBoxList.first.toggle();
    }
    this._emitSelectEvent();
  }
  private _emitSelectEvent() {
    this.selectChange.emit(this.rowCheckBoxes.reduce((total, checkBox, index) => {
      if (checkBox.checked) {
        return total.concat({ ...this.dataSource.data[index] });
      }
      return total;
    }, []));
  }


  // filter option
  onFilterHandler() {
    if (this.tableSource && this.tableSource.options && this.tableSource.options.filterComponent) {
      const subscription = this.$dialog.open(this.tableSource.options.filterComponent, {
        disableClose: true,
        panelClass: 'filter-modal',
        width: '350px',
        autoFocus: false,
        data: this.optionEvent.data.filterData
      }).afterClosed().subscribe((filterData) => {
        if (filterData !== undefined) {
          this.optionEvent = {
            type: 'FILTER',
            data: {
              ...this.optionEvent.data,
              filterData
            }
          };
          this.filterCount = this.$utility.countFilter(filterData);
          this._emitOptionEvent();
        }
        subscription.unsubscribe();
      });
    }
  }

  // checkAccessLevel() {
  //   this.$profile.changes.subscribe(result => {
  //     if (result) {
  //       this.accessLevel = result.permission.find(permission => permission.moduleName === this.moduleName).accessLevel;
  //     }
  //   });
  // }

  // search handler
  onFormFieldClickHandler(event: MouseEvent) {
    event.stopPropagation();
  }
  onSearchHandler(value) {
    // this.isSearchError = false;
    // this.$searchHintType = 'DEFAULT';
    // const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    // const key = event.code || event.key;
    // if (key === 'Enter') {
    //   const value = target.value.trim();
    if (value.length >= 1|| (value.length === 0 && this.optionEvent.data.searchText)) {
      if (value !== this.optionEvent.data.searchText) {
        this.optionEvent = {
          type: 'SEARCH',
          data: {
            ...this.optionEvent.data,
            searchText: value || null
          }
        };
        this._emitOptionEvent();
      } else {
        this.$searchHintType = 'SEARCHED';
      }
    } else {
      this.$searchHintType = 'INVALID';
      this.isSearchError = true;
    }
    // } else if (key === 'Space' && !target.selectionStart) {
    //   event.preventDefault();


    // }
  }
  onPasteHandler({ target }: KeyboardEvent) {
    const input = target as HTMLInputElement;
    input.value = input.value.trim();
  }

  onSortHandler(event) {
    let obj = {};
    console.log(event);

    if (event.active) {
      obj['sortBy'] = event.active;
    }
    if (event.direction) {
      if (event.direction == 'asc') {
        obj['sortOrder'] = 1;
      }
      if (event.direction == 'desc') {
        obj['sortOrder'] = -1;
      }
    }
    this.optionEvent = {
      type: 'SORT',
      data: {
        ...this.optionEvent.data,
        sortData: obj || null,
        // pageIndex: this.pageIndex
      }
    };
    this._emitOptionEvent();
  }
  // pagination handle
  onPageHandler(event) {
    this.optionEvent = {
      type: 'PAGINATION',
      data: {
        ...this.optionEvent.data,
        pageIndex: event.pageIndex,
        pageSize: event.pageSize
      }
    };
    this._emitOptionEvent();
  }

  private _emitOptionEvent() {
    console.log(this.optionEvent);
    
    this.optionChange.emit(this.optionEvent);
  }

  onAddHandler() {
    this.onAddCahnges.emit();
  }
}
