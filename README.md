# ReadybidSolution

#Requirements 
Create an Angular web page containing horizontally and vertically centered container of 400px in width and 600px in height containing: 

- Header area that’s 100px in height with red background and some text
- 	center area containing:
	-	input for text with validation (required, max length 50 chars)
	- input for number with validation (required, min 0, max 10000, 2 decimal places max)
	- Scrollable container containing list of http calls (look below). It is important that list is ONLY content that will scroll (in Chrome, Firefox, Internet Explorer 10, 11, Edge)

- Footer area that’s 100px in height with blue background containing:
	- vertically centered text on the left side (15px away from container left edge)
	- vertically centered button (25px away from container right edge)
When button is clicked HTTP call should be initiated and intercepted with:
	- If number is 404 HTTP call should return error with status 404 and an error message in dialog-like window should be shown
	- If number is any other HTTP call should resolve and an success message in dialog-like window should be shown

- Interceptor should write to page (in list) timestamp of interception, text and number from inputs. This data MUST NOT be transferred back to controller through HTTP response, you HAVE to use some other channel of communication (direct call, service, messaging, some pattern – your choice)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
