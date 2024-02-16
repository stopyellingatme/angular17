import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-if-else',
  template: `
    @if(enabled()) {
    <h1>🤩 Hello!</h1>
    } @else {
    <h1>😢 Not Enabled!</h1>
    }
    <br />
    <button onclick="toggle">Toggle</button>
  `,
  styles: ``,
  standalone: true,
})
export class IfElseComponent {
  enabled = signal(true);

  toggle() {
    this.enabled.update(() => !this.enabled());
  }
}
