import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../component/listing-filter.component';

type User = any;

const defaultData: Table.Data<User> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class ShoutoutsTableDataSource implements Table.Source<User> {
  label = 'Users Management';
  columns: Table.Column<User>[] = [
    {
      title: 'Name',
      id: 'name',
      sorting: true,
      templateBy: 'name'
    },

    {
      title: 'Email',
      id: 'email',
      sorting: true,
      resolve: (row: any) => row.userData['email'] || ''
    },
    {
      title: 'Title',
      id: 'title',
      sorting: false,
      templateBy: 'title'
    //   resolve: (row: any) => `${row['firstName']} ${row['lastName']}` || 'NA',
    },
    {
      title: 'Description',
      id: 'description',
      sorting: false,
      templateBy: 'description'
      // resolve: (row: any) => row['description'] || '-',
    },
    {
      title: 'Privacy',
      id: 'privacy',
      sorting: false,
      templateBy: 'privacy'
    },
    {
      title: 'Gif',
      id: 'gif',
      sorting: false,
      templateBy: 'gif'
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
      // templateBy: 'status'
      resolve: (row: any) =>  row['isExpired'] ? 'Expired' : 'Active',
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
    search: 'Search by Name, Description',
    index: true,
    sorting: true,
    filterComponent: ListingFilterComponent,
  };
  constructor(public data: Table.Data<User> = defaultData) {}
}
