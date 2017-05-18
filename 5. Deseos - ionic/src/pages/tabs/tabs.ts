import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PendientesComponent } from '../pendientes/pendientes.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = AboutPage;

  constructor() {

  }
}
