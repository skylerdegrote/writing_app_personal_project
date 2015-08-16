/**
 * Created by Skyler DeGrote on 8/15/15.
 */

//CLIENT SIDE APP.JS

//create variables here



//create functions here



//event listeners and ajax calls to in document ready
$(document).ready(function(){
   console.log("ready!");




   $(".noteCardTitleButton").on("click", function(){
      $("noteCardTitle").append(this).text();
   });//end click event
});//end doc 