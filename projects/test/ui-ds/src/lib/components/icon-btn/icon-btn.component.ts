import {
  AfterViewInit,
  Component,
  effect,
  input,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { IconNameType } from './icon-btn-type';

@Component({
  selector: 'test-icon-btn',
  imports: [CommonModule],
  templateUrl: './icon-btn.component.html',
  host: {
    class: 'btn',

  },
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBtnComponent implements AfterViewInit {

  //////////////!SECTION this should work with storybook
  // @Input({ required: true }) icon: IconNameType = "location";
  // @Input() fontSize: string = "fs-2";
  // @Input() disabled: boolean = false;
  // @Input() title!: string;
  // @Input() Class!: string;
  // @Input() Style!: string;
  ///////////////////////////////////////

  ///!SECTION this not work with storybook can't get values from story args
  public icon = input.required<IconNameType>();
  public fontSize = input<string>('fs-2');
  public disabled = input<boolean>(false);
  public title = input<string>();
  public Class = input<string>();
  public Style = input<string>();
  ///////////////////////////////////////

  constructor() {
    effect(() => {
      // ✅ icon() is safe to access here
      console.log('icon is:', this.icon());
      console.log('Style is:', this.Style());
      console.log('title is:', this.title());
      console.log('Class is:', this.Class());
      console.log('title is:', this.title());
      console.log('disabled is:', this.disabled());
      console.log('fontSize is:', this.fontSize());
    });
  }
  ngAfterViewInit(): void {
    console.log('icon is:', this.icon());
    console.log('Style is:', this.Style());
    console.log('title is:', this.title());
    console.log('Class is:', this.Class());
    console.log('title is:', this.title());
    console.log('disabled is:', this.disabled());
    console.log('fontSize is:', this.fontSize());
  }
}
