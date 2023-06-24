import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [NavComponent, HeaderComponent],
})
export class LayoutModule {}
