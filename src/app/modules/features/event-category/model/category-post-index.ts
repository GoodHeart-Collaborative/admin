import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../pages/event-related-category-post/component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class EventRelatedCategoryTableDataSource implements Table.Source<Category> {
  label = 'Related Category Management';
  columns: Table.Column<Category>[] = [

    {
      title: 'Post Image',
      id: 'profilePicUrl',
      sorting: false,
      templateBy: 'profilePicUrl'
    },
    {
        title: 'Event Title',
        id: 'title',
        sorting: true,
        templateBy: 'title'
        // resolve: (row: any) => row['topic'] || '-',
    },
    {
        title: 'Event Description',
        id: 'description',
        sorting: false,
        resolve: (row: any) => row['description'] || '-',
    },

    {
      title: 'Event Category',
      id: 'eventCategory',
      sorting: false,
      templateBy: 'eventCategory'
      // resolve: (row: any) => row['eventCategory'] || '-'
  },
  {
    title: 'Event Price',
    id: 'price',
    sorting: false,
    resolve: (row: any) => '$' + (row['price'] || 0)
   },

   {
    title: 'Event Place',
    id: 'place',
    sorting: false,
    resolve: (row: any) => row['address']
   },
   {
    title: 'Added By',
    id: 'addedBy',
    sorting: false,
    templateBy: 'addedBy',
  },

  {
    title: 'Added On',
    id: 'createdAt',
    sorting: true,
    templateBy: 'createdAt',
  },
 
  {
      title: 'Event Start Date',
      id: 'startDate',
      sorting: false,
      templateBy: 'startDate',
    },
    {
      title: 'Event End Date',
      id: 'endDate',
      sorting: false,
      templateBy: 'endDate',
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
    search: 'Search by Event Title ,Place ',
    index: true,
    sorting: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
