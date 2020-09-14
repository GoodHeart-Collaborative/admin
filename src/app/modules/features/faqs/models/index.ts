import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class FaqsTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    {
        title: 'Title',
        id: 'title',
        sorting: true,
        templateBy: 'title'
        // resolve: (row: any) => row['title'] || '-',
    },

  ];
  options: Table.Options = {
    selection: false,
    search: 'Search by Title, Description',
    index: true,
    sorting: true,
    addComponent: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
