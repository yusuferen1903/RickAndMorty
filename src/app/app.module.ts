import { NgModule , LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CharacterComponent } from './character/character.component';
import { SelectedCharacterComponent } from './selected-character/selected-character.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
registerLocaleData(localeTr);
export class MyPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Sayfa başına öğe';
  override nextPageLabel     = 'Sonraki sayfa';
  override previousPageLabel = 'Önceki sayfa';
  override lastPageLabel = 'Son sayfa';
  override firstPageLabel = 'İlk sayfa';

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} / ${length}`;
  };
}
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CharacterComponent,
    SelectedCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'tr-TR' },
    { provide: MatPaginatorIntl, useClass: MyPaginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
