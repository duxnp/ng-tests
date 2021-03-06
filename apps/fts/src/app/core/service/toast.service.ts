/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  success(textOrTpl: string | TemplateRef<any>) {
    this.show(textOrTpl, { classname: 'bg-success text-light', delay: 10000 });
  }

  danger(textOrTpl: string | TemplateRef<any>) {
    this.show(textOrTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
