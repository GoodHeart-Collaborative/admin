import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../pages/forum-listing/component/listing-filter.component';
type forum = any;

const defaultData: Table.Data<forum> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class ForumTableDataSource implements Table.Source<forum> {
  label = 'Forum Management';
  columns: Table.Column<forum>[] = [
    {
        title: 'Name',
        id: 'topic',
        sorting: true,
        templateBy: 'topic'
    },


    // {
    //     title: 'forum',
    //     id: 'categoryData',
    //     sorting: false,
    //     templateBy: 'categoryData'
    // },
    {
        title: 'Description',
        id: 'description',
        sorting: false,
        resolve: (row: any) => row['description'],
      },
    {
        title: 'Category Name',
        id: 'categoryName',
        sorting: false,
        resolve: (row: any) => row['categoryName'],
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
    search: 'Search by topic',
    index: true,
    addComponent: true,
    sorting: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<forum> = defaultData) {}
}
