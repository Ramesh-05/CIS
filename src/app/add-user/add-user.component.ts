import { Component } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  userDetail:User=new User();
  confirmPassword: string;

  constructor(private userService:UserServiceService,private router:Router){}


  validateForm(): boolean {
   

    if (!this.userDetail.password) {
      alert("You must enter Password.");
      return false;
    }

    // Validate Password
    if (this.userDetail.password.length < 5) {
      alert("Password length should be at least 5 characters.");
      return false;
    }
    var checkOK = /^[a-zA-Z0-9_!@#$%^&*()-=+{}|\][:;?/.,><`~ ]*$/;
    if (!checkOK.test(this.userDetail.password.toString())) {
      alert("Please enter valid values in the Password field.");
      return false;
    }

    if (!this.confirmPassword) {
      alert("You must enter Confirm Password.");
      return false;
    }

    // Validate Confirm Password
    var checkOK = /^[a-zA-Z0-9_!@#$%^&*()-=+{}|\][:;?/.,><`~ ]*$/;
    if (!checkOK.test(this.confirmPassword)) {
      alert("Please enter valid values in the Confirm Password field.");
      return false;
    }
    if (this.userDetail.password !== this.confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    if (!this.userDetail.email) {
      alert("You must enter Email ID.");
      return false;
    }

    // Validate Email ID
    var emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegExp.test(this.userDetail.email.toString())) {
      alert("Please enter a valid Email Address.");
      return false;
    }

    if (!this.userDetail.name) {
      alert("You must enter Name.");
      return false;
    }

    // Validate Name
    var checkOK = /^[a-zA-Z. ]*$/;
    if (!checkOK.test(this.userDetail.name.toString())) {
      alert("Please enter alphabetic values in the Name field.");
      return false;
    }

    if (!this.userDetail.mobileNumber) {
      alert("You must enter Mobile Number.");
      return false;
    }

    // Validate Mobile Number
    if (isNaN(Number(this.userDetail.mobileNumber)) || this.userDetail.mobileNumber.toString().length <= 9) {
      alert("Invalid Mobile Number.");
      return false;
    }

    if (!this.userDetail.telephoneNumber) {
      alert("You must enter Telephone Number.");
      return false;
    }

    // Validate Telephone Number
    var checkOK = /^[0-9-, ]*$/;
    if (!checkOK.test(this.userDetail.telephoneNumber.toString())) {
      alert("Please enter numeric values in the Telephone Number field.");
      return false;
    }

    if (!this.userDetail.contactAddress) {
      alert("You must enter Address.");
      return false;
    }

    // Validate Address
    var checkOK = /^[a-zA-Z/\-:., 0-9]*$/;
    if (!checkOK.test(this.userDetail.contactAddress.toString())) {
      alert("Please enter valid values in the Address field.");
      return false;
    }

    // All validations passed
    return true;
  }

  addUser() {
    // First, validate the form
    if (this.validateForm()) {
      // If form is valid, proceed with adding the user
      // Add your code to add the user here
      this.userService.addUsers(this.userDetail).subscribe(data=>{
        console.log(data);
        this.goToUserList();
      })
      console.log("User added successfully.");
    } else {
      // If form is not valid, do nothing
      console.log("User not added. Please correct the form errors.");
    }
  }

  onSubmit(){
    console.log(this.userDetail);
    this.addUser();
    
    
  }
  goToUserList(){
    this.router.navigate(['/user-list']);
  }

}
