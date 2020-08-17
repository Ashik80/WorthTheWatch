import { UserService } from './../_services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(): boolean {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/sign-in']);
        return false;
    }
}
