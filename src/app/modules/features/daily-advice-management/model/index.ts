import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { DailyAdviceFilterComponent } from '../pages/daily-advice-listing/component/daily-advice-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class DailyAdviceTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    {
        title: 'Title',
        id: 'title',
        sorting: true,
        templateBy: 'title'
        // resolve: (row: any) => row['title'] || '-',
    },
    // {
    //     title: 'Description',
    //     id: 'description',
    //     sorting: false,
    //     templateBy: 'description'
    // },
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
        templateBy: 'commentCount',

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
    search: 'Search by Title',
    index: true,
    addComponent: true,
    sorting: true,
    filterComponent: DailyAdviceFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
