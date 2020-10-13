import { Router } from '@angular/router';
import { Component, OnInit, Input , EventEmitter, Output, OnChanges} from '@angular/core';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
export type ActionType = 'deleted' | 'blocked' | 'active';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { UserGratitudeJournalService } from '../user-gratitude-journal/service/user-gratitude-journal.service';
import { EventTableDataSource } from './model';
import { ForumService } from 'src/app/modules/features/forum/service/forum.service';
@Component({
  selector: 'app-user-topics',
  templateUrl: './user-topics.component.html',
  styleUrls: ['./user-topics.component.scss']
})
export class UserTopicsComponent implements OnInit , OnChanges{

  tableSource = new EventTableDataSource();
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  isProcessing = false;
  @Input() forumData;
  @Input() userId;
  @Output() changeHandler = new EventEmitter();
  userDetails: any;

  constructor(
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $forum: ForumService,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.setUpTableResource(this.forumData);
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.changeHandler.emit(this.eventData);
  }


  onActionHandler(id: string, action: ActionType) {
    const index = this.forumData.list.findIndex(user => user._id === id);
    this.$confirmBox.listAction('forum', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$forum.updateStatus(id, action).then((res) => {
            this.$utility.success(res.message);
            this.handleActions(action, index);
          });
        }
      });
  }

  handleActions(action: ActionType, index) {
    switch (action) {
      case 'deleted':
        this.forumData.list.splice(index, 1);
        this.forumData.total = this.forumData.total - 1;
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
    this.setUpTableResource(this.forumData);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.forumData.list = this.forumData.list.map((user, i) => {
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
  setUpTableResource(userDetails: any) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new EventTableDataSource({
      pageIndex,
      pageSize,
      rows: userDetails.list,
      total: userDetails.total
    });
  }

    onDetails(id: string , type: string) {
     this.$router.navigate([`admin/forum/${id}/details`],
     {
      queryParams: { type }
    }
    );
   }
}

