import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { DailyInspirationFilterComponent } from '../component/daily-inspiration-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class DailyTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    {
      title: 'Media',
      id: 'mediaUrl',
      sorting: false,
      templateBy: 'mediaUrl'
      // resolve: (row: any) => row['title'] || '-',
    },
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
    //     // resolve: (row: any) => row['title'] || '-',
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
      templateBy: 'commentCount'
      // resolve: (row: any) => row['totalComments'] || '0',
  },
    {
      title: 'Added On',
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
    filterComponent: DailyInspirationFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
