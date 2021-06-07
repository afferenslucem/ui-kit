import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-form-field-set',
  templateUrl: './form-field-set.component.html',
  styleUrls: ['./form-field-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldSetComponent implements OnInit {
  @Input()
  public orientation: 'vertical' | 'horizontal' = 'vertical';

  constructor() {}

  ngOnInit(): void {}
}
