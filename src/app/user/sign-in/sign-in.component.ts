import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { FormGroup } from '@angular/forms'
import { AppState } from 'src/app/store/app.selector'
import { Store } from '@ngrx/store'
import * as UserSelectors from '../store/user.selectors'
import * as UserActions from '../store/user.actions'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hidePassword = true
  hideConfirm = true
  signInForm!: FormGroup
  constructor (private store: Store<AppState>, private router: Router) {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.min(8)]),
      password: new FormControl('', [Validators.required, Validators.min(8)])
    })
  }

  ngOnInit (): void {
    this.store.select(UserSelectors.getUserLoggedInStatus).subscribe(state => {
      console.log(state)
      if (state) {
        this.router.navigateByUrl('')
      }
    })
  }

  signIn () {
    const username = this.signInForm.get('username').value

    const password = this.signInForm.get('password').value

    this.store.dispatch(UserActions.signInStart({ username, password }))
  }
}
