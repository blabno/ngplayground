import { Component, Inject } from '@angular/core';
import { MOMENT, MomentFactory } from './moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(MOMENT) public moment: MomentFactory) {
  }
}
