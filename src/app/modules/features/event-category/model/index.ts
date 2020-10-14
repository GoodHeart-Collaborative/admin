import * as Table from 'src/app/modules/commonTable/table/interfaces';
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
      title: 'Image',
      id: 'image',
      sorting: false,
      templateBy: 'imageUrl'
    },
    {
      title: 'Category Name',
      id: 'title',
      sorting: true,
      templateBy: 'title'
    },
    // {
    //   title: 'Mobile Number',
    //   id: 'phoneNo',
    //   sorting: false,
    //   templateBy: 'mobileNo'
    // },
    {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },
    {
        title: 'Total Expert Post',
        id: 'post',
        sorting: false,
        resolve: (row: any) => row['totalPost'] || '0',
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
    search: 'Search by Category name',
    index: true,
    addComponent: true,
    // filterComponent: ListingFilterComponent,
    sorting: true,
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}

