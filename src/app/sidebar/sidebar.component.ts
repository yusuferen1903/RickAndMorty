import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  constructor(private router: Router) {}
  selectedTab: string = 'Ana Sayfa'; // Varsayılan olarak Ana Sayfa seçili

  @Output() tabSelected = new EventEmitter<string>();

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.tabSelected.emit(tab);
    this.router.navigate([tab]);
  }
}
