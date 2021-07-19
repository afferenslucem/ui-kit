import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  private _value: number;

  @Input()
  public set value(v: number) {
    this._value = v;
  }

  public get value(): number {
    return Math.min(this._value, 100);
  }

  constructor() {}

  ngOnInit(): void {}

  public getStyle(): any {
    return {
      width: this.value + '%',
    };
  }
}
