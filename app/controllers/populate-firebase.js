define([
  'angular',
  'angularRoute',
  'firebase'

], function(angular, route, firebase) {

  angular
  .module('AminoApp.addProtein', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/addProtein', {
      templateUrl: 'partials/addProtein.html',
      controller: 'addProteinCtrl',
      controllerAs: 'proteinCtrl'
    });
  }])

  .controller("addProteinCtrl", ['$firebaseArray', '$firebaseObject', '$routeParams',
    function($firebaseArray, $firebaseObject, $routeParams) {
      this.aminoAcid = {};
      this.sequence = "";
      var ref = new Firebase("https://aminos-anonymous.firebaseio.com/protein");
      this.protein = $firebaseArray(ref);
      this.addProtein = function() {
        arrayOfSequence = this.sequence.split("-");
        console.log("array", arrayOfSequence);
        this.newProtein = "";
        console.log("name", this.newProtein);
        this.protein.$add({
          protein: this.newProtein,
          sequence: arrayOfSequence,

        });
      };
      this.gameProtein = function() {
        this.sequence = [];
        console.log("click");

        ref.once("value", function(snapshot) {
          var gameProtein = snapshot.val();
          for (var key in gameProtein) {
            var theOnlyProtein = gameProtein[key];
          }

        });
      };
    }
  ]);
});