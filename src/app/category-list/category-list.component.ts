import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryServiceService } from '../category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  category:Category[];
  isAdmin: boolean=false;
  searchQuery: string='';
  searchResult: Category[];
  constructor(private categoryService:CategoryServiceService, private router:Router){}

  ngOnInit(): void {
    this.categoryList(); 
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }   
  }

  categoryList(){
    this.categoryService.getAllCategories().subscribe(data=>{
      this.category=data;
      console.log(data);
    });
  }

  updateCategory(categoryId:number){
    this.router.navigate(['/update-category',categoryId]);
  }

  deleteCategory(categoryId:number){
    this.categoryService.deleteCategory(categoryId).subscribe(data=>{
      console.log(data);
      this.categoryList();
      this.router.navigate(['/category-list']);
    })
    
  }
  categoriesDataView(categoryId:number){
    this.router.navigate(['/view-category',categoryId]);
  }
  // onSearch(event:Event):void{
  //   event.preventDefault();
  //   if(this.searchQuery){
  //     this.searchResult = this.category.filter(card=>
  //       card.categoryName.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   }else{
  //     this.searchResult=this.category;
  //   }
  // }

 
}
