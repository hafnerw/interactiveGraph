import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {fadeInOut, slideInAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation, fadeInOut]
})
export class AppComponent {

  title = 'interactiveGraph2';
  currentInner: SafeHtml;
  currentElem: SVGGraphicsElement;
  inOut = true;

  constructor(private sanitizer: DomSanitizer) {
  }

  switchCurrent(e) {
    if (e.target.tagName !== 'svg') {
      this.currentElem = e.target;
      this.currentInner = this.sanitizer.bypassSecurityTrustHtml(e.target.outerHTML);
    }
  }

  getViewBox() {
    return this.currentElem.getBBox().x + ' ' + this.currentElem.getBBox().y + ' '
      + this.currentElem.getBBox().width + ' ' + this.currentElem.getBBox().height;
  }
}
