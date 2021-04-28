import { AuthService } from './../../shared/services/auth/auth.service'
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { pluck } from 'rxjs/operators'
import { Store } from '@ngrx/store'
import { setUser } from 'src/app/store/app.action'
import { User } from 'src/app/shared/services/auth/User'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hidePassword = true
  hideConfirm = true
  signUpForm!: FormGroup
  loading!: boolean

  constructor (private authService: AuthService, private store: Store) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.min(8)]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(8)]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.min(8)
      ])
    })
  }

  ngOnInit (): void {}

  signUp () {
    const firstname = this.signUpForm.get('firstname')?.value
    const lastname = this.signUpForm.get('lastname')?.value
    const email = this.signUpForm.get('email')?.value
    const username = this.signUpForm.get('username')?.value
    const password = this.signUpForm.get('password')?.value

    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password
    }
    const observer = {
      next: () => {},
      error: () => {},
      complete: () => {}
    }
    this.loading = true
    this.authService
      .signUp(user)
      .pipe(pluck('data', 'signUp'))
      .subscribe(
        user => {
          // this.user = user
          console.log(user)
          const userr: User = { username: 'lau', email: '' }
          this.store.dispatch(setUser({ user: userr }))
        },
        error => console.log('#1 Error:', error),
        () => {
          this.loading = false
        }
      )
  }
}
