import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [RouterOutlet,AdminHeaderComponent],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent {

}
