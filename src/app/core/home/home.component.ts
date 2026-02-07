import { Component } from '@angular/core';
import { VALENTINE_DAYS } from '../../data/valentines.config';
import { CommonModule } from '@angular/common';
import { DayComponent } from '../../pages/day/day.component';
import { LockedComponent } from '../locked/locked.component';
import { BirthdayComponent } from '../../pages/birthday/birthday.component';
import { WelcomeComponent } from '../../pages/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeComponent,
    DayComponent,
    LockedComponent,
    BirthdayComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  today = new Date();
  days = VALENTINE_DAYS;
  
  hasStarted(): boolean {
    return localStorage.getItem('started') === 'true';
  }

  startJourney() {
    localStorage.setItem('started', 'true');
    
  }

  isUnlocked(date: string): boolean {
    return new Date(date) <= this.today;
  }

  isBirthdayUnlocked(): boolean {
    return this.today >= new Date('2026-02-16');
  }
}
