import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { DailyUnicornFilterComponent } from '../pages/daily-unicorm-humour-listing/component/daily-unicorn-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
  pageIndex: 0,
  pageSize: 10,
  total: 0,
  rows: null
};

export class DailyUnicornTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    {
      title: 'Description',
      id: 'description',
      sorting: true,
      templateBy: 'description'
      // resolve: (row: any) => row['title'] || '-',
    },
    {
      title: 'Total Likes',
      id: 'likeCount',
      sorting: false,
      templateBy: 'likeCount'
      // resolve: (row: any) => row['likeCount'] || '0',
    },
    {
      title: 'Total Comments',
      id: 'commentCount',
      sorting: false,
      templateBy: 'commentCount'
      // resolve: (row: any) => row['totalComments'] || '0',
    },
    {
      title: 'Created At',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },
    {
      title: 'Status',
      id: 'status',
      sorting: false,
      templateBy: 'status'
    },

    {
      title: 'Actions',
      id: 'actions',
      sorting: false,
      templateBy: 'actions',
    },
  ];
  options: Table.Options = {
    selection: false,
    search: 'Search by Description',
    index: true,
    addComponent: true,
    sorting: true,
    filterComponent: DailyUnicornFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) { }
}
