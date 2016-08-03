/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        '', // 'dev',

    '@angular':                   'vendor/@angular',
    '@angular2-material':         'vendor/@angular2-material',
    'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api',
    'rxjs':                       'vendor/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  var materialPackageNames = [
    'core',
    'icon',
    'button',
    'card',
    'list'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  function packMaterial(pkgName) {
    packages['@angular2-material/'+pkgName] = {main: pkgName+'.js'};
  }

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  materialPackageNames.forEach(packMaterial);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
