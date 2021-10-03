import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Color } from '../../../common/types/color';
import { ChipCrossClickEvent } from '../../models/chip-cross-click-event';

@Component({
  selector: 'ui-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChipComponent implements OnInit {
  @Input()
  @HostBinding('attr.data-bui-color')
  public color: Color | string = 'primary';

  @Input()
  public value: any;

  @Output()
  public crossClick = new EventEmitter<ChipCrossClickEvent>();

  public get showCross(): boolean | string {
    return this._showCross;
  }

  @Input()
  public set showCross(v: boolean | string) {
    if (typeof v === 'string') {
      this._showCross = v.toLowerCase() === 'true';
    } else {
      this._showCross = v;
    }
  }

  public get innerText(): string {
    return this.elRef.nativeElement.querySelector<HTMLSpanElement>('.ui-text-wrapper').innerText;
  }

  public constructor(private elRef: ElementRef<HTMLElement>) {}

  private _showCross = false;

  public ngOnInit(): void {}

  public onCrossClick(): void {
    this.crossClick.emit({
      value: this.value,
      text: this.innerText,
    });
  }
}
