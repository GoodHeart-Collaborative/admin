import * as Table from 'src/app/modules/commonTable/table/interfaces';
type User = any;

const defaultData: Table.Data<User> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class EventTableDataSource implements Table.Source<User> {
  label = 'Users Management';
  columns: Table.Column<User>[] = [
    {
      title: 'Image',
      id: 'image',
      sorting: false,
      templateBy: 'imageUrl'
    },

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
        templateBy: 'description'
        // resolve: (row: any) => row['description'],
      },
    {
        title: 'Post Anonymous',
        id: 'postAnonymous',
        sorting: false,
        templateBy: 'postAnonymous'
        // resolve: (row: any) => row['postAnonymous'],
      },
      {
        title: 'Posted By',
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
        templateBy: 'commentCount',

        // resolve: (row: any) => row['totalComments'] || '0',
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
    search: 'Search by Description',
    index: true,
    sorting: true,
    // filterComponent: UsersListingFilterComponent,
  };
  constructor(public data: Table.Data<User> = defaultData) {}
}
