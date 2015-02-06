
/**
 * Plugin mgdata Controller
 */
plugin.controller('mgdataCntl', ['$scope', '$window', '$parse', '$http', 'znData', '$routeParams', 'znModal','$templateCache', '$timeout', '$location', 'mgdataDataSvc',
    function ($scope, $window, $parse, $http, znData, $routeParams, znModal,$templateCache, $timeout, $location, mgdataDataSvc ) {


    var companyParams = { workspaceId:3482,formId: 7870,field71088: 'supplier', limit:1000};
    znData('FormRecords').get(companyParams, function (records) {$scope.companies = records;});


}])
.service('mgdatadataSvc', [ function() {
    var FIREBASEDB = "https://mdtwebapp.firebaseio.com/";
    return {
        childAdded: function childAdded(id,type,cb) {
            var fbUrl = FIREBASEDB + type + '/' + id;
            var companyRef = new Firebase(fbUrl);
            companyRef.on('child_added', function (snapshot) {
                cb.call(this, snapshot.val());
            });
        },
        childDelete: function childDelete(type,id) {
            var fbUrl = FIREBASEDB + type + '/' + id;
            var companyRef = new Firebase(fbUrl);
            companyRef.remove();
        },
        childSave: function childSave(type,recordObj) {
            var fbUrl = FIREBASEDB + type + '/';
            var companyRef = new Firebase(fbUrl);

            var objArry = Object.keys(recordObj);
            for(var i=0; i< objArry.length; ++i)
            {
                if (typeof recordObj[objArry[i]] === 'undefined') { recordObj[objArry[i]] = "" }
            }

            console.log(recordObj);
            companyRef.child(recordObj.id ).set(recordObj);
        }
    };

}])

customerObj = {
    id:   cs[i].id,
    name: cs[i].name,
    description: cs[i].field71087,
    industry: cs[i].field83256,
    tags: ' ',
    website: cs[i].field71091,
    billingAddress: cs[i].field83251,
    billingAddress2: cs[i].field83252,
    billingCity: cs[i].field83253,
    billingState: cs[i].field83254,
    billingZipcode: cs[i].field83255,
    billingCountry: cs[[i].field84905,
    billingPhone: cs[i].field84492,
    billingFax: cs[i].field84493,
    billingNonUSzip: cs[i].field122354
};
/**
 * Plugin Registration
 */
    .register('mgdata', {
        route: '/mgdata',
        controller: 'mgdataCntl',
        template: 'mgdata-main',
        title: 'mgdata Plugin',
        pageTitle: false,
        type: 'fullPage',
        topNav: true,
        order: 300,
        icon: 'icon-puzzle'
    });

field71086: "AMA Plastics"  NAME
field71087: null  description
field71088: "customer" typeof
field71091: null website
field71142: "0"
field71201: "0"
field71432: "0"
field77362: "0"
field83251: "1100 Citris St." billing address
field83252: null  billingAddress2
field83253: "Riverside" billingCitycity
field83254: "CA"  billingState
field83255: "92507" billingZipcode
field83256: null  industry
field83257: null
field84492: "(951) 734-5600" billingPhone
field84493: null
field84905: "US" billingCountry
field98879: "0"
field99103: "0"
field105650: null
field122354: null  nonuszip
name: "AMA Plastics"
id: 542025


    id:   '',
    name: '',
    description: '',
    industry: '',
    tags: '',
    website: '',
    billingAddress: '',
    billingAddress2: '',
    billingCity: '',
    billingState: '',
    billingZipcode: '',
    billingCountry: '',
    billingPhone: '',
    billingFax: '',


























