import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { fromEvent, MonoTypeOperatorFunction } from 'rxjs';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  pluck,
  switchMap,
  throttle,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { Podcast } from 'src/app/shared/Models/Podcast';
import { ApolloQueryResult } from '@apollo/client/core';
import { Episode } from "src/app/shared/Models/Episode";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl("auto");

  podcasts: Podcast[] = [];
  episodes: Episode[] = [];
  constructor(private fb: FormBuilder, private searchService: SearchService) {
    this.options = this.fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
    const inputElement = document.getElementById("search") || document;
    const input$ = fromEvent(inputElement, "keyup");

    const search$ = input$.pipe(
      pluck("target", "value"),
      debounceTime(200),
      distinctUntilChanged(),

      switchMap((value) => {
        console.log(value);
        //@ts-ignore
        const string: string = value;
        return this.searchService.searchPodcast(string).valueChanges;
      }),
      pluck("data", "findPodcasts")
    );

    search$.subscribe((results) => {
      console.log(results);
      //@ts-ignore

      this.podcasts = results;
    });
  }
}
