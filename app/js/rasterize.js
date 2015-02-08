var page = require("webpage").create();
var system = require("system");

page.paperSize = {
    width: '6in',
    height: '4in',
    margin: {
        top: '40px',
        left: '15px',
        right: '15px',
        bottom: '10px'
    }
}

page.zoomFactor = 0.5;

page.viewportSize = {
  width: 900,
  height: 700
};
    
page.open(system.args[1], function (status) {
    window.setTimeout(function () {
        var size = page.evaluate(function () {
            return {width: width = 900, height : 700 };
        });

        console.log(page.content);

        page.paperSize = size;

        page.render(system.args[2]);
        phantom.exit();
    }, 3000);
});

page.onError = function(msg, trace) {
    console.log(msg);
}