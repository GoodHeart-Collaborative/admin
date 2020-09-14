import * as Table from 'src/app/modules/commonTable/table/interfaces';
import { ListingFilterComponent } from '../component/listing-filter.component';

type User = any;

const defaultData: Table.Data<User> = {
    pageIndex: 0,
    pageSize: 10,
    total: 0,
    rows: null
};

export class ExpertReportTableDataSource implements Table.Source<User> {
  label = 'Report Management';
  columns: Table.Column<User>[] = [
    {
      title: 'Profile Pic',
      id: 'profilePicUrl',
      sorting: false,
      templateBy: 'profilePicUrl',
    },
    {
      title: 'Name',
      id: 'name',
      sorting: true,
      templateBy: 'name',
    },
    {
      title: 'Email',
      id: 'email',
      sorting: false,
      templateBy: 'email',
    },
    // {
    //   title: 'Report Type',
    //   id: 'type',
    //   sorting: false,
    //   templateBy: 'type',
    // },
    {
      title: 'Post',
      id: 'reason',
      sorting: false,
      templateBy: 'reason',
    },
    // {
    //   title: 'Reason',
    //   id: 'reason',
    //   sorting: false,
    //   templateBy: 'reason',
    // },
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

    // {
    //   title: 'Actions',
    //   id: 'actions',
    //   sorting: false,
    //   templateBy: 'actions',
    // },
  ];
  options: Table.Options = {
    selection: false,
    search: 'Search by Name , Email',
    index: true,
    sorting: true,
    filterComponent: ListingFilterComponent,
  };
  constructor(public data: Table.Data<User> = defaultData) {}
}
