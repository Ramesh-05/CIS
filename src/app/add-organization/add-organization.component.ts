import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Organization } from '../organization';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent {

  organization:Organization=new Organization();

  constructor(private authService:AuthServiceService, private router:Router){}

  onSubmit(){
    console.log(this.organization);
    this.addOrganization();
  }

  validateForm() {
       // Validate Organization Name
    if (!this.organization.orgName) {
      alert("You must enter Organization Name.");
      return false;
    }

    if (!this.organization.address1) {
      alert("You must enter Address 1.");
      return false;
    }

    if (!this.organization.address2) {
      alert("You must enter Address 2.");
      return false;
    }

    if (!this.organization.place) {
      alert("You must enter Place.");
      return false;
    }

    if (!this.organization.pincode) {
      alert("You must enter Pincode.");
      return false;
    }

    // Validate Phone Number
    if (!this.organization.phoneNum) {
      alert("You must enter Phone Number.");
      return false;
    }

    if (!this.organization.teleEx) {
      alert("You must enter Tele Ex. It only Numbers");
      return false;
    }

    // Validate Email
    if (!this.organization.email) {
      alert("You must enter Email.");
      return false;
    }

    // Validate Register Number
    if (!this.organization.regNo) {
      alert("You must enter Register Number.");
      return false;
    }

    // Validate Date of Registration
    if (!this.organization.dateOfReg) {
      alert("You must enter Date of Registration.");
      return false;
    }

    // Validate Inception Date
    if (!this.organization.inceptionDate) {
      alert("You must enter Inception Date.");
      return false;
    }

    if (!this.organization.logo) {
      alert("You must enter Logo.");
      return false;
    }

    // Validate CE Code
    if (!this.organization.ceCode) {
      alert("You must enter CE Code.");
      return false;
    }

    // Validate CER Number
    if (!this.organization.cerNo) {
      alert("You must enter CER Number.");
      return false;
    }

    // Validate GST Rate
    if (!this.organization.gstRate) {
      alert("You must enter GST Rate.");
      return false;
    }

    // Validate GST Number
    if (!this.organization.gstNo) {
      alert("You must enter GST Number.");
      return false;
    }

    // Validate CST Number
    if (!this.organization.cstNo) {
      alert("You must enter CST Number.");
      return false;
    }

    // Validate Form Date
    if (!this.organization.fromDate) {
      alert("You must enter Form Date.");
      return false;
    }

    // Validate PANGIR
    if (!this.organization.panGir) {
      alert("You must enter PANGIR.");
      return false;
    }

    // Validate DRCL Number
    if (!this.organization.drclNo) {
      alert("You must enter DRCL Number.");
      return false;
    }

    // Validate EXIM Code
    if (!this.organization.eximCode) {
      alert("You must enter EXIM Code.");
      return false;
    }

    // Validate PANEXT
    if (!this.organization.panExt) {
      alert("You must enter PANEXT.");
      return false;
    }

    // Validate CST Rate
    if (!this.organization.cstRate) {
      alert("You must enter CST Rate.");
      return false;
    }

    // Validate Excise Duty Rate
    if (!this.organization.exciseDutyRate) {
      alert("You must enter Excise Duty Rate.");
      return false;
    }

    // Validate TDS Account
    if (!this.organization.tdsAccount) {
      alert("You must enter TDS Account.");
      return false;
    }

    // All validations passed
    return true;
}

addOrganization() {
  // Validate the form
  if (this.validateForm()) {
      // If the form is valid, proceed with adding the organization
      // Call the authService to create organization info
      this.authService.createOrganizationInfo(this.organization).subscribe(data => {
          // Handle the response data, for example, log it
          console.log(data);
          // Redirect to the organization list page after successful addition
          this.router.navigate(['/org-list']);
      });
      // Log a success message
      console.log("Organization added successfully.");
  } else {
      // If the form is not valid, do nothing
      console.log("Organization not added. Please correct the form errors.");
  }
}

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  // Do something with the selected file, such as uploading it
}


}
