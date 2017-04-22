import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdMenuTrigger } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule, MdMenuTrigger
  ],
  exports: [MdButtonModule, MdCheckboxModule, MdMenuTrigger],
  declarations: []
})
export class MaterialModule { }
