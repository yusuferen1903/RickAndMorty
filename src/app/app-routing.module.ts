import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CharacterComponent } from './character/character.component';
const routes: Routes = [
    //MainLayout Header ve Footerın Bulunduğu Ana Component içine ise children componentler gelerek sayfayı oluşturuyor.
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        {
          path: '',
          component: MainpageComponent
        },
        {
          path: 'mainpage',
          component: MainpageComponent
        },
        {
          path: 'character',
          component: CharacterComponent
        }
  
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
