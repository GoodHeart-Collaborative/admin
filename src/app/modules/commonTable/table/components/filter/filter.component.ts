import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() label = 'Filter';
  @Output() apply: EventEmitter<void> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();
  @Input() disableValue;
  constructor(
    private $dialogRef: MatDialogRef<any>
    ) { }

  ngOnInit() { }

  onCloseHandler() {
    this.$dialogRef.close();
  }
}
