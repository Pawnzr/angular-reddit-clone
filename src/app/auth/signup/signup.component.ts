import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from './signup-request.payload';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class signupComponent implements OnInit {
    signupForm: FormGroup = new FormGroup({});
    signupRequestPayload: SignupRequestPayload;
    constructor(
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService
    ) {
        this.signupRequestPayload = {
            username: '',
            email: '',
            password: '',
        };
    }

    ngOnInit(): void {
        this.signupForm = new FormGroup({
            username: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }
    signup(signupRequestPayload: SignupRequestPayload) {
        this.authService.signup(signupRequestPayload).subscribe(
            () => {
                this.router.navigate(['/login'], {
                    queryParams: { registered: 'true' },
                });
            },
            () => {
                this.toastr.error('Registration Failed! Please try again');
            }
        );
    }
  }
