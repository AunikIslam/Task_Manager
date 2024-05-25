import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { TaskService } from "./service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class AuthGuard implements CanActivate {
    constructor(private taskService: TaskService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const taskId = route.paramMap.get('id')
        if(this.taskService.isValidTaskId(taskId!)) {
            return true;
        } else {
            this.router.navigate(['task-list']);
            return false;
        }
        
        
    }

}