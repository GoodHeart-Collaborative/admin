import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../pages/category-management-listing/component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class CategoryTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    {
      title: 'Name',
      id: 'title',
      sorting: true,
      templateBy: 'title'
      // resolve: (row: any) => `${row['firstName']} ${row['lastName']}` || 'NA',
    },
  
    // {
    //   title: 'Mobile Number',
    //   id: 'phoneNo',
    //   sorting: false,
    //   templateBy: 'mobileNo'
    // },
    {
      title: 'Created At',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },
    {
        title: 'Post',
        id: 'post',
        sorting: false,
        resolve: (row: any) => row['post'] || '0',
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
    search: 'Search by Name',
    index: true,
    addComponent: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}

