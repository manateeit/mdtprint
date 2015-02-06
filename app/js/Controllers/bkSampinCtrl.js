"use strict";

MDTCRMCtrls.controller('SampinCtrl', ['$scope','$routeParams','dataSvc','dataShare','$timeout','$http',
                            function ($scope, $routeParams, cspecDataSvc, cspecDataShare, $timeout, $http) {

   console.log($routeParams.sampinId);
   if ($routeParams.sampinId == null)
        console.log($routeParams.sampinId);
        return;
    else {
     $scope.customerId = $routeParams.customerId;
     $scope.sampinId = $routeParams.sampinId;
     }
        dataSvc.childlookup($scope.customerId,$scope.sampinId, function(result) {
          $timeout (function () {
             $scope.data = result;
          });
        });

    $scope.renderPDF = function() {

      var pdf = new jsPDF('p', 'pt', 'letter');

      var source = $('#render_me')[0];

      var specialElementHandlers = {
        '#bypassme': function (element, renderer) {
          return true
        }
      };

     var  margins = {
        top: 10,
        bottom: 10,
        left: 5,
        width: 1024
      };
      // all coords and widths are in jsPDF instance's declared units
      // 'inches' in this case

      pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
          'width': margins.width, // max width of content on PDF
          'elementHandlers': specialElementHandlers
        },

        function (dispose) {
          // dispose: object with X, Y of the last line add to the PDF
          //          this allow the insertion of new lines after html
          pdf.save('Test.pdf');
        }, margins);
    };

    $scope.downloadPDF = function(filename) {
        var productName = $scope.data.material.field83297 + ' ' + $scope.data.material.field83298 + ' ' + $scope.data.material.field83290;
        var sampleImage = 'data:' + $scope.data.image.type  + ';base64,' + $scope.data.image.base64
        var docDefinition = {
            pageSize: 'A4',
            content: [
                {image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAABQCAYAAACAlE6HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3N0I5MDFFNDUwOENFMjExODVFQkU4NjE0MThDNTMwOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjUyQTZBQzhDNTAxMUUyQjc2OUNDQTUzNjUwRjA1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjUyQTZBQjhDNTAxMUUyQjc2OUNDQTUzNjUwRjA1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3QjkwMUU0NTA4Q0UyMTE4NUVCRTg2MTQxOEM1MzA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3QjkwMUU0NTA4Q0UyMTE4NUVCRTg2MTQxOEM1MzA4Ii8+IDwvcmRmOkRlc2NyaXB0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',fit: [174,80], alignment: 'center'},

                {text: 'CUSTOMER SPECIFICATION', fontSize: 18, bold: false, alignment: 'center', margin: [0,10,0,20], color: '#333'},
                {

                        margin: [65,0,0,0],
                        columns: [
                            { //column 1
                                text: [

                                    { text: 'Product :  ', fontSize: 10, bold: true},
                                    { text: productName + '\n', fontSize: 9},
                                    { text: 'Customer : ',fontSize: 10, bold: true},
                                    { text: $scope.data.customer.name + '\n', fontSize: 9},
                                    { text: 'Date : ',fontSize: 10, bold: true},
                                    { text: $scope.data.date, fontSize: 9}
                                ]
                            },
                            {//column 2
                                text: [
                                    { text: 'PO :  ', fontSize: 10, bold: true},
                                    { text: $scope.data.material.name + '\n', fontSize: 10},
                                    { text: 'Part Number :  ', fontSize: 10, bold: true},
                                    { text: $scope.data.material.name + '\n', fontSize: 9},
                                    { text: 'Spec ID :  ', fontSize: 10, bold: true},
                                    { text: $scope.sampinId + '\n', fontSize: 9}
                                ]
                            }
                        ]

                },  // Product Customer Information

                {
                    margin: [0,25,0,0],
                    columns: [
                        { //column 1
                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: 'Initials\n', style: 'tableHeader'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [
                                { text: 'Parameters\n', style: 'tableHeader'},

                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [
                                { text: 'Spec\n', style: 'tableHeader'},


                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [
                                { text: 'Results\n', style: 'tableHeader',alignment: 'right'},

                                ]
                        }
                    ]
                }, // Header of Main Table
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [

                                { text: 'Melt Flow\n', style: 'tableCell'},
                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [

                                { text: 'D1238\n', style: 'tableCell'},
                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.meltflow + ' dg/min\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Melt Flow
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [

                                { text: 'Filler Content\n', style: 'tableCell'},
                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [

                                { text: 'D2584\n', style: 'tableCell'},
                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.fillerContent + ' %\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body Of Main Table - Filler Content
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [

                                { text: 'Density\n', style: 'tableCell'},
                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [

                                { text: 'D792\n', style: 'tableCell'},
                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text:  $scope.data.density +' g/cm^3\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Density
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [

                                { text: 'Tensile Strength\n', style: 'tableCell'},

                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [


                                { text: 'D638\n', style: 'tableCell'},

                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.tensileStrength + ' psi\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Tensile Strength
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [
                                { text: 'Flexural Modulus\n', style: 'tableCell'},
                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [

                                { text: 'D790\n', style: 'tableCell'},

                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.flexuralModulus + ' psi\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Flexural Modulus
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [
                                { text: 'Color Reading\n', style: 'tableCell'},
                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [
                                { text: 'J1585\n', style: 'tableCell'},
                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.colorReading + ' \n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Color Reading
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [
                                { text: 'Color\n', style: 'tableCell'},

                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [

                                { text: '\n', style: 'tableCell'},

                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.color + '\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Color
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [
                                { text: 'Izod-Notched\n', style: 'tableCell'},
                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [
                                { text: 'D1238\n', style: 'tableCell'},
                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.izodNotched + ' ft-lb/in\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Izod-Notched
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,5,0,0],
                    columns: [
                        { //column 1

                            width: 100,
                            alignment: 'left',
                            text: [
                                { text: '________\n', style: 'tableCellBlank'},
                            ]
                        },
                        {//column 2
                            width: 200,
                            alignment: 'left',
                            text: [
                                { text: 'Monthly Volume\n',style: 'tableCell'}
                            ]
                        },
                        {//column 3
                            width: 50,
                            alignment: 'center',
                            text: [
                                { text: '\n', style: 'tableCell'},
                            ]
                        },
                        {//column 4
                            width: 150,
                            alignment: 'right',
                            text: [

                                { text: $scope.data.monthlyVolume + '\n', style: 'tableCell'},
                            ]
                        }
                    ]


                }, // Body of Main Table - Monthly Volume
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,25,0,0],
                    columns: [
                        { //column 1

                            width: 350,
                            alignment: 'left',
                            text: [
                                { text: 'Comments\n', style: 'tableHeader'},
                            ]
                        },

                        {//column 4
                            width: 100,
                            alignment: 'right',
                            text: [

                                { text: 'Sample Image\n', style: 'tableHeader'},
                            ]
                        }
                    ]


                }, // Comments and Sample Image Header
                {text: '_______________________________________________________________________________________________________', alignment: 'center', color: '#ddd'},
                {
                    margin: [0,55,0,0],
                    columns: [
                        { //column 1

                            width: 350,
                            alignment: 'left',
                            text: [
                                { text: $scope.data.comments + '\n', style: 'tableCell'},
                            ]
                        },

                        {//column 4
                            width:350,
                            // you can also fit the image inside a rectangle
                            image: sampleImage,
                            fit: [100, 100]
                        }
                    ]


                }, // Comments and Sample Image Data
            ],


            footer: [
                {text: 'Material Difference Technologies 1501 Sarasota Center Blvd, Sarasota, FL 34240', alignment: 'center',fontSize: 10,color: '#aaa'},
                               {text: 'TEL:+1 888-818-1283 FAX: (248) 460-4224 EMAIL:guy@materialdifferencetechnologies.com', alignment: 'center',fontSize: 10,color: '#aaa'}

            ],

            styles:{
                tableHeader:{ fontSize: 11, bold: true},
                tableCell: { fontSize: 10, bold: true, color: '#333'},
                tableCellBlank: { fontSize: 10, bold: true, color: '#ddd'}
            }

        };


        pdfMake.createPdf(docDefinition).open(filename + '.pdf');


    };



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

                console.log(recordObj);
                companyRef.child(samplein.id).set(recordObj);
            },
            setId: function setId(currentId,dbtype){
                var fbUrl = FIREBASEDB + 'counters/';
                console.log("raise counter");
                console.log(currentId);
                console.log(dbtype);
                var companyRef = new Firebase(fbUrl);
                currentId++;

                /*
                 switch(dbtype) {
                 case 'customers':
                 countersType = {customers:currentId};
                 break;
                 case 'suppliers':
                 countersType = {suppliers:currentId};
                 break;
                 case 'locations':
                 countersType = {locations:currentId};
                 break;
                 case 'contacts':
                 countersType = {contacts:currentId};
                 break;
                 case 'materials':
                 countersType = {materials:currentId};
                 break;
                 case 'samplesin':

                 break;
                 } */

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
            },
        };

    }]);
