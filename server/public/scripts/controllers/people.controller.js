myApp.controller('PeopleController', ['$http', function($http) {
    var vm = this;
    vm.newPerson = {};
    getPeople();

    vm.addPerson = function(){
      console.log('add person', vm.newPerson);
      $http.post('/person', vm.newPerson).then(function(response){
        console.log('added person', response);
        getPeople();
      });
    }; //end of addPerson

    vm.deletePerson = function(id) {
      $http.delete('/person/'+ id).then(function(response){
        getPeople();
      });
    };

    function getPeople(){
      $http.get('/person').then(function(response){
        console.log(response.data);
        vm.people = response.data;
      });
    }// end of get People
    vm.updatePerson = function(id){
      console.log('update person with id: ', id);
      var data = {location: 'Idaho'}; // data needs to be sent in an object, can't be a string
      $http.put('/person/'+ id, data ).then(function(response){
      getPeople();
      });
    };

    vm.addPointsPerson = function(id, internetPts) {
      console.log('add 100 points to id:', id);
      var data = {addHun: internetPts + 100}; // data needs to be sent in an object, can't be a string
      $http.put('/person/addPoints/'+ id, data ).then(function(response){
      getPeople();
      });
    };




}]);
