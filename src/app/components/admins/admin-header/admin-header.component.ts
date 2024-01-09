import { NgFor ,NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [NgFor,NgClass,RouterLink],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  language : string = 'Angular';
  menuAdminList = [
    { id: 1, name: "Admin", slug: "" },
    { id: 2, name: "Products", slug: "/products" },
    { id: 3, name: "Contact", slug: "/contact" },
    { id: 4, name: "Service", slug: "/service" },
    { id: 5, name: "Login", slug: "/login" },
  ];
  navigationHiddenOrShow: boolean = true;

  onClickMenu(): void {
    this.navigationHiddenOrShow = !this.navigationHiddenOrShow;
  }
}
