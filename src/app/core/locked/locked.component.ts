import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-locked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locked.component.html',
  styleUrl: './locked.component.scss'
})
export class LockedComponent implements OnInit, OnDestroy {
  @Input() date!: string;

  timeLeft = '';
  intervalId!: any;

  ngOnInit() {
    this.calculateTime();
    this.intervalId = setInterval(() => {
      this.calculateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  calculateTime() {
    const target = new Date(this.date).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      this.timeLeft = 'Unlocking...';
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    this.timeLeft = `${hours}h ${minutes}m ${seconds}s`;
  }
}
