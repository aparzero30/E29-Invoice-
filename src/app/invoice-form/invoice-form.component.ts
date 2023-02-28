import { Component } from '@angular/core';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent {
  service: InvoiceService = new InvoiceService();
  items = this.service.items;
}
