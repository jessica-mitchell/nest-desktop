import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ticks-slider-popup',
  templateUrl: './ticks-slider-popup.component.html',
  styleUrls: ['./ticks-slider-popup.component.scss']
})
export class TicksSliderPopupComponent implements OnInit, OnChanges {
  @Input() options: any;
  @Input() thumbLabel: boolean = false;
  @Input() value: number;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  public idx: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.idx = this.options.ticks.indexOf(this.value);
  }

  onChange(event: any): void {
    this.value = Number(this.options.ticks[event.value]);
    this.valueChange.emit(this.value);
  }

  displayWith(ticks: any[]): any {
    return (idx: number): string[] => ticks[idx]
  }

  setDefaultValue(): void {
    this.value = this.options.value;
    this.valueChange.emit(this.value);
  }

}
