import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_EVENTS, EVENTS } from 'src/app/constant/routes';
import { EventTableDataSource } from '../../../models/index';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { MatDialog } from '@angular/material';
import { EventService } from '../../../service/event.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {
   tableSource = new EventTableDataSource();
   eventList: any;
   eventData: Table.OptionData = {
     pageIndex: 0,
     pageSize: 10,
     searchText: null,
     filterData: null,
     sortData: null
   };
   constructor(
     private $event: EventService,
     private $router: Router,
     private $confirmBox: ConfirmBoxService,
     private $utility: UtilityService,
   ) {
   }

   ngOnInit() {
     this.updateList();
   }
 /**
  * User listing Handler
  */
   updateList() {
     const { pageIndex, pageSize, searchText, filterData , sortData } = this.eventData;
     let params = {
       page: `${pageIndex + 1}`,
       limit: `${pageSize}`,
     };
     if (filterData) {
       const keys = Object.keys(filterData).filter(el => filterData[el]);
       keys.forEach((key: string) => {
         if (key === 'fromDate' || key === 'toDate') {
           const value: Date = filterData[key];
           if (key === 'toDate' && value) {
             value.setHours(23, 59, 59, 999);
           }
           params[key] = `${new Date(value).toISOString()}`;
         } else {
           params[key] = filterData[key];
         }
       });
     }
     if (sortData) {
       params['sortOrder'] = sortData.sortOrder;
       params['sortBy'] = sortData.sortBy;
     }
     if (searchText) {
       params['searchTerm'] = searchText;
     }
    //  this.$event.queryData(params).then(res => {
    //    this.eventList = res['data'];
    //    this.setUpTableResource(this.eventList);
    //  });
   }
 /**
  * Listing Pagination Hnadler
  * @param event
  */
   onOptionChange(event: Table.OptionEvent) {
     this.eventData = event.data;
     this.updateList();
   }

   /**
    * User Action Handler
    * @param id
    * @param action
    */
   onActionHandler(id: string, action: ActionType) {
     const index = this.eventList.data.findIndex(user => user._id === id);
     this.$confirmBox.listAction('event', action == 'active'  ?  'active' : ( action == 'deleted' ? 'delete' : 'block'))
     .subscribe((confirm) => {
       if (confirm) {
         this.$event.updateStatus(id, action).then((res) => {
          //  this.$utility.success(res.message);
           this.handleActions(action, index);
         });
       }
     });
   }

   /**
    * Action Update Handler
    * @param action
    * @param index
    */
   handleActions(action: ActionType, index) {
     switch (action) {
       case 'deleted':
         this.eventList.data.splice(index, 1);
         this.eventList.total = this.eventList.total - 1;
         break;
       case 'active':
         this.handleStatus(action, index);

         break;
       case 'blocked':
         this.handleStatus(action, index);
         break;
       default:
         break;
     }
     this.setUpTableResource(this.eventList);
   }

   handleStatus(action: 'blocked' | 'active', index: number) {
     this.eventList.data = this.eventList.data.map((user, i) => {
       if (i === index) {
         user.status = action;
       }
       return user;
     });
   }

   /**
    * User Set Up Table Handler
    * @param userRecords
    */
   setUpTableResource(userRecords) {
     const { pageIndex, pageSize } = this.eventData;
     this.tableSource = new EventTableDataSource({
       pageIndex,
       pageSize,
       rows: userRecords['data'],
       total: userRecords['total']
     });
   }

   /**
    * Edit Handler
    * @param id
    */
  oneditHandler(id) {
     this.$router.navigate([`${EVENTS.fullUrl}`, 'edit', id]);
   }

   /**
    * Details Handler
    * @param id
    */
   onDetails() {
    this.$router.navigate([`${EVENTS.fullUrl}`, '443412412414dasdsdasds', 'details']);
   }

   /**
    * Add Handler
    */
   onAdd() {
    this.$router.navigate([`${ADD_EVENTS.fullUrl}`]);
   }
 
 
   /**
    * user Like Handler
    * @param id
    */
  //  onlikeHandler(id: string, likesCount: number) {
  //    if (!likesCount) {
  //      return;
  //    }
  //    this.$matDailog.open(LikeActionComponent, {
  //      width: '500px',
  //      data: id
  //    }).afterClosed().subscribe();
  //  }
 
  //  onCommentsHandler(id: string, commentCount: number) {
  //    if (!commentCount) {
  //      return;
  //    }
  //    this.$matDailog.open(CommentsComponent, {
  //      width: '500px',
  //      data: id
  //    }).afterClosed().subscribe();
  //  }

}
