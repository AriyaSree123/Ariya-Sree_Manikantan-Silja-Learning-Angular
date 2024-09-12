import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AriyaSreeManikantanSilja-Learning-Angular';
  id: string = 'W0849647';
  department : string = 'Computer Programming';
}
