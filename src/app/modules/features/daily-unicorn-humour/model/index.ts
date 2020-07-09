import * as Table from 'src/app/modules/commonTable/table/interfaces';
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
        title: 'Post',
        id: 'post',
        sorting: false,
        templateBy: 'post'
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
      title: 'Created At',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },
    // {
    //   title: 'Status',
    //   id: 'status',
    //   sorting: false,
    //   templateBy: 'status'
    // },

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
