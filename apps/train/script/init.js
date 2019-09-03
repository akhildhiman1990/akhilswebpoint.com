/**
 * @author Akhil
 */
(function() {
    // Load jQuery
    var script = document.createElement("script");
    script.src = 'script/jquery-1.10.2.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    var checkReady = function(callback){
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function(){checkReady(callback);}, 100);
        }
    };

    // Start loading script files
    checkReady(function($) {
        onLoadFiles();
    });
})();
function loadScript(source){
   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= source;
   head.appendChild(script);
}
function onLoadFiles(){
	loadScript("script/body_script.js");
}