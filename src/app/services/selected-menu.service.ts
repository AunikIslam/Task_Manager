import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SeletedMenuService {
    menuId: string;
    private selectedModuleId = new BehaviorSubject(null);
    sharedModuleId = this.selectedModuleId.asObservable();

    setMenuId(pmenuId: string): void {
        this.menuId = pmenuId;
    }

    getMenuId(): string {
        return this.menuId;
    }

    broadcastSelectedModuleId(data: any): void {
        this.selectedModuleId.next(data);
    }
}