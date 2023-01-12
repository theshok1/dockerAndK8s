import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'docker';

  @ViewChild('formTitle') formTitle!: ElementRef<any>
  @ViewChild('comment') comment!: ElementRef<any>
  @ViewChild('table') table!: MatTable<any>

  toDoList: MatTableDataSource<{title: string, comment: string}> = new MatTableDataSource()

  constructor() {}

  ngOnInit(): void {
  }

  addData(): void {
    this.toDoList.data.push({title: this.formTitle.nativeElement.value, comment: this.comment.nativeElement.value})
    this.table.renderRows()
  }
}
