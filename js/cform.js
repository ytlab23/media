var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){ 
	$("#ajax-contact-form").submit(function(){
		var str = $(this).serialize(); 
		$.ajax( { type: "POST", url: "contact.php", data: str, success: function(msg){ 
				if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
					{ result = '<div class="notification_ok">Your message has been sent. Thank you!<br> <a href="#" onclick="freset();return false;">send another mail</a></div>'; $("#fields").hide(); } 							
				else
					{ result = msg; } 
				$("#note").html(result); 
			} 
		}); 
		return false; 
	}); 
});
				
function freset(){ 	
	$("#note").html('');
	document.getElementById('ajax-contact-form').reset();
	$("#fields").show();
};

}
/*
     FILE ARCHIVED ON 13:29:15 Mar 26, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:00 Feb 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.066
  cdx.remote: 0.141
  esindex: 0.019
  LoadShardBlock: 268.544 (6)
  PetaboxLoader3.datanode: 151.737 (7)
  load_resource: 56.288
  PetaboxLoader3.resolve: 34.467
*/