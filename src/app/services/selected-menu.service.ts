import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SeletedMenuService {
    menuId: string;

    setMenuId(pmenuId: string): void {
        this.menuId = pmenuId;
    }

    getMenuId(): string {
        return this.menuId;
    }
}