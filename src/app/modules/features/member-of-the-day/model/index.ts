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
        title: 'Name',
        id: 'name',
        sorting: true,
        templateBy: 'name'
        // resolve: (row: any) => row['title'] || '-',
    },
    {
        title: 'Email',
        id: 'email',
        sorting: false,
        resolve: (row: any) => row['email'] || '-',

    },
    {
        title: 'MobileNo',
        id: 'mobileNo',
        sorting: false,
        resolve: (row: any) => row['mobileNo'] || '-',
      },
    {
        title: 'Total Comments',
        id: 'totalComments',
        sorting: false,
        resolve: (row: any) => row['totalComments'] || '0',
      },
    {
        title: 'Total Like',
        id: 'likeCount',
        sorting: false,
        resolve: (row: any) => row['likeCount'] || '0',
      },
    {
      title: 'Created At',
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
    search: 'Search by Name',
    index: true,
    // addComponent: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
