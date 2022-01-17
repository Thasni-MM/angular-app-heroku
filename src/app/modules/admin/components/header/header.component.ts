import { AuthService } from './../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {
     
 
  }
  public useremail: string|null = this.auth.getData();
  ngOnInit(): void {
    //let useremail = this.auth.getData();
  }
  
  logout(): void {
    this.auth.logout();
  }
}
