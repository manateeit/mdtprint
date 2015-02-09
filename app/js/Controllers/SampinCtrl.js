"use strict";

MDTCRMCtrls.controller('SampinCtrl', ['$scope','$routeParams','dataSvc','dataShare','$timeout','$http',
                            function ($scope, $routeParams, dataSvc, dataShare, $timeout, $http) {
   if ($routeParams.sampinId == null) {
       console.log($routeParams.sampinId);
       return;
   }
    else {
     $scope.customerId = $routeParams.customerId;
     $scope.sampinId = $routeParams.sampinId;
     }
        dataSvc.childlookup($scope.customerId,$scope.sampinId, function(result) {
          $timeout (function () {
             $scope.data = result;
             $scope.$watch('data', function () {
                var page = document.documentElement.outerHTML.replace(/<script src="bower_components\/angular\/angular.js"><\/script>/g, '');
                $.post("http://mdtprint.mediathread.co/cachestaticpage.php", { page: page, url: window.location.href } );
                $('button.dontprint').removeAttr('disabled');
             });
          });
        });

    }])
  .service('dataShare', [ function () {
    this.companyIn = '';

  }])
  .service('dataSvc', ['dataShare', function(dataShare) {
        var FIREBASEDB = "https://mdtwebapp.firebaseio.com/";
        return {
            childAdded: function childAdded(id,cb) {
                var fbUrl = 'https://mdtwebapp.firebaseio.com/samplesin/' + id;
                var companyRef = new Firebase(fbUrl);
                companyRef.on('child_added', function (snapshot) {
                    cb.call(this, snapshot.val());
                });
            },
            childDelete: function childDelete(childDeleteId) {
                var fbUrl = 'https://mdtwebapp.firebaseio.com/samplesin/' + childDeleteId ;
                var companyRef = new Firebase(fbUrl);
                companyRef.remove();
            },
            childSave: function childSave(samplein) {
                var fbUrl = 'https://mdtwebapp.firebaseio.com/samplesin/' + samplein.supplier.id + '/';
                var companyRef = new Firebase(fbUrl);
                var recordObj = {
                    date : samplein.date,
                    material: samplein.material,
                    supplier: samplein.supplier,
                    id: samplein.id,
                    description: samplein.description,
                    supplierPartNumber: samplein.supplierPartNumber,
                    pricing: samplein.pricing,
                    dateReceived: samplein.dateReceived,
                    amountReceived: samplein.amountReceived,
                    comments: samplein.comments,
                    monthlyVolume: samplein.monthlyVolume,
                    color: samplein.color,
                    fob: samplein.fob,
                    colorChipImage: samplein.colorChipImage,
                    provided: samplein.provided,
                    tested: samplein.tested
                };
                var objArry = Object.keys(recordObj);
                for(var i=0; i< objArry.length; ++i)
                {
                    if (typeof recordObj[objArry[i]] === 'undefined') { recordObj[objArry[i]] = "" }
                }
                companyRef.child(samplein.id).set(recordObj);
            },
            setId: function setId(currentId,dbtype){
                var fbUrl = FIREBASEDB + 'counters/';
                console.log("raise counter");
                console.log(currentId);
                console.log(dbtype);
                var companyRef = new Firebase(fbUrl);
                currentId++;
                var countersType = {samplesin: currentId};
                companyRef.update(countersType);
            },
            getId: function getId(cb,db){
                var fbUrl = FIREBASEDB + 'counters/' + db;

                var companyRef = new Firebase(fbUrl);
                companyRef.once('value', function (snapshot) {
                    cb.call(this, snapshot.val());
                });
            },
            childlookup: function childlookup (id,recordid,cb) {
                var fbUrl = 'https://mdtwebapp.firebaseio.com/samplesin/' + id + "/" + recordid;
                var companyRef = new Firebase(fbUrl);
                companyRef.on('value', function (snapshot) {
                    cb.call(this, snapshot.val());
                });
            },
            queryAll: function queryAll(id,cb) {
                var fbUrl = 'https://mdtwebapp.firebaseio.com/samplesin/';
                var companyRef = new Firebase(fbUrl);
                companyRef.on('child_added', function (snapshot) {
                    cb.call(this, snapshot.val());
                });
            }
        };

    }]);
