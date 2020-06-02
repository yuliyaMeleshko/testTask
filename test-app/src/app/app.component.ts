import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Array<string> = ['Introduction/Overview', 'PowerMeters', 'ShockWiz', 'TyreWiz', 'Service/Support'];
  tiles: Array<object> = [
    {title: 'QUARQ: Know Your Powers', body: 'Intoduction to the Quarq brand and history', amount: 1},
    {title: 'The Heart Of Your Bycicle: Quarq Factory Tour', body: 'Introduction and overview of the Quarq factory', amount: 1},
    {title: 'Quarq ShockWiz: An Automated Suspension Tuning Device', body: 'Introduction and overview of the Quarq ShockWiz', amount: 1},
    {title: 'TyreWiz - bicycle tire pressure sensor', body: 'Introduction and overview of the Quarq TyreWiz.', amount: 1},
    {title: 'Quarq DZero - Reach A Higher Level', body: 'Overview of the Quarq DZero features and technologies', amount: 2}
  ]
  title = 'test-app';
}
