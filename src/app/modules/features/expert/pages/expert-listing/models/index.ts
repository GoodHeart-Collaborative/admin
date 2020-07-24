import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class ExpertTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    {
        title: 'Name',
        id: 'name',
        sorting: true,
        templateBy: 'name'
    },

    {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },

    {
        title: 'Category',
        id: 'categoryData',
        sorting: false,
        templateBy: 'categoryData'
    },
    {
        title: 'Email Address',
        id: 'email',
        sorting: false,
        resolve: (row: any) => row['email'],
      },
    {
        title: 'Total Post',
        id: 'totalPost',
        sorting: false,
        resolve: (row: any) => row['totalPost'] || '0',
      },

    // {
    //   title: 'Status',
    //   id: 'status',
    //   sorting: false,
    //   templateBy: 'status'
    // },

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
