import { Component } from '@angular/core'
import { AuthService } from './user/auth.service'

@Component({
  selector: 'properties-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class PropertiesAppComponent {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
  
}