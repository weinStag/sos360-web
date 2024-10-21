import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(
    private languageService: LanguageService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      headers: req.headers.set('language',  'PT_BR')
    });

    return next.handle(dupReq);
  }
}
