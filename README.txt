Proverbial interacive decision support too
## Overview

This application is a simple refactoring of the phonecatapp angular development application as a boilerplate for further development




## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/karma.conf.js        --> config file for running unit tests with Karma
    config/karma-e2e.conf.js    --> config file for running e2e tests with Karma

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivesSpec.js       --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/#!guide.di
[directive]: http://docs.angularjs.org/#!angular.directive
[$filter]: http://docs.angularjs.org/#!angular.Array.filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ng:repeat]: http://docs.angularjs.org/#!angular.widget.@ng:repeat
[ng:view]: http://docs.angularjs.org/#!angular.widget.ng:view
[node-download]: http://nodejs.org/download/
[node-generic]: https://github.com/joyent/node/wiki/Installation
[java]: http://www.java.com
[$resource]: http://docs.angularjs.org/#!angular.service.$resource
[$route]: http://docs.angularjs.org/#!angular.service.$route
[service]: http://docs.angularjs.org/#!angular.service
[$xhr]: http://docs.angularjs.org/#!angular.service.$xhr
