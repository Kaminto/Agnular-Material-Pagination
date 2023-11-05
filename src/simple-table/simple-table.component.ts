import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  Input,
  OnInit,
  signal,
  TrackByFunction,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BubblePaginationDirective } from '../bubble-pagination.directive';
import { DummyData } from '../data.model';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css'],
  imports: [
    CommonModule, 
    MatTableModule, 
    MatButtonModule, 
    MatPaginatorModule,
    BubblePaginationDirective
  ],
  standalone: true,
  styles: [
    `
    table {
      background: #f1f1f1;
    }
  `,
  ],
})
export class SimpleTableComponent implements AfterViewInit {
  @Input({ required: true }) set dummyData(data: DummyData[]) {
    this.dataSource = new MatTableDataSource<DummyData>(data);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<DummyData>;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age'];

  identity: TrackByFunction<DummyData> = (_, item: DummyData) => item.id;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
