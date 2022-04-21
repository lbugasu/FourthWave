import { Component, OnInit } from '@angular/core'
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.selector'
import { UserActions } from '../store'
@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    hidePassword = true
    hideConfirm = true
    signUpForm!: UntypedFormGroup
    loading!: boolean

    constructor(private store: Store<AppState>) {
        this.signUpForm = new UntypedFormGroup({
            username: new UntypedFormControl('', [Validators.required, Validators.min(8)]),
            firstname: new UntypedFormControl('', [Validators.required]),
            lastname: new UntypedFormControl('', [Validators.required]),
            email: new UntypedFormControl('', [Validators.email, Validators.required]),
            password: new UntypedFormControl('', [Validators.required, Validators.min(8)]),
            repeatPassword: new UntypedFormControl('', [Validators.required, Validators.min(8)]),
        })
    }

    ngOnInit(): void {}

    signUp() {
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
            password: password,
        }

        this.store.dispatch(UserActions.signUpStart({ user: user }))
    }
}
