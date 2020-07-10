import * as Table from 'src/app/modules/commonTable/table/interfaces';
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
        title: 'Post',
        id: 'title',
        sorting: false,
        templateBy: 'title'
        // resolve: (row: any) => row['title'] || '-',
    },
    {
        title: 'Description',
        id: 'description',
        sorting: false,
        templateBy: 'description'
    },
    {
        title: 'Like Count',
        id: 'likeCount',
        sorting: false,
        resolve: (row: any) => row['likeCount'] || '0',
      },
    {
        title: 'Total Comments',
        id: 'totalComments',
        sorting: false,
        resolve: (row: any) => row['totalComments'] || '0',
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
    search: 'Search by Post',
    index: true,
    addComponent: true
    // filterComponent: UsersListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
