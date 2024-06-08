import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryServiceService } from '../category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  category:Category=new Category();

  constructor(private categoryService:CategoryServiceService, private router:Router){}


  onSubmit(){
    console.log(this.category);
    this.createdCategory();
    this.router.navigate(['/category-list'])
  }

  createdCategory(){
    if(true){
    this.categoryService.addCategory(this.category).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/categoryList']);
    })
    console.log("category added successfully.");
    } else {
      // If form is not valid, do nothing
      console.log("category not added. Please correct the form errors.");
  }
  }

}
