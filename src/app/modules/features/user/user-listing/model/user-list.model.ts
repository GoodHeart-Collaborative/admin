import { Config } from '../../../../commonTable/listing/listing.types';
import { UserListFilterComponent } from '../components/user-list-filter/user-list-filter.component';

export const USER_LIST_CONFIG: Config = {
  label: 'User List',
  options: {
    search: true,
    pagination: true,
    filter: UserListFilterComponent,
    searchPlaceholder: 'Search by Name, Email',
  },
  total: 0,
};

export class UserTableDataSource implements Table.Source<any> {
  columns: Table.Column<any>[] = [
    {
      title: 'S.No.',
      id: 'sn',
      resolve: (row: any) => row['sn'],
    },
    {
      title: 'Name',
      id: 'name',
      sorting: true,
      resolve: (row: any) => row['name'] || 'NA',
    },
    {
      title: 'Email ID',
      id: 'email',
      sorting: false,
      resolve: (row: any) => row['email'] || 'NA',
    },
    {
      title: 'Mobile Number',
      id: 'phoneNo',
      sorting: false,
      resolve: (row: any) => row ['phoneNo'],
    },
    {
      title: 'No Of Bookings',
      id: 'noOfBooking',
      sorting: false,
      resolve: (row: any) => 'NA',
    },
    {
      title: 'User Type',
      id: 'companyType',
      sorting: false,
      resolve: (row: any) => row['companyType'] || 'NA',
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
      resolve: (row: any) => row['status'] || 'NA',
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
  };
  constructor(public data: any[]) {}
}
