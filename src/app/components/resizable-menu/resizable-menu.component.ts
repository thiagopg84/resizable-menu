import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-resizable-menu',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './resizable-menu.component.html',
  styleUrl: './resizable-menu.component.scss'
})
export class ResizableMenuComponent implements AfterViewInit {
  @ViewChild('menu') menu!: ElementRef<HTMLElement>;
  @ViewChild('handle') handle!: ElementRef<HTMLElement>;
  readonly minWidth = 68;
  readonly minWidthToToggle = 150;
  readonly maxWidth = 350;
  readonly defaultWidth = 192;
  currentWidth: number = 192;
  isResizing: boolean = false;
  isExpanded = true;
  startX!: number;
  startWidth!: number;

  ngAfterViewInit(): void {
    console.log('Menu e handle carregados:', this.menu, this.handle);
  }

  onMouseDown(event: MouseEvent): void {
    this.startX = event.clientX;
    this.startWidth = this.menu.nativeElement.offsetWidth;
    this.isResizing = true;
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent): void {
    if (!this.isResizing || event.clientX > this.maxWidth) return;
    this.isExpanded = true;
    const dx = event.clientX - this.startX;
    const newWidth = this.startWidth + dx;
    this.currentWidth = Math.max(this.minWidth, newWidth);
  }

  @HostListener('document:mouseup', ['$event']) onMouseUp(): void {
    if (!this.isResizing) return;
    this.isResizing = false;
    if (this.currentWidth < this.minWidthToToggle) this.toggleMenu();
  }

  toggleMenu(): void {
    this.isExpanded = !this.isExpanded;
    this.currentWidth = this.isExpanded ? this.defaultWidth : this.minWidth;
    if (this.isResizing) this.isResizing = false;
  }

  onClick(event: string): void {
    console.log(event);
  }
}
