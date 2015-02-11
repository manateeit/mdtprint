var page = require("webpage").create();
var system = require("system");

page.paperSize = {
    width: '4in',
    height: '6in',
    margin: {
        top: '10px',
        left: '15px',
        right: '15px',
        bottom: '10px'
    }
}

page.zoomFactor = 0.6;

page.viewportSize = {
  width: 650,
  height: 600
};

page.open(system.args[1], function (status) {
    window.setTimeout(function () {
        var size = page.evaluate(function () {
              return {width: width = 576, height : 384 };
        });

        page.render(system.args[2]);
        phantom.exit();
    }, 3000);
});

page.onError = function(msg, trace) {
    console.log(msg);
}
