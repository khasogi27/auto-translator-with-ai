import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sourceLang: string = 'en'; // from
  public targetLang: string = 'fr' // to
  public inputText: string = '';
  public translatedText: string = '';

  constructor(
    private translationService: TranslationService
  ) {}

  public translateText() {
    this.translationService.translateText(this.inputText, this.sourceLang, this.targetLang)
      .subscribe(resp => {
        console.log(resp.data, 'resp.data');
        this.translateText = resp.data.translation[0].translated_text;
      });
  }
}
