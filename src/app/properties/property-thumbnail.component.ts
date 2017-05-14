import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IProperty } from './shared/index'

@Component({
  selector: 'property-thumbnail',
  template: `
   <div [routerLink]="['/properties', property.propertyId]" class="thumbnail" >
   <strong>
      <div class="col-sm-2 text-nowrap"> 
        <span>{{property?.propertyAddress?.street}}</span>
      </div>     
      <div class="col-sm-3 text-nowrap"> 
           <div [hidden]="!property?.propertyAddress">          
              <span>{{property?.propertyAddress?.city}}, {{property?.propertyAddress?.state}} {{property?.propertyAddress?.zip}}</span>
          </div>
      </div>
      <div class="col-sm-3 text-nowrap"> 
           <div [hidden]="!property?.propertyDetails?.beds">          
              <span>{{property?.propertyDetails?.beds}} BR + {{property?.propertyDetails?.baths}} BA</span>
          </div>
      </div>
      <div class="col-sm-2 text-nowrap"> 
          {{property?.propertyPrice?.price | currency:'USD':true}}            
      </div>    
      <div class="col-sm-1 text-nowrap"> 
          <div [ngStyle]="getPriceDifferencecStyle()" [ngSwitch]="getPriceDifference()">
              <span *ngSwitchCase="'-1'"> (Down) </span>
              <span *ngSwitchCase="'1'"> (Up) </span>
              <span *ngSwitchDefault></span>
           </div> 
      </div> 
      <div class="col-sm-1 text-nowrap"> 
         {{property?.dateLastUpdatedString | date:'yyyy-MM-dd'}} 
      </div>
      </strong>
      <div class="w-100"></div>
      <div class="col-sm-12 text-wrap"> 
          <div [hidden]="!property?.propertyDetails?.propertyDescription">
              <span>{{property?.propertyDetails?.propertyDescription}}</span>
          </div>
      </div>
    </div>
       
  `,
  styles: [`
    .pad-left { margin-left: 5px; }
    .thumbnail { 
        min-height: 50px; 
        margin-top:1px;
      width: 103%; 
         background-color:#00CA8C;
    
  
      }
    .well div { color: #bbb; } 

  `]
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
export class PropertyThumbnailComponent {
  @Input() property: IProperty

  getPriceDifferencecStyle(): any {
    var priceUp = this.property.propertyPrice.price - this.property.propertyPrice.lastPrice;
    if (this.property && priceUp > 0)
      return { color: '#003300', 'font-weight': 'bold' }
    return {}
  }
  getPriceDifference(): any {
    var pricediff = this.property.propertyPrice.price - this.property.propertyPrice.lastPrice;
    if (pricediff > 0)
      return 1;
    if (pricediff < 0)
      return -1;
    return 0;
  }
}

/*

   border:  #FFFFFF 2px solid;
        border-radius: 2px;
        -moz-border-radius: 40px;
        -webkit-border-radius: 40px;

     
        min-height: 50px; 
        width: 100%; 
        vertical-align:middle;
        margin-top:0px;
        border:  #FFFFFF 0px;
        border-radius: 2px;
        -moz-border-radius: 0px;
        -webkit-border-radius: 2px;
       
  background-color:#00CA8C;

<div [routerLink]="['/properties', property.propertyid]" class="well hoverwell thumbnail">
      <h2>{{property?.propertyAddress?.street | uppercase}}</h2>
       <div [hidden]="!property?.propertyAddress">
        <span>Location: {{property?.propertyAddress?.street}}</span>
        <span class="pad-left">{{property?.propertyAddress?.city}}, {{property?.propertyAddress?.state}} {{property?.propertyAddress?.zip}}</span>
      </div>
      <div [ngStyle]="getPriceDifferencecStyle()" [ngSwitch]="getPriceDifference()">Price: {{property?.propertyPrice?.price | currency:'USD':true}}
        <span *ngSwitchCase="'-1'"> (Downt)</span>
        <span *ngSwitchCase="'1'"> (Up )</span>
        <span *ngSwitchDefault></span>
      </div>
      <div>Active: {{property?.active }}</div>

      <div [hidden]="!property?.propertyDetails?.propertyDescription">
        Description: {{property?.propertyDetails?.propertyDescription}}
      </div>
      
      <div>Listed Date:  {{property?.propertyAccount?.dateListedString | date:'yyyy-MM-dd'}}</div>
      
      <div><span class="pad-right">Last Updated Date:  {{property?.dateLastUpdatedString | date:'yyyy-MM-dd'}}</span></div>
  
    </div>
    
    
    

Grid Table way


    <div class="col-sm-2"> 
            <div [routerLink]="['/properties', property.propertyid]" >
              <h1 class="well hoverwell">{{property?.propertyAddress?.street | uppercase}}</h1>
            </div>
      </div>
      <div class="col-sm-1"> 
           <div [hidden]="!property?.propertyAddress">
              <span >Location: {{property?.propertyAddress?.street}}</span>
           </div>
      </div>
      <div class="col-sm-1"> 
           <div [hidden]="!property?.propertyAddress">          
              <span class="pad-left">{{property?.propertyAddress?.city}}, {{property?.propertyAddress?.state}} {{property?.propertyAddress?.zip}}</span>
          </div>
      </div>
      <div class="col-sm-1"> 
           <div [ngStyle]="getPriceDifferencecStyle()" [ngSwitch]="getPriceDifference()">Price: {{property?.propertyPrice?.price | currency:'USD':true}}
              <span *ngSwitchCase="'-1'"> (Downt)</span>
              <span *ngSwitchCase="'1'"> (Up )</span>
              <span *ngSwitchDefault></span>
           </div>
      </div>

      <div class="col-sm-1"> 
           <div [hidden]="!property?.active">          
              <span class="pad-left">{{property?.active }}</span>
          </div>
      </div>
      <div class="col-sm-1"> 
          <div [hidden]="!property?.propertyDetails?.propertyDescription">
                Description: {{property?.propertyDetails?.propertyDescription}}
          </div>
      </div>
  
      <div class="col-sm-1"> 
          <div [hidden]="!property?.propertyDetails?.propertyDescription">
              <div>Listed Date:  {{property?.propertyAccount?.dateListedString | date:'yyyy-MM-dd'}}</div>
          </div>
      </div>
      
      <div class="col-sm-1"> 
          <div><span class="pad-right">Last Updated Date:  {{property?.dateLastUpdatedString | date:'yyyy-MM-dd'}}</span></div>
  
      </div>
      <div class="col-sm-1"> 
          <div><span class="pad-right">Last Updated Date:  {{property?.dateLastUpdatedString | date:'yyyy-MM-dd'}}</span></div>
       </div>
     
    



     <tr>  
        <td><div [routerLink]="['/properties', property.propertyid]" >
              <h1 class="hoverwell">{{property?.propertyAddress?.street}}</h1>
            </div>
          </td>
        <td> <div [hidden]="!property?.propertyAddress">          
              <span class="pad-left">{{property?.propertyAddress?.city}}, {{property?.propertyAddress?.state}} {{property?.propertyAddress?.zip}}</span>
          </div></td>
        <td> <div [ngStyle]="getPriceDifferencecStyle()" [ngSwitch]="getPriceDifference()">Price: {{property?.propertyPrice?.price | currency:'USD':true}}
              <span *ngSwitchCase="'-1'"> (Downt)</span>
              <span *ngSwitchCase="'1'"> (Up )</span>
              <span *ngSwitchDefault></span>
           </div></td>
        <td> <div [hidden]="!property?.active">          
              <span class="pad-left">{{property?.active }}</span>
          </div></td>
        <td><div [hidden]="!property?.propertyDetails?.propertyDescription">
                Description: {{property?.propertyDetails?.propertyDescription}}
          </div> York</td>
        <td> <div [hidden]="!property?.propertyDetails?.propertyDescription">
              <div>Listed Date:  {{property?.propertyAccount?.dateListedString | date:'yyyy-MM-dd'}}</div>
          </div>
       </td>        
       <td>
        <div><span class="pad-right">Last Updated Date:  {{property?.dateLastUpdatedString | date:'yyyy-MM-dd'}}</span></div>
        </td>
      <td>
          <div><span class="pad-right">Last Updated Date:  {{property?.dateLastUpdatedString | date:'yyyy-MM-dd'}}</span></div>
       </td>
         </tr>
    */