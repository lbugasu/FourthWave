import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { FormGroup } from '@angular/forms'
import { AppState } from 'src/app/store/app.selector'
import { Store } from '@ngrx/store'
import * as fromStore from '../store'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hidePassword = true
  hideConfirm = true
  signInForm!: FormGroup
  constructor (private store: Store<AppState>) {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.min(8)]),
      password: new FormControl('', [Validators.required, Validators.min(8)])
    })
  }

  ngOnInit (): void {
    this.store.select(fromStore.getUser).subscribe(state => console.log(state))
  }

  signIn () {}
}
