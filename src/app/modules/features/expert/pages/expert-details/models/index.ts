import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../pages/expert-details-listing/component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class ExpertDetailsTableDataSource implements Table.Source<Category> {
  label = ' Expert Details';
  columns: Table.Column<Category>[] = [
    {
      title: 'Topic',
      id: 'topic',
      sorting: true,
      templateBy: 'topic'
    },
    {
      title: 'Description',
      id: 'description',
      sorting: false,
      templateBy: 'description'
     },
     {
        title: 'Category',
        id: 'categoryData',
        sorting: false,
        templateBy: 'categoryData'

    },
    {
      title: 'Privacy',
      id: 'privacy',
      sorting: false,
      templateBy: 'privacy'
      // resolve: (row: any) => row['privacy'],
    },
    // {
    //     title: 'Price',
    //     id: 'price',
    //     sorting: false,
    //     resolve: (row: any) => row['price'],
    //   },

     {
        title: 'Total Likes',
        id: 'likeCount',
        sorting: false,
        templateBy: 'likeCount'
      },
    {
        title: 'Total Comments',
        id: 'commentCount',
        sorting: false,
        templateBy: 'commentCount'
      },

      {
        title: 'Total Report',
        id: 'reportCount',
        sorting: false,
        templateBy: 'reportCount',
      },
    {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt'
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
    search: 'Search by Topic',
    index: true,
    filterComponent: ListingFilterComponent,
    sorting: true,
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
