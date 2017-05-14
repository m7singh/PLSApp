import { Routes } from '@angular/router'
import { 
  PropertiesListComponent, 
  PropertyDetailsComponent, 
  CreatePropertyComponent, 
  PropertyListResolver,
  CreateSessionComponent,
  PropertyResolver } from './properties/index'
import { Error404Component } from './errors/404.component'

export const appRoutes : Routes = [
  { path: 'properties/new', component: CreatePropertyComponent, canDeactivate: ['canDeactivateCreateProperty'] },
  { path: 'properties', component: PropertiesListComponent, resolve: {properties: PropertyListResolver}},
  { path: 'properties/:id', component: PropertyDetailsComponent, resolve: {property: PropertyResolver}},
  { path: 'evencts/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]