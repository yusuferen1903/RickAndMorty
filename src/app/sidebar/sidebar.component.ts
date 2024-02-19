import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  constructor(private router: Router) {}
  selectedTab: string = ''; // Varsayılan olarak Ana Sayfa seçili
  currentUrl!: string;
  @Output() tabSelected = new EventEmitter<string>();
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    if (this.currentUrl.startsWith('/')) {
      this.currentUrl = this.currentUrl.substring(1);
    }
    this.selectedTab = this.currentUrl ? this.currentUrl : 'mainpage'
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
    this.tabSelected.emit(tab);
    this.router.navigate([tab]);
  }
}
