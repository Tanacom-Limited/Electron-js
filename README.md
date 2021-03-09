Introduction to Electron
========================


>Electron is a framework for creating native Desktops applications with web technologies like Javascript,HTML and CSS.

>It is compatible with Mac, Windows and Linux. It
 uses Chromium and Node.js .

Install Node.js before proceeding with Electron.



A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/Tanacom-Limited/Electron-js.git
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```


 Main process creates multiple renderer processes and each of the created renderer processes do not interfer with each other.
