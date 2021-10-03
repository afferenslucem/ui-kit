import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Color } from '../../../common/types/color';

@Component({
  selector: 'button[uiButton], input[uiButton][type=submit], a[uiButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnChanges {

  @Input()
  @HostBinding('attr.data-bui-color')
  public color: Color | string = 'primary';

  @Input()
  @HostBinding('attr.data-bui-design')
  public design: 'basic' | 'flat' | string = 'basic';

  constructor(private elRef: ElementRef<HTMLElement>) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.bindColor();
    }
  }

  public bindColor(): void {
    if (this.isHex(this.color)) {
      this.elRef.nativeElement.style.backgroundColor = this.color;
    }
  }

  public isHex(color: string): boolean {
    return color.trim().startsWith('#');
  }
}
