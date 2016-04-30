angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.tCnicoEmInformTica', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tCnicoEmInformTica.html',
        controller: 'tCnicoEmInformTicaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.aEmpresa', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aEmpresa.html',
        controller: 'aEmpresaCtrl'
      }
    }
  })

  .state('menu.contatos', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contatos.html',
        controller: 'contatosCtrl'
      }
    }
  })

  .state('menu.plataformaIonic', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plataformaIonic.html',
        controller: 'plataformaIonicCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});