import { Component, OnInit } from '@angular/core'
import { PropertyService } from './shared/property.service'
import { ActivatedRoute } from '@angular/router'
import { IProperty } from './shared/index'

@Component({
  template: `
    <div>
    <h1>Upcoming Properties</h1>
    <hr/>
    <div class="row"  >     
     <div *ngFor="let property of properties"  class="col-md-12"  >    
        <property-thumbnail [property]="property"></property-thumbnail>
        </div>
      </div>
  `,
  styles: [`
    
    .rowdeco {
        margin-top:1px;
        border:  #FFFFFF 2px solid;
        border-radius: 2px;
        -moz-border-radius: 40px;
        -webkit-border-radius: 40px;
         background-color:#00CA8C;
         
      }

  `]
})
export class PropertiesListComponent implements OnInit {
  properties:IProperty[]
  
  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
    ) { }  

  ngOnInit() {
    this.properties = this.route.snapshot.data['properties']
  }
}


/*
    <div class="row" >
     
     <div *ngFor="let property of properties" class="col-md-12"   >
        <property-thumbnail [property]="property" ></property-thumbnail>
      </div>

    </div>
    F97924
*/