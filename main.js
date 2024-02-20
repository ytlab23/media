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

  include('js/html5.js');
  //----jquery-plagins----
  include('js/jquery-1.6.1.min.js');
  include('js/jquery.easing.1.3.js');
  include('js/jquery.animate-colors-min.js');
  //----transform----
  include('js/jquery.transform.js');
  //----SubMenu----
  include('js/superfish.js');
  //----ContentSwitcher----
  include('js/switcher.js');
  //----google map----
  include('js/googleMap.js');
  //----contact form----
  include('js/cform.js');
  //----jScrollPane-----
  include('js/jquery.mousewheel.js');
  include('js/mwheelIntent.js');
  include('js/jquery.jscrollpane.min.js');
  //----Lightbox--
  include('js/jquery.prettyPhoto.js');
  //----jplayer-sound--
  include('js/jquery.jplayer.min.js');
  //----All-Scripts----
  include('js/script.js');
  
//----Include-Function----
function include(url){ 
  document.write('<script type="text/javascript" src="'+ url +'" ></script>'); 
}

}
