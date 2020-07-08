import * as Table from 'src/app/modules/commonTable/table/interfaces';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class RelatedCategoryTableDataSource implements Table.Source<Category> {
  label = 'Related Category Management';
  columns: Table.Column<Category>[] = [
    {
      title: 'Name',
      id: 'name',
      sorting: true,
      templateBy: 'name'
      // resolve: (row: any) => `${row['firstName']} ${row['lastName']}` || 'NA',
    },
    {
        title: 'Title',
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
        // resolve: (row: any) => row['title'] || '-',
    },
    {
      title: 'Created At',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
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
    search: 'Search by Name',
    index: true,
    // filterComponent: UsersListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
