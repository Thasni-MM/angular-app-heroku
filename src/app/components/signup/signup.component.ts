import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  faLocks = faLock;
  registerForm = new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {}


  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  
  onSubmits(): void {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(
        (result) => {
          console.log(result);
          
          
          this.router.navigate(['/login']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
` `