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
      sorting: false,
      templateBy: 'topic'
      // resolve: (row: any) => row['topic'],

  },
 

       {
        title: 'Category',
        id: 'categoryData',
        sorting: false,
        templateBy: 'categoryData'
        // resolve: (row: any) => row['categoryData'],

    },
    {
      title: 'Privacy',
      id: 'privacy',
      sorting: false,
      // templateBy: 'privacy'
      resolve: (row: any) => row['privacy'],
    },


    {
        title: 'Price',
        id: 'price',
        sorting: false,
        resolve: (row: any) => row['price'],
      },
    // {
    //     title: 'Total Post',
    //     id: 'totalPost',
    //     sorting: false,
    //     resolve: (row: any) => row['totalPost'] || '0',
    //   },
    {
      title: 'Date of Article',
      id: 'createdAt',
      sorting: false,
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
