import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';

export class AppTranslateLoader implements TranslateLoader {
  getTranslation(language: string): Observable<any> {
    if (language === 'en') {
      return from(import(`src/assets/i18n/en`).then(o => o.translations));
    } else {
      return from(import(`src/assets/i18n/pt-BR`).then(o => o.translations));
    }
  }
}
