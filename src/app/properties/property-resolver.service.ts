import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { PropertyService } from './shared/property.service'

@Injectable()
export class PropertyResolver implements Resolve<any> {
  constructor(private propertyService:PropertyService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.propertyService.getProperty(route.params['id']);
  }
}
