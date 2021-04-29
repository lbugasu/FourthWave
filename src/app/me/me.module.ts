import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { Material } from './../../libs/material/material.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store'
@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    Material,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('me', reducers)
  ],
  exports: [SignInComponent, SignUpComponent]
})
export class MeModule {}
