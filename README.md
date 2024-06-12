# Chrome Extension Template

This is the most barebones example of a Chrome extension using Manifest V3.

It simply injects a script into every web page (`contentScript.js`) and logs "Hello world!" to the console. A background service worker (`background.js`) also just logs "Hello world!". We have added some basic callbacks for document load/page load events (content script), as well as tab update events (background).

## Requirements

- Node.js
- Chrome

## Usage

To run the extension:

```
npm install
```

Then:

```
./chrome_launch.js
```

## License

Copyright (c) 2024 Werner Robitza.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
