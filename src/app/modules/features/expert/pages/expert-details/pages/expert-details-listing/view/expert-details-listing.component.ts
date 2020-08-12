import { Component, OnInit, Input, Output ,EventEmitter, OnChanges} from '@angular/core';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { ExpertDetailsTableDataSource } from '../../../models';
import { ExpertDetailsService } from '../../../service/expert-details.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-expert-details-listing',
  templateUrl: './expert-details-listing.component.html',
  styleUrls: ['./expert-details-listing.component.scss']
})
export class ExpertDetailsListingComponent implements OnInit, OnChanges {
  contentIndex: any;
  @Output() changeHandler = new EventEmitter();
  @Input() experDetails;

  tableSource = new ExpertDetailsTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $expert: ExpertDetailsService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
  ) {
  }

  ngOnInit() {}

  ngOnChanges() {
    this.setUpTableResource(this.experDetails);
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.changeHandler.emit(this.eventData);
  }

  onActionHandler(id: string, action: ActionType) {
    console.log(this.experDetails);
    const index = this.experDetails.findIndex(user => user._id === id);
    this.$confirmBox.listAction('post',  action == 'active' ? 'Active' :(action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$expert.updateStatus(id, action).then((res) => {
            this.$utility.success(res.message);
            this.handleActions(action, index);
          });
        }
      });
  }

  handleActions(action: ActionType, index) {
    switch (action) {
      case 'deleted':
        this.experDetails.splice(index, 1);
        this.experDetails.total = this.experDetails.total - 1;
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
    this.setUpTableResource(this.experDetails);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.experDetails = this.experDetails.map((user, i) => {
      if (i === index) {
        user.status = action;
      }
      return user;
    });
  }

  setUpTableResource(record) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new ExpertDetailsTableDataSource({
      pageIndex,
      pageSize,
      rows: record,
      total: record.total
    });
  }


}
