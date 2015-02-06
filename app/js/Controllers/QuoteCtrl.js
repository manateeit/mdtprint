"use strict";

MDTCRMCtrls.controller('QuoteCtrl', ['$scope','$routeParams','quoteDataSvc','$timeout','$http',
                        function ($scope, $routeParams, quoteDataSvc, $timeout, $http) {
    if ($routeParams.quoteId == null)
      return;
    else {
      $scope.customerId = $routeParams.customerId;
      $scope.quoteId = $routeParams.quoteId;
    }

                          console.log($scope.customerId);
                          console.log($scope.quoteId);


  quoteDataSvc.childlookup($scope.customerId,$scope.quoteId, function(result) {
      $timeout (function () {
        $scope.quote = result;
        console.log(result);
      });
    });

  $scope.doesExist = function(a) {

    if (a){ return true}
    else {return false}
      };

  $scope.downloadPDF = function(filename) {


    var docDefinition = {
      pageSize: 'A4',
      content: [
        {
          image: 'data:image/png;base64,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', fit: [100,100]
        },
        {text: 'CUSTOMER QUOTATION', fontSize: 18, bold: false, alignment: 'right', margin: [0,10,0,20], color: '#333'},
        {

          margin: [65,0,0,0],
          columns: [
            { //column Spacer
              width: 200,
              text: [
                { text: ' \n', style: 'tableCellBlank'},
              ]
            },
            { //column 1
              width: 100,
              text: [
                { text: 'Date : \n',style: 'tableHeader'},
                { text: '____________\n', style: 'tableCellBlank'},
                { text:  $scope.quote.date + '\n', style: 'tableCell'},
              ]
            },
            {//column 2
              width: 100,
              text: [
                 { text: 'Quote No. : \n ', style: 'tableHeader'},
                 { text: '______________________\n', style: 'tableCellBlank'},
                 { text:  $scope.quote.number + '\n', style: 'tableCell'}
              ]
            }
          ]

        },  // quote Date and quote number

        {

          margin: [90,20,0,0],
          columns: [
            { //column 1
              text: [
                { text: 'Customer Billing: \n ', style: 'tableHeader'},
                { text: '______________________\n', style: 'tableCellBlank'},
                { text:  $scope.quote.company.name + '\n', style: 'tableCell'},
                { text:  $scope.quote.company.field83251 + '\n', style: 'tableCell'},
                { text:  $scope.quote.company.field83253 + ', ',style: 'tableCell'},
                { text:  $scope.quote.company.field83254 + ', ', style: 'tableCell'},
                { text:  $scope.quote.company.field83255 + '\n', style: 'tableCell'},
                { text:  $scope.quote.contact.name + '\n ', style: 'tableCell'},
                { text:  "Phone: " + $scope.quote.contact.field71096 + '\n ', style: 'tableCell'},
                { text:  "Fax: " + $scope.quote.contact.field71136 + '\n ', style: 'tableCell'},
                { text:  "Email: " + $scope.quote.contact.field71139 + '\n ', style: 'tableCell'},
              ]
            },
            {//column 2
              text: [
                { text: 'Customer Shipping: \n ', style: 'tableHeader'},
                { text: '______________________\n', style: 'tableCellBlank'},
                { text:  $scope.quote.company.name + '\n', style: 'tableCell'},
                { text:  $scope.quote.location.field71145 + '\n', style: 'tableCell'},
                { text:  $scope.quote.location.field71147 + ', ',style: 'tableCell'},
                { text:  $scope.quote.location.field84480 + ', ', style: 'tableCell'},
                { text:  $scope.quote.location.field71153 + '\n', style: 'tableCell'},
              ]
            }
          ]

        }, // Customer Billing Address and Customer Shipping Address



      ],


      footer: [
        {text: 'Material Difference Technologies 1501 Sarasota Center Blvd, Sarasota, FL 34240', alignment: 'center',fontSize: 10,color: '#aaa'},
        {text: 'TEL:+1 888-818-1283 FAX: (248) 460-4224 EMAIL:guy@materialdifferencetechnologies.com', alignment: 'center',fontSize: 10,color: '#aaa'}

      ],
      styles:{
        tableHeader:{ fontSize: 11, bold: true, color: '#949494'},
        tableCell: { fontSize: 10, bold: true, color: '#333'},
        tableCellBlank: { fontSize: 10, bold: true, color: '#ddd'}
      }

    };

    pdfMake.createPdf(docDefinition).open(filename + '.pdf');

  };




}])
.service('quoteDataSvc', [ function() {
   return {
      childAdded: function childAdded(id,cb) {
        var fbUrl = 'https://mdtquotes.firebaseio.com/' + id;
        var companyRef = new Firebase(fbUrl);
        companyRef.on('child_added', function (snapshot) {
          cb.call(this, snapshot.val());
        });
      },
      childDelete: function childDelete(childDeleteId) {
        var fbUrl = 'https://mdtquotes.firebaseio.com/' + childDeleteId ;
        var companyRef = new Firebase(fbUrl);
        companyRef.remove();
      },
      childSave: function childSave(cspec) {
        var fbUrl = 'https://mdtquotes.firebaseio.com/' + cspec.customer.id + '/';

        var companyRef = new Firebase(fbUrl);


        var recordObj = {
          date: cspec.date,
          customer: cspec.customer,
          material: cspec.material,
          po: cspec.po,
          color: cspec.color,
          colorReading: cspec.colorReading,
          density: cspec.density,
          fillerContent: cspec.fillerContent,
          flexuralModulus: cspec.flexuralModulus,
          izodNotched: cspec.izodNotched,
          meltflow: cspec.meltflow,
          monthlyVolume: cspec.monthlyVolume,
          specID: cspec.specID,
          tensileStrength: cspec.tensileStrength,
          comments: cspec.comments,
          image: cspec.image

        };

        var objArry = Object.keys(recordObj);
        for(var i=0; i< objArry.length; ++i)
        {
          if (typeof recordObj[objArry[i]] === 'undefined') { recordObj[objArry[i]] = "" }
        }


        companyRef.child(cspec.specID).set(recordObj);
      },
      childlookup: function childlookup (customer,quote,cb) {
        var fbUrl = 'https://mdtquotes.firebaseio.com/' + customer + "/" + quote;
        console.log(fbUrl);
        var companyRef = new Firebase(fbUrl);
        companyRef.on('value', function (snapshot) {
          cb.call(this, snapshot.val());
        });
      },
      queryAll: function queryAll(id,cb) {
        var fbUrl = 'https://mdtquotes.firebaseio.com/';
        var companyRef = new Firebase(fbUrl);
        companyRef.on('child_added', function (snapshot) {
          cb.call(this, snapshot.val());
        });
      }
    };

  }]);
