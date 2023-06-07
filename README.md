## Installing

1. Install Yarn package manager
2. `yarn`

## Content
Subject to change.
View `src/App.tsx` to update content.



## Building

1. `yarn start`
2. Save the web page at `http://localhost:3000` somewhere
3. Use the HTML in that page for the email

## Warning
Implementation is intentionally outdated because SFU Mail tends to break new features.
Don't turn the tables into flexboxes, nor use advanced CSS selectors.
Images are referred by CDN because the email use-case necessitates support on a file-systemless reader;
Images aren't embeddable inside HTML so they must be referred externally. 
