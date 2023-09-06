import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private openApiKey = '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';
  private apiUrl = 'https://api.openai.com/v1/translate';

  constructor(private http: HttpClient) { }

  public translateText(text: string, sourceLang: string, targetLang: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.openApiKey}`
    });

    const payload = {
      text: text,
      source_language: sourceLang,
      target_language: targetLang
    };

    return this.http.post(this.apiUrl, payload, { headers: headers });
  }
}
