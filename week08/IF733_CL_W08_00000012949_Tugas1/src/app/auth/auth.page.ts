import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {LoadingController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    isLogin = true;

    constructor(
        private authService: AuthService,
        private router: Router,
        private loadingCtrl: LoadingController,
    ) { }

    ngOnInit() {
    }

    onLogin() {
        this.loadingCtrl.create({
            keyboardClose: true,
            message: 'Logging in...'
        }).then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                loadingEl.dismiss();
                this.router.navigateByUrl('/places/tabs/discover');
            }, 1500);
        });
        this.authService.login();
    }

    onSubmit(loginForm: NgForm) {
        if (loginForm.invalid) return;

        const email = loginForm.value.email;
        const password = loginForm.value.password;

        console.log(email, password);

        if (this.isLogin) {
            // send request to login server
        }
        else {
            // send request to sign up server
        }
    }

    onSwitchAuthMode() {
        this.isLogin = !this.isLogin;
    }
}
