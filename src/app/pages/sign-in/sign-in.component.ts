import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hidePassword = true
  hideConfirm = true
  signInForm!: FormGroup
  constructor () {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.min(8)]),
      password: new FormControl('', [Validators.required, Validators.min(8)])
    })
  }

  ngOnInit (): void {}

  signIn () {}
}
