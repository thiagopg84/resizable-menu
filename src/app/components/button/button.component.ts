import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() isExpanded!: boolean;
  @Output() buttonClick = new EventEmitter<string>();

  onClick(): void {
    this.buttonClick.emit(this.title);
  }
}
