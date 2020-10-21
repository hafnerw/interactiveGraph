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
    console.log(e);
    if (e.target.tagName !== 'svg' && !e.target.parentElement.classList.contains('parent')) {
      this.currentElem = e.target;
      this.currentInner = this.safeHtml(e.target.outerHTML);
    } else if (e.target.parentElement.classList.contains('parent')) {
      this.currentElem = e.target.parentElement;
      this.currentInner = this.safeHtml(e.target.parentElement.outerHTML);
    }
  }

  getViewBox() {
    return this.currentElem.getBBox().x + ' ' + this.currentElem.getBBox().y + ' '
      + this.currentElem.getBBox().width + ' ' + this.currentElem.getBBox().height;
  }
  safeHtml(val): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(val);
  }
}
