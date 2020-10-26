import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class RelatedCategoryTableDataSource implements Table.Source<Category> {
  label = 'Related Category Management';
  columns: Table.Column<Category>[] = [
    {
      title: 'Expert Profile Pic ',
      id: 'pic',
      sorting: false,
      templateBy: 'pic'
    },
    {
      title: 'Expert Name ',
      id: 'name',
      sorting: false,
      templateBy: 'name'
    },
 
    {
      title: 'Post Image',
      id: 'profilePicUrl',
      sorting: false,
      templateBy: 'profilePicUrl'
    },
    {
        title: 'Title',
        id: 'title',
        sorting: true,
        templateBy: 'title'
        // resolve: (row: any) => row['topic'] || '-',
    },
    {
        title: 'Description',
        id: 'description',
        sorting: false,
        resolve: (row: any) => row['description'] || '-',
    },
    {
        title: 'Content Type',
        id: 'contentType',
        sorting: false,
        templateBy: 'contentType'
        // resolve: (row: any) => row['contentType'] || '-',
    },
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
    // {
    //    title: 'Report Count',
    //    id: 'reportCount',
    //    sorting: false,
    //    templateBy: 'reportCount'
    //  },

     {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
    },

    {
      title: 'Privacy',
      id: 'privacy',
      sorting: false,
      // resolve: (row: any) => row['privacy'] || '-',

      templateBy: 'privacy',
    },
    {
      title: 'Status',
      id: 'status',
      sorting: false,
      templateBy: 'status',
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
    search: 'Search by Title , Expert name',
    index: true,
    sorting: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
