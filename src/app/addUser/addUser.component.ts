import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  services: string[] = ['Polícia', 'Bombeiros', 'Ambulância'];

  constructor(private fb: FormBuilder, private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required]
    });
  }

  getEmailErrorMessage() {
    if (this.userForm.get('email')?.hasError('required')) {
      return this.translate.instant('admin.emailRequired');
    }
    return this.userForm.get('email')?.hasError('email') ? this.translate.instant('admin.emailInvalid') : '';
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // Adicione a lógica para salvar o usuário aqui
    }
  }
}
