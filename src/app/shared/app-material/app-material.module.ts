import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

// This module was created only for organize all material imports;
@NgModule({
  exports: [MatTableModule, MatCardModule, MatToolbarModule],
})
export class AppMaterialModule {}
