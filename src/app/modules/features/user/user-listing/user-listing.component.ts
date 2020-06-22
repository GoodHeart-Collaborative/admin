import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserListingService } from './service/user-listing.service';
import { SelectionModel } from '@angular/cdk/collections';
import { USER_STATUS } from '../../../../constant/app-constant';
import { PAGE_OPTIONS } from 'src/app/constant/constants';
import { Subscription } from 'rxjs';
import { USER_LIST_CONFIG, UserTableDataSource } from './model/user-list.model';
import { IPopupData } from 'src/app/models/common-models';
import { COMMON_MESSAGES, POPUP_MESSAGES } from 'src/app/constant/messages';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { AutoUnsubscribe } from 'src/app/decorators/autounsubscribe';
import { Config } from 'src/app/modules/commonTable/listing/listing.types';
@AutoUnsubscribe([])
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
  providers: [],
})
export class UserListingComponent implements OnInit {
  selection = new SelectionModel<any>(true, []);
  userList: MatTableDataSource<any>;
  pageOptions = { ...PAGE_OPTIONS };
  sub: Subscription = new Subscription();
  listingConfig: Config = USER_LIST_CONFIG;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  userStatus = USER_STATUS;

  constructor(
    private _userListingService: UserListingService,
    private utilityService: UtilityService
  ) {}
    // this.fetchUserList();
 

  ngOnInit() {}

  /*
      Fetching user list after 
  */

  // fetchUserList() {
  //   this.sub.add(
  //     this._userListingService
  //       .getUserListing(this.pageOptions)
  //       .subscribe(({ data: { result, page, limit, total } }) => {
  //         if (page === -1) {
  //           // page = 2;
  //           page = this.pageOptions.page + 1;
  //         }
  //         if (result.length === 0) {
  //           this.listingConfig.noRecord = true;
  //         }
  //         const initialIndex = (page - 1) * this.pageOptions.limit + 1;
  //         console.log(initialIndex);

  //         this.listingConfig.total = total;
  //         this.tableSource = new UserTableDataSource(
  //           result.map((item, index) => ({ ...item, sn: initialIndex + index }))
  //         );
  //       })
  //   );
  // }

  onTableEventChange(event) {
    this.pageOptions = event;
    // this.fetchUserList();
  }

  /*
    Methods For Changing Status Of The User ( BLOCK,UNBLOCK,DELETE ) 
  */
  unblockUser(userId) {
    const unblockDialogData: IPopupData = {
      message: COMMON_MESSAGES.ACTIVE.confirm('user'),
      cancelButtonText: POPUP_MESSAGES.no,
      confirmButtonText: POPUP_MESSAGES.yes,
    };
    this.sub.add(
      this.utilityService
        .openDialog(unblockDialogData)
        .subscribe((canUnblock) => {
          if (!!canUnblock) {
            this._userListingService.unblockUser(userId).subscribe((data) => {
              this.utilityService.showAlert(
                COMMON_MESSAGES.ACTIVE.success('user')
              );
              // this.fetchUserList();
            });
          }
        })
    );
  }

  blockUser(userId) {
    const blockDialogData: IPopupData = {
      message: COMMON_MESSAGES.BLOCKED.confirm('user'),
      cancelButtonText: POPUP_MESSAGES.no,
      confirmButtonText: POPUP_MESSAGES.yes,
    };
    this.sub.add(
      this.utilityService.openDialog(blockDialogData).subscribe((canBlock) => {
        if (!!canBlock) {
          this._userListingService.blockUser(userId).subscribe((data) => {
            this.utilityService.showAlert(
              COMMON_MESSAGES.BLOCKED.success('user')
            );
            // this.fetchUserList();
          });
        }
      })
    );
  }

  deleteUser(userId) {
    const deleteDialogData: IPopupData = {
      message: COMMON_MESSAGES.DELETED.confirm('user'),
      cancelButtonText: POPUP_MESSAGES.no,
      confirmButtonText: POPUP_MESSAGES.yes,
    };
    this.sub.add(
      this.utilityService
        .openDialog(deleteDialogData)
        .subscribe((canDelete) => {
          if (!!canDelete) {
            this._userListingService.deleteUser(userId).subscribe((data) => {
              this.utilityService.showAlert(
                COMMON_MESSAGES.DELETED.success('user')
              );
              // this.fetchUserList();
            });
          }
        })
    );
  }
}
