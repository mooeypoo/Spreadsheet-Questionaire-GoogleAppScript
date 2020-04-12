# Google Sheet Questionaire

A configurable quiz based on a google spreadsheet, for Wikimedia's distant socializing experiment.

## How it works

This code is meant to run on a Google App Script, and uses `.clasp` as a deployment tool. It can potentially be used for other spreadsheets by changing the configured structure and design.

## Contributing

As always, pull requests and issue reporting is very welcome!

While this code is meant to run on a Google App Script that's connected to a spreadsheet, it can also be run locally for development.

### To run locally:

- Clone the repo
- Run `npm install`
- Run `npm run local` to load the system locally based on mock data.

### To deploy:

- Rename `.clasp.example.json` to `.clasp.json`
- Insert the correct spreadsheet ID to the `.clasp.json` file
- When ready to deploy, run `npm run deploy`
- NOTE: For the new deployment to be live, the admin must deploy a new version through Google App Script interface:
  -- Open the script page in the Google App Script interface
  -- Open `Publish` -> `Deploy as a web app`
  -- Select a new version, add a comment, and click `Update`

## Contributors and Thanks!

- Developer: Moriel Schottlender (mooeypoo).
- Product: Cara Palanca and Moriel Schottlender
- Design: Jess Klein
