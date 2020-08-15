import * as Table from 'src/app/modules/commonTable/table/interfaces';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class NotificationTableDataSource implements Table.Source<Category> {
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
    //     // resolve: (row: any) => row['title'] || '-',
    // },
    {
        title: 'Total Post',
        id: 'totalPost',
        sorting: false,
        // templateBy: 'totalPost'
        resolve: (row: any) => row['totalPost'] || '0',
    },
  //   {
  //     title: 'Total Comments',
  //     id: 'commentCount',
  //     sorting: false,
  //     templateBy: 'commentCount'
  // },
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
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
