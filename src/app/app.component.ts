import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconBtnComponent } from "@test/ui-ds";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, IconBtnComponent],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  title = 'angular-latest';
}
