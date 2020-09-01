import * as Table from 'src/app/modules/commonTable/table/interfaces';

type User = any;

const defaultData: Table.Data<User> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class ReportTableDataSource implements Table.Source<User> {
  label = 'Users Management';
  columns: Table.Column<User>[] = [
  
    {
      title: 'Profile Pic',
      id: 'profilePicUrl',
      sorting: true,
      templateBy: 'profilePicUrl',
    },
    {
      title: 'Name',
      id: 'name',
      sorting: true,
      templateBy: 'name',
    },
    {
      title: 'Email',
      id: 'email',
      sorting: true,
      templateBy: 'email',
    },
    {
      title: 'Reason',
      id: 'reason',
      sorting: true,
      templateBy: 'reason',
    
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

    // {
    //   title: 'Actions',
    //   id: 'actions',
    //   sorting: false,
    //   templateBy: 'actions',
    // },
  ];
  options: Table.Options = {
    selection: false,
    search: 'Search by Description',
    index: true,
    sorting: true,
    // filterComponent: ListingFilterComponent,
  };
  constructor(public data: Table.Data<User> = defaultData) {}
}
