import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
    constructor(
      private translate: TranslateService
    ) { }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
