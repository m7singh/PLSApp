import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropertiesAppComponent }  from './properties-app.component';
import { PropertyService,
  PropertiesListComponent,
  PropertyThumbnailComponent,
  PropertyDetailsComponent,
  CreatePropertyComponent,
  PropertyResolver,
  PropertyListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe } from './properties/index';
import { JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) ],
  declarations: [
    PropertiesAppComponent,
    PropertiesListComponent,
    PropertyThumbnailComponent,
    NavBarComponent,
    PropertyDetailsComponent,
    CreatePropertyComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe ],
  providers: [
    PropertyService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    PropertyResolver,
    PropertyListResolver,
    VoterService,
    AuthService,
    {
      provide: 'canDeactivateCreateProperty',
      useValue: checkDirtyState
    }],
  bootstrap: [ PropertiesAppComponent ]
})
export class AppModule { }

function checkDirtyState(component:CreatePropertyComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this property, Do you really want to cancel?'); 

  return true;
}