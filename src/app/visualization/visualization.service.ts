import { Injectable, EventEmitter } from '@angular/core';

import { Record } from '../classes/record';


@Injectable({
  providedIn: 'root'
})
export class VisualizationService {
  public mode: string = 'chart';
  public hasPositions: boolean = false;
  public update: EventEmitter<any> = new EventEmitter();
  public time: number = 1000;

  constructor() { }

  checkPositions(records: Record[]): void {
    // console.log(records)
    if (records.length > 0) {
      var recordsWithPositions = records.filter(record => record.positions.length > 0);
      this.hasPositions = recordsWithPositions.length > 0;
    } else {
      this.hasPositions = false;
    }
    this.mode = this.hasPositions ? 'animation' : 'chart';
  }
}
