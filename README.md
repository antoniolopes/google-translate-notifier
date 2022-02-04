# Google Translate Notifier #

Automatic translation can have undesired consequences. I came accross an [example of automatic translation at work that had some dire consequences](https://twitter.com/tonyvirtual/status/1489175581581357057) and decided to build a small mechanism that we can easily place on our websites to make sure that people are aware that automatic translation is dangerous.

So, this is an example of a Javascrip script and CSS styles that can be used to detect if an HTML page has been automatically translated by the Google Translate add-on that many people use in browsers.

You can use only the JS script or the CSS styles or both, it's up to you the level of warning you want to pass to your website's visitors.

To try it out, open [this page](tests/index.html) (that has some Portuguese sentences) with Google Chrome and try using the Google Translate extension to translate it to English.