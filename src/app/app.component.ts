import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showLogin: boolean = false;
  title = 'sos-360-web';

  constructor(private router: Router, private translation: TranslateService) {
    moment.locale("pt-br");
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (localStorage.getItem("userActive") == null) {
        // this.showLogin = true;
      }
      if (event instanceof NavigationStart) {
        if (event.url.match("login")) {
          const url = event.url === "/" ? "" : event.url;
          const urlAndQuery = url.split("?");
        }
      }

      if (event instanceof NavigationEnd) {
        if (event.url.match("login")) {
          this.showLogin = true;
        } else {
          this.showLogin = false;
        }
      }
    });

    this.initializeLanguage();
  }

  initializeLanguage() {
    const languageCache = localStorage.getItem("language");
    let lang = `{ value: "PT_BR", label: "Português Brasil" }`;
    this.translation.use("pt-BR");
    if (languageCache != null && languageCache?.includes("value")) {
      const langJson = JSON.parse(languageCache);
      this.translation.use(langJson.value === "PT_BR" ? "pt-BR" : "en");
      lang =
        langJson.value === "PT_BR"
          ? `{ value: "PT_BR", label: "Português Brasil" }`
          : `{ value: "US_EN", label:   "Inglês Americano" }`;
    }

    localStorage.setItem("language", JSON.stringify(lang));
  }

}
