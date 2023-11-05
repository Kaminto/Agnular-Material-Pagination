import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { dummyDataObs$ } from './data.model';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatButtonModule, SimpleTableComponent],
  template: `
    <div *ngIf="dummyDataSignal() as dummyDataSignal" class="c-wrapper">
      <app-simple-table [dummyData]="dummyDataSignal"></app-simple-table>
    </div>
  `,
  styles: [
    `
    .c-wrapper {
      padding: 12px;
      background: #f1f1f1;
    }
  `,
  ],
})
export class App {
  dummyDataSignal = toSignal(dummyDataObs$);
}

bootstrapApplication(App);
