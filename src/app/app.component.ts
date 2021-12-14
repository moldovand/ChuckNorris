import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  onejoke: string = " ";

  constructor(private api: ApiService) {}

  ngOnInit() {}

  clickGetJoke() {
    this.api.getJoke().subscribe((joke: any) => {
      this.onejoke = joke;
    });
  }
}
