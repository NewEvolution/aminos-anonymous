define([
  "angular",
  "$firebase",
], function(angular, firebase) {
  angular
  .module("AminoApp.getProtein", [])
  .factory("getProtein", function() {


  });

  this.aminoAcid = {};
  this.sequence = "";
  var theOnlyProtein = [];
  var ref = new Firebase("https://aminos-anonymous.firebaseio.com/protein");

  return {
    getProtein: function() {
      ref.once("value", function(snapshot) {
        var gameProtein = snapshot.val();
        for (var key in gameProtein) {
          theOnlyProtein = gameProtein[key];
          arrayofAAs = theOnlyProtein.sequence;
          console.log("firebase data", arrayofAAs);
        }
      });
    },
    setProtein: function(setProtein) {
      arrayofAAs = gameProtein;
    }       
  };
});




// function(angular, firebase) {
//   angular
//   .module("AminoApp.uid", [])
//   .factory("uid", function() {
//     var uid = null;
//     return {
//       getUid: function() {
//         return uid;
//       },
//       setUid: function(sentID) {
//         uid = sentID;
//       }
//     };
//   });
// });