import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './AddUser.component.html',
  styleUrls: ['./AddUser.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  services: string[] = ['Polícia', 'Bombeiros', 'SAMU'];
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required]
    });
  }

  getEmailErrorMessage() {
    if (this.userForm.get('email')?.hasError('required')) {
      return 'Email é obrigatório';
    }
    return this.userForm.get('email')?.hasError('email') ? 'Email inválido' : '';
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // Adicione a lógica para salvar o usuário aqui
    }
  }

  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }
}
