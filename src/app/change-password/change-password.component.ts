import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePasswordForm: FormGroup;
  errorMessage: string = '';
  adminD:any;
  userD: any;

  constructor(private fb: FormBuilder,private userservice:UserServiceService, private authService: AuthServiceService, private router:Router) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatch });
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  passwordsMatch(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const adminData = localStorage.getItem('adminData');
      const userData = localStorage.getItem('userData');
    if (adminData) {
      const data=localStorage.getItem('adminData');
      this.adminD=JSON.parse(data);
      const { oldPassword, newPassword } = this.changePasswordForm.value;
      this.authService.changePassword(this.adminD.id, oldPassword, newPassword)
        .subscribe(
          response => {
            console.log('Password changed successfully', response);
            localStorage.removeItem('adminData');
            this.router.navigate(['/admin']);
            this.errorMessage = ''; // Clear the error message on success
          },
          error => {
            console.error('Error changing password', error);
            this.errorMessage = error; // Display the error message from the server
          }
        );
    }else if(userData){
      const data=localStorage.getItem('userData');
      this.userD=JSON.parse(data);
      const { oldPassword, newPassword } = this.changePasswordForm.value;
      this.userservice.changePassword(this.userD.memberId, oldPassword, newPassword)
      .subscribe(Response => {
        console.log('password changed successfully', Response);
        localStorage.removeItem('userData');
        this.router.navigate(['/user']);
        this.errorMessage='';
      },
      error => {
        console.error('Error changing password',error);
        this.errorMessage=error;
      }
    );
    }
  }
}

}
