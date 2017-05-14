import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { PropertyService } from './shared/property.service'

@Injectable()
export class PropertyListResolver implements Resolve<any> {
  constructor(private propertyService:PropertyService) {}
  resolve() {
    return this.propertyService.getProperties()
  }
}
