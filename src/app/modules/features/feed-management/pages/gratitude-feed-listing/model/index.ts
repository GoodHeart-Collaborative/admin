import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../component/listing-filter.component';
type User = any;

const defaultData: Table.Data<User> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class GratitudeFeedTableDataSource implements Table.Source<User> {
  label = 'Users Management';
  columns: Table.Column<User>[] = [
    {
      title: 'Image',
      id: 'image',
      sorting: false,
      templateBy: 'imageUrl'
    },
    {
      title: 'User Name',
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
      title: 'Description',
      id: 'description',
      sorting: false,
      templateBy: 'description'
      // resolve: (row: any) => row['description'] || '-',
    },
    {
      title: 'Total Likes',
      id: 'likeCount',
      sorting: false,
      templateBy: 'likeCount'
      // resolve: (row: any) => row['likeCount'] || '0',
    },
    
    {
      title: 'Total Comments',
      id: 'commentCount',
      sorting: false,
      templateBy: 'commentCount'
      // resolve: (row: any) => row['totalComments'] || '0',
    },

    {
      title: 'Privacy',
      id: 'privacy',
      sorting: false,
      templateBy: 'privacy'
      // resolve: (row: any) => row['privacy'] || '-',
    },

    {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },

    // {
    //   title: 'Status',
    //   id: 'status',
    //   sorting: false,
    //   templateBy: 'status'
    //   // resolve: (row: any) => row['status'] || 'NA',
    // },

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
