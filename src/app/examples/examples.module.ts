import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NgbNavModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExamplesModule { }
