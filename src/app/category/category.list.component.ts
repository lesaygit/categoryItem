import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category.list.component.html',
  styleUrls: ['./category.list.component.css']
})
export class CategoryListComponent {

  constructor(private router: Router,private route: ActivatedRoute) { }

  navigateToNewCategory(): void {
    this.router.navigate(['newCategory'],{ relativeTo: this.route });
  }

}
