import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{ ContentComponent } from './content/content.component';
const routes: Routes = [{
  path: 'header', component: HeaderComponent
},
{
  path: 'footer', component: FooterComponent
},
{
  path: 'content', component: ContentComponent
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
