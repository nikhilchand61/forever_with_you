import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'forever-with-you';

  constructor(private router: Router) {}

  ngOnInit() {
    // Ensure welcome page displays on every reload
    this.router.navigate(['/welcome']).catch(() => {});
  }
}
