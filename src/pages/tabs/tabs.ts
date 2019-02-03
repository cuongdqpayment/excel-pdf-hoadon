import { Component } from '@angular/core';
import { CustomerPage } from '../customer/customer';
import { InvoicePage } from '../invoice/invoice';
import { ReportPage } from '../report/report';
import { DynamicListPage } from '../dynamic-list/dynamic-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DynamicListPage;
  tab2Root = CustomerPage;
  tab3Root = InvoicePage;
  tab4Root = ReportPage;

  constructor() {}
}
