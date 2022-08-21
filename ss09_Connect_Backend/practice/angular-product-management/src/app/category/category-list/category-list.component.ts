import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  id: number;

  name: string;

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // delete(id: number) {
  //   this.categoryService.deleteCategory(id).subscribe(categories => {
  //     this.categories = this.categoryService.getAll();
  //   });
  // }

  // getCategory(id: number) {
  //   return this.categoryService.findById(id).subscribe(category => {
  //     this.categoryForm = new FormGroup({
  //       name: new FormControl(category.name),
  //     });
  //   });
  // }

  delete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.router.navigate(['/category/list']);
    }, e => {
      console.log(e);
    });
  }
}
