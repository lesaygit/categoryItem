import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorygModuleRouting } from './category.module.route';

import { CategoryListComponent } from './category.list.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategorygModuleRouting
  ]

})
export class CategoryModule { }
