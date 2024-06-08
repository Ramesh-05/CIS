import { Component } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {

  categories:Category=new Category();
  categoryId:number;

  constructor(private categoryService:CategoryServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.categoryId=this.route.snapshot.params['categoryId'];
    this.categoryService.fetchCategoryById(this.categoryId).subscribe(data=>{
      this.categories=data;
    })
  }

}
