import * as Table from 'src/app/modules/commonTable/table/interfaces';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class ExpertDetailsTableDataSource implements Table.Source<Category> {
  label = ' Expert Details';
  columns: Table.Column<Category>[] = [
    {
        title: 'Date of Article',
        id: 'createdAt',
        sorting: false,
        templateBy: 'createdAt'
    },

    {
      title: 'Category',
      id: 'privacy',
      sorting: false,
      // templateBy: 'privacy'
      resolve: (row: any) => row['privacy'],
    },

    {
        title: 'Description',
        id: 'contentDisplayName',
        sorting: false,
        // templateBy: 'contentDisplayName'
        resolve: (row: any) => row['contentDisplayName'],

    },
    {
        title: 'Price',
        id: 'price',
        sorting: false,
        resolve: (row: any) => row['price'],
      },
    // {
    //     title: 'Total Post',
    //     id: 'totalPost',
    //     sorting: false,
    //     resolve: (row: any) => row['totalPost'] || '0',
    //   },

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
    // addComponent: true,
    sorting: true,
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
