import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../pages/notification-listing/component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class NotificationTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    // {
    //   title: 'Image',
    //   id: 'profilePicUrl',
    //   sorting: false,
    //   templateBy: 'profilePicUrl'
    // },
    {
        title: 'Title',
        id: 'title',
        sorting: true,
        templateBy: 'fullName'
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
        title: 'Sent Count',
        id: 'sentCount',
        sorting: true,
        // templateBy: 'sentCount'
        resolve: (row: any) => row['sentCount'] || '0',
    },
  //   {
  //     title: 'Total Comments',
  //     id: 'commentCount',
  //     sorting: false,
  //     templateBy: 'commentCount'
  // },
    {
      title: 'Added On',
      id: 'created',
      sorting: true,
      templateBy: 'created',
    },
    {
      title: 'Message',
      id: 'message',
      sorting: false,
      templateBy: 'message'
      // resolve: (row: any ) => row['message'] || '-'
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
    search: 'Search by Title',
    index: true,
    addComponent: true,
    sorting: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
