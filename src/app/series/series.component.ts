import { Component, OnInit } from '@angular/core';
import {tvSHow} from "../models/tvShowDto";
import { TVShowService} from "../services/series.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private tvShowService: TVShowService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.showID = params["id"])
  }

  public tvShow: tvSHow | undefined;
  private showID: number = 0;

  ngOnInit(): void {
    this.getTVShow(this.showID);
  }

  getTVShow(id: number) {
    this.tvShowService.getTVShow(id).subscribe((tvShow: tvSHow) => {
      console.log(tvShow);
      this.tvShow = tvShow;
    });
  }

}
