import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { UsersListingFilterComponent } from '../pages/user-listing/components/users-listing-filter.component';
type User = any;

const defaultData: Table.Data<User> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class UserTableDataSource implements Table.Source<User> {
  label = 'Users Management';
  columns: Table.Column<User>[] = [
    {
      title: 'Image',
      id: 'profilePicUrl',
      sorting: true,
      templateBy: 'profilePicUrl'
      // resolve: (row: any) => `${row['firstName']} ${row['lastName']}` || 'NA',
    },
    {
      title: 'Name',
      id: 'name',
      sorting: true,
      templateBy: 'name'
      // resolve: (row: any) => `${row['firstName']} ${row['lastName']}` || 'NA',
    },
    {
      title: 'Email Id',
      id: 'email',
      sorting: false,
      resolve: (row: any) => row['email'] || '-',
    },
    {
      title: 'Mobile Number',
      id: 'phoneNo',
      sorting: false,
      templateBy: 'mobileNo'
      // resolve: (row: any) =>  `${row.mobileNo} ` || '-',
    },
    {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },
    // {
    //   title: 'Member Type',
    //   id: 'isAdminVerified',
    //   sorting: false,
    //   templateBy: 'isAdminVerified'
    //   // resolve: (row: any) => row['status'] || 'NA',
    // },
    {
      title: 'Status',
      id: 'status',
      sorting: false,
      templateBy: 'status'
      // resolve: (row: any) => row['status'] || 'NA',
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
    search: 'Search by Name, Email Id',
    index: true,
    sorting: true,
    filterComponent: UsersListingFilterComponent,
   
  };
  constructor(public data: Table.Data<User> = defaultData) {}
}
