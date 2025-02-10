import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProtocolService } from '../services/protocol.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  services: string[] = ['addUser.police', 'addUser.firefighter', 'addUser.ambulance'];

  constructor(private fb: FormBuilder, private router: Router, private translate: TranslateService, private protocolService: ProtocolService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      service: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  getEmailErrorMessage() {
    if (this.userForm.get('email')?.hasError('required')) {
      return this.translate.instant('addUser.emailRequired');
    }
    return this.userForm.get('email')?.hasError('email') ? this.translate.instant('addUser.emailInvalid') : '';
  }

  getConfirmPasswordErrorMessage() {
    if (this.userForm.get('confirmPassword')?.hasError('required')) {
      return this.translate.instant('addUser.passwordRequired');
    }
    return '';
  }

  onSubmit() {
    if (this.userForm.valid) {
      const { name, email, password, service } = this.userForm.value;
      this.protocolService.findAttendantByEmail(email).subscribe(
        (response) => {
          if (response) {
            alert(this.translate.instant('addUser.emailAlreadyRegistered'));
          } else {
            this.protocolService.registerAttendant({ name, email, password, service }).subscribe(
              () => {
                alert(this.translate.instant('addUser.userAddedSuccessfully'));
                this.router.navigate(['/admin']);
              },
              (error) => {
                console.error(error);
                alert(this.translate.instant('addUser.errorAddingUser'));
              }
            );
          }
        },
        (error) => {
          console.error(error);
          alert(this.translate.instant('addUser.errorCheckingEmail'));
        }
      );
    }
  }
}
