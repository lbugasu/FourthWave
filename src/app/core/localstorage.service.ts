import { Injectable } from '@angular/core'
import { ILocalStorage } from '../shared/I-LocalStorage'

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    preferences: ILocalStorage
    constructor() {
        this.preferences = localStorage.getItem('localStoragePreferences')
            ? JSON.parse(localStorage.getItem('localStoragePreferences'))
            : {
                  collapsed: false,
              }
    }

    toggleCollapse() {
        this.preferences.collapsed = !this.preferences.collapsed
        localStorage.setItem('localStoragePreferences', JSON.stringify(this.preferences))
    }
}
