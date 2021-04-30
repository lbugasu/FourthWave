import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { fromEvent } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  pluck,
  switchMap
} from 'rxjs/operators'
import { SearchService } from 'src/app/shared/services/search/search.service'
import { Podcast } from 'src/app/shared/Models/Podcast'
import { Episode } from 'src/app/shared/Models/Episode'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  options: FormGroup
  hideRequiredControl = new FormControl(false)
  floatLabelControl = new FormControl('auto')

  podcasts: Podcast[] = []
  episodes: Episode[] = []

  searchPodcasts = true
  searchEpisodes = true
  constructor (private fb: FormBuilder, private searchService: SearchService) {
    this.options = this.fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    })
  }

  ngOnInit (): void {
    const inputElement = document.getElementById('search') || document
    const input$ = fromEvent(inputElement, 'keyup')

    const search$ = input$.pipe(
      pluck('target', 'value'),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => {
        console.log(value)
        //@ts-ignore
        const string: string = value
        return this.searchService.searchPodcast(string).valueChanges
      }),
      pluck('data', 'findPodcasts')
    )

    search$.subscribe(results => {
      console.log(results)
      //@ts-ignore

      this.podcasts = results
    })
  }

  checkPodcasts (value: boolean) {
    this.searchPodcasts = value
    console.log(this.searchPodcasts)
  }

  checkEpisodes (value: boolean) {
    this.searchEpisodes = value
    console.log(this.searchEpisodes)
  }
}
