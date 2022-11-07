import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tvSHow } from '../models/tvShowDto';

@Injectable({
  providedIn: 'root'
})
export class TVShowService {

private apiServerUrl = environment.movieDBApi;
private api_key = environment.THE_MOVIE_DATABASE_API_KEY;

  constructor(private httpClient: HttpClient) { }

  public getTVShow(tvShowID: number): Observable<tvSHow>{
    return this.httpClient.get<tvSHow>(`${this.apiServerUrl}/3/tv/${tvShowID}?api_key=${this.api_key}`)
  }
}
