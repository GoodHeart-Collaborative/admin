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
      title: 'Name ',
      id: 'name',
      sorting: false,
      templateBy: 'name'
      // resolve: (row: any) => `${row['firstName']} ${row['lastName']}` || 'NA',
    },
    {
        title: 'Title',
        id: 'title',
        sorting: true,
        // templateBy: 'title'
        resolve: (row: any) => row['topic'] || '-',
    },
    {
        title: 'Description',
        id: 'description',
        sorting: false,
        // templateBy: 'description'
        resolve: (row: any) => row['description'] || '-',
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
    templateBy: 'commentCount'
    // resolve: (row: any) => row['totalComments'] || '0',
     },
    {
      title: 'Added On',
      id: 'createdAt',
      sorting: true,
      templateBy: 'createdAt',
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
    sorting: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
