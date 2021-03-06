import { Component } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'nbt-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  alerts: any[] = [
    {
      type: 'success',
      msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000,
    },
  ];

  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000,
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }
}
