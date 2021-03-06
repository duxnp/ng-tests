import { Component, Input } from '@angular/core';

import { Tweet } from '../../../../data/types/tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent {
  @Input() tweet!: Tweet;
}
