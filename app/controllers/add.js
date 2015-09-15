define([
  'angular',
  'firebase',
  'angularRoute'
], function(angular, route, firebase) {
  angular
  .module('AminoApp.add', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'addCtrl',
      controllerAs: 'add'
    });
  }])
  .controller("addCtrl", ['$firebaseArray',
    function($firebaseArray) {
      var proteins = new Firebase("https://aminos-anonymous.firebaseio.com/protein/");
      var aminos = new Firebase("https://aminos-anonymous.firebaseio.com/aminos/");
      var proteinArr = $firebaseArray(proteins);
      var aminoArr = $firebaseArray(aminos);
      
      this.addProtein = function() {
        var theName = this.proteinName;
        var theAminos = this.aminoString.split("-");
        var newProtein = {name: theName, sequence: theAminos};
        proteinArr.$add(newProtein);
      };

      this.addAmino = function() {
        var theName = this.aminoName;
        var theCodons = this.codonString.split(" ");
        var newAmino = {name: theName, codons: theCodons};
        aminoArr.$add(newAmino);
      };

    }
  ]);
});