import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { get, set } from 'lodash/fp';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EnumI18n } from './models/enum-i18n';

@Injectable()
export class LanguageService {

  constructor(
    private translateService: TranslateService
  ) { }

  translate(key: string, params?: any): string {
    return this.translateService.instant(key, params);
  }

  translateEnumListAsync<T extends EnumI18n>(items: T[]): Observable<T[]> {
    const translationSource = new BehaviorSubject<T[]>([]);
    const translateFn = () => translationSource.next(this.translateAll(items));

    this.translateService.onLangChange.subscribe((lang) => translateFn());
    translateFn();

    return translationSource.asObservable();
  }

  translateNowAndOnChanges<T>(translateFn: () => T) {
    const translationSource = new BehaviorSubject<T>(translateFn());
    this.translateService.onLangChange.subscribe(() => translationSource.next(translateFn()));
    return translationSource.asObservable();
  }

  translateFromSource<T>(translationSource: Subject<T>, translateFn: (list: T) => T) {
    return translationSource.pipe(switchMap(list => this.translateNowAndOnChanges(() => translateFn(list))));
  }

  translateObj<T>(item: T, params?: any, propKey = 'i18nKey', propLabel = 'label'): T {
    return set(propLabel, this.translateService.instant(get(propKey, item), params), <any>item);
  }

  translateAll<T>(items: T[], propKey = 'i18nKey', propLabel = 'label'): T[] {
    return items.map((item) => this.translateObj(item, {}, propKey, propLabel));
  }

  currentLocale() {
    return 'en';
  }

}
