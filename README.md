### Project setup

1. Export the contents of notes-backend-server.zip
2. Initiate npm with "npm -y init"
3. Install get with "npm install jest"
4. Added a .gitignore file to prevent repo upload of node_modules folders
5. Run "npm install express --save"
6. Run "brew install jq"

### Interaction

1. Open index.html in a browser to view the app
2. To run the server, go to the notes-backend-server directory (i.e. `cd notes-backend-server`) and enter `node index.js` in the console
3. Use command + C to close the server

### Editing

The following lines exist in the package.json file:

```
"build": "esbuild index.js --bundle  --outfile=bundle.js",
"buildw": "esbuild index.js --bundle  --outfile=bundle.js --watch",
```

These allow commands to be run in the root directory console. When developing this app further, use the following commands:

1. Use `npm run build` to rebuild the app once amends have been made
2. Use `npm run buildw` to initiate a watchful build (i.e. continuously builds as amends are made)
