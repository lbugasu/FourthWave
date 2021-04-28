import { Inject, Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'
import { distinctUntilChanged, pluck, scan } from 'rxjs/operators'

export class PlayerStore {
  stateUpdates: Subject<any>
  store: BehaviorSubject<any>
  constructor (initialState: any) {
    this.store = new BehaviorSubject(initialState)

    this.stateUpdates = new Subject()

    this.stateUpdates
      .pipe(
        scan((acc, curr) => {
          return { ...acc, ...curr }
        }, initialState)
      )
      .subscribe(this.store)
  }

  updateState (stateUpdate: any) {
    this.stateUpdates.next(stateUpdate)
  }

  selectState (stateKey: any) {
    return this.store.pipe(distinctUntilChanged(stateKey), pluck(stateKey))
  }

  stateChanges () {
    return this.store.asObservable()
  }
}

export const playerStore = new PlayerStore({
  queue: [],
  playingState: false,
  currentTracks: [],
  mini: false
})
