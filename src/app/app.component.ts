import { Component } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-app';
  private apiURL = environment.apiURL;
  data: any = {};

  constructor(private http: Http) {
    this.getHeros();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiURL)
    .pipe(map((res: Response) => res.json()));
  }

  getHeros() {
    this.getData().subscribe(data => {
      // consle output with character data
      console.log(data);
      this.data = Array.of(data);
    });
  }

  // --> Untested
  // getHeroById(id: any) {
  //   let requestOptions = new RequestOptions();
  //   requestOptions.search = id;
  //   return this.http.get(this.apiURL, requestOptions)
  //   .pipe(map((res: Response) => res.json()))
  // }
}
