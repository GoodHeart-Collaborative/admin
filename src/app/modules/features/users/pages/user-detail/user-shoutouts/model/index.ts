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
      title: 'Title',
      id: 'title',
      sorting: true,
      templateBy: 'title'
    //   resolve: (row: any) => `${row['firstName']} ${row['lastName']}` || 'NA',
    },
    {
      title: 'Description',
      id: 'description',
      sorting: false,
      // templateBy: 'description'
      resolve: (row: any) => row['description'] || '-',
    },
    {
      title: 'Privacy',
      id: 'privacy',
      sorting: false,
      templateBy: 'privacy'
      // resolve: (row: any) => row['privacy'] || '-',
    },
    {
      title: 'GIF URL',
      id: 'gif',
      sorting: false,
      templateBy: 'gif'
      // resolve: (row: any) => row['privacy'] || '-',
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
      // resolve: (row: any) =>  row['isExpired'] ? 'Expired' : 'Active',
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
    search: 'Search by Title',
    index: true,
    sorting: true,
    filterComponent: ListingFilterComponent,
  };
  constructor(public data: Table.Data<User> = defaultData) {}
}
