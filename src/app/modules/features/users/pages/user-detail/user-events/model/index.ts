import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../component/listing-filter.component';
type Category = any;

const defaultData: Table.Data<Category> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class EventTableDataSource implements Table.Source<Category> {
  label = 'Category Management';
  columns: Table.Column<Category>[] = [
    {
      title: 'Image',
      id: 'image',
      sorting: false,
      templateBy: 'imageUrl'
    },
    {
        title: 'Event Title',
        id: 'title',
        sorting: true,
        templateBy: 'title'
        // resolve: (row: any) => row['title'] || '-',
    },
    {
        title: 'Event Description',
        id: 'description',
        sorting: false,
        // templateBy: 'description'
        resolve: (row: any) => row['description'] || '-',
    },
    {
        title: 'Event Category',
        id: 'eventCategory',
        sorting: false,
        // templateBy: 'eventCategory'
        resolve: (row: any) => row['eventCategoryName'] || '-'
    },
    {
      title: 'Event Price',
      id: 'price',
      sorting: false,
      resolve: (row: any) =>'$' + row['price'] || 0
     },
    {
      title: 'Event Place',
      id: 'place',
      sorting: false,
      resolve: (row: any) => row['address']
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
      sorting: true,
      templateBy: 'startDate',
    },
    {
      title: 'Event End Date',
      id: 'endDate',
      sorting: true,
      templateBy: 'endDate',
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
    search: 'Search by Event Title , Place',
    index: true,
    sorting: true,
    filterComponent: ListingFilterComponent
  };
  constructor(public data: Table.Data<Category> = defaultData) {}
}
