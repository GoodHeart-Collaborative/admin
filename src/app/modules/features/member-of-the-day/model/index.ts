import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../pages/member-of-the-day-listing/component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
  pageIndex: 0,
  pageSize: 10,
  total: 0,
  rows: null
};

export class MemberTableDataSource implements Table.Source<Category> {
  label = 'Member Of The  Day';
  columns: Table.Column<Category>[] = [
    {
      title: 'Profile Pic',
      id: 'profilePicUrl',
      sorting: true,
      templateBy: 'profilePicUrl'
      // resolve: (row: any) => row['title'] || '-',
    },
    {
      title: 'Name',
      id: 'name',
      sorting: true,
      templateBy: 'name'
      // resolve: (row: any) => row['title'] || '-',
    },
    {
      title: 'Email Address',
      id: 'email',
      sorting: false,
      resolve: (row: any) => row['email'] || '-',

    },
    {
      title: 'Mobile Number',
      id: 'mobileNo',
      sorting: false,
      templateBy: 'mobileNo'
      // resolve: (row: any) => row['mobileNo'] || '-',
    },
    {
      title: 'Total Likes',
      id: 'likeCount',
      sorting: false,
      templateBy: "likeCount"
      // resolve: (row: any) => row['likeCount'] || '0',
    },
    {
      title: 'Total Comments',
      id: 'totalComments',
      sorting: false,
      resolve: (row: any) => row['totalComments'] || '0',
    },
    {
      title: 'Added On',
      id: 'memberCreatedAt',
      sorting: true,
      templateBy: 'memberCreatedAt',
    },
    {
      title: 'Status',
      id: 'status',
      sorting: false,
      templateBy: 'status'
    },
  ];
  options: Table.Options = {
    selection: false,
    search: 'Search by Name, Email Address',
    index: true,
    filterComponent: ListingFilterComponent,
    sorting: true,
    // addComponent: true
  };
  constructor(public data: Table.Data<Category> = defaultData) { }
}
