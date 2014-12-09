(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  START */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        document.location="timer.html";
        return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_13", function(evt)
    {
        document.location="index.html";
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
