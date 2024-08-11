import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = ''; // Add this line
  authError: string = '';
  isSignUp: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.authError = '';

    if (this.isSignUp) {
      // Handle signup logic
      if (this.password !== this.confirmPassword) {
        this.authError = 'Passwords do not match';
      } else {
        alert('Signup successful!');
        // Optionally navigate to a different page
      }
    } else {
      // Handle login logic
      if (this.username !== 'admin') {
        this.authError = 'Username is incorrect';
      } else if (this.password !== 'admin') {
        this.authError = 'Password is incorrect';
      } else {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/home']);
      }
    }
  }

  toggleForm(signUp: boolean) {
    this.isSignUp = signUp;
    this.authError = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = ''; // Reset confirmPassword when switching forms
  }
}
