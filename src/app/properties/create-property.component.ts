import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { PropertyService } from './shared/index'

@Component({
  templateUrl: './create-property.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; } 
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `]
})
export class CreatePropertyComponent{
  isDirty:boolean = true
  property:any = { location: { } }

  constructor(private router: Router, private propertyService:PropertyService) {

  }

  
  saveProperty(formValues) {
   this.propertyService.saveProperty(formValues).subscribe(property => {
    this.router.navigate(['/properties']) 
    this.isDirty = false
   })
  }

  cancel() {
    this.router.navigate(['/properties'])
  }
}