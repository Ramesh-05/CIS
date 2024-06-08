import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryServiceService } from '../category-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  category:Category
  categoryId:number;

  constructor(private categoryService:CategoryServiceService,private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.categoryId=this.route.snapshot.params['categoryId'];
    this.category=new Category();
    this.categoryService.fetchCategoryById(this.categoryId).subscribe(data=>{
      this.category=data;
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.categoryService.updateCategory(this.categoryId,this.category).subscribe(data=>{
      this.router.navigate(['/category-list']);
    },
    error=>console.log(error));
  }

}
