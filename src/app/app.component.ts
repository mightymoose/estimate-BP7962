import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public estimating: boolean;
  public estimateTimer: null | Observable<number>;
  public estimate: number | null;

  constructor() {
    this.estimating = false;
    this.estimateTimer = null;
    this.estimate = null;
  }

  startEstimating() {
    this.estimating = true;
    this.estimateTimer = timer(0, 1000)
      .pipe(
        map((n: number) => 3 - n),
        tap((n: number) => {
          if (n === 0) {
            this.estimate = 2;
          }
        }),
        takeWhile((n: number) => n > 0)
      );
  }
  
}
