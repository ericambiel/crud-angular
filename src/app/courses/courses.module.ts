import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CoursesRoutingModule, AppMaterialModule],
})
export class CoursesModule {}
