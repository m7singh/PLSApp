import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { IProperty, ISession, PropertyService } from '../shared/index'

@Component({
  templateUrl: './property-details.component.html',  
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .property-image { height:300px; width:300px; border:3px}
    .property-image-300px { height:300px;  border:3px}
    .property-image-600px { height:600px; border:3px}
    a {cursor:pointer}   
     .carousel-inner > .item > img,
    .carousel-inner > .item > a > img { 
      width:100%;  
      margin: auto;}
  `]
})
export class PropertyDetailsComponent implements OnInit {
  property:IProperty
  addMode: boolean
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private propertyService: PropertyService, private route: ActivatedRoute) {

  }

  addSession() {
    this.addMode = true    
  }

  saveNewSession(session:ISession) {
    const nextId =  Math.max.apply(null, this.property.sessions.map(s => s.id));
    session.id = nextId + 1
    this.property.sessions.push(session);
    this.propertyService.saveProperty(this.property).subscribe();
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.property = data['property'];
      this.addMode = false;
    })
  }
}