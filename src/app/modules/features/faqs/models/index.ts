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
        title: 'Question',
        id: 'question',
        templateBy: 'question'
    },
    {
        title: 'Answer',
        id: 'answer',
        templateBy: 'answer'
    },
    {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },
    {
        title: 'Action',
        id: 'actions',
        templateBy: 'actions'
    },

  ];
  options: Table.Options = {
    selection: false,
    search: 'Search by Question, Answer',
    index: true,
    sorting: true,
    addComponent: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
