import { Component, Inject } from '@angular/core';
import { MOMENT, MomentFactory } from './moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngplayground';

  constructor(@Inject(MOMENT) public moment: MomentFactory) {
  }
}
