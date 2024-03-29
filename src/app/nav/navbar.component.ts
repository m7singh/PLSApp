import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ISession } from '../properties/shared/property.model'
import { PropertyService } from '../properties/index'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size:15px} 
    #searchForm {margin-right:100px; } 
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `],

})
export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(public auth: AuthService, private propertyService: PropertyService) {
  }

  searchSessions(searchTerm) {
    this.propertyService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    })
  }
}
