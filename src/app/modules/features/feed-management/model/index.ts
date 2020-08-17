import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../pages/feed-listing/component/listing-filter.component';
type feed = any;

const defaultData: Table.Data<feed> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class FeedTableDataSource implements Table.Source<feed> {
  label = 'Feed Management';
  columns: Table.Column<feed>[] = [
    {
        title: 'Name',
        id: 'topic',
        sorting: true,
        templateBy: 'topic'
    },

    {
        title: 'Description',
        id: 'description',
        sorting: false,
        resolve: (row: any) => row['description'],
      },
      {
        title: 'User Type',
        id: 'userType',
        sorting: false,
        templateBy: 'userType'
    },
    {
        title: 'Category Name',
        id: 'categoryName',
        sorting: false,
        templateBy: 'categoryName'
        // resolve: (row: any) => row['categoryName'],
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

    {
      title: 'Actions',
      id: 'actions',
      sorting: false,
      templateBy: 'actions',
    },
  ];
  options: Table.Options = {
    selection: false,
    search: 'Search by name',
    index: true,
    addComponent: true,
    sorting: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<feed> = defaultData) {}
}
