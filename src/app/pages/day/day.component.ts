import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})
export class DayComponent implements OnDestroy {
  isPlaying = false;
  @Input() data!: any;

  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;


  playMusic() {
    // if (!this.bgMusic) return;
    // if (this.data?.id === 'rose-day') {
    //   // this.bgMusic.nativeElement.volume = 0.4;
    //   this.bgMusic.nativeElement.play();
    //   this.isPlaying = true;
    // }
    const audio = this.bgMusic.nativeElement;

    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
    } else {
      audio.load(); // 👈 important on mobile
      audio.volume = 0.4;

      audio.play()
        .then(() => this.isPlaying = true)
        .catch(err => console.log(err));
    }
  }

  ngOnDestroy() {
    if (this.bgMusic) {
      this.bgMusic.nativeElement.pause();
      this.bgMusic.nativeElement.currentTime = 0;
    }
  }
}
