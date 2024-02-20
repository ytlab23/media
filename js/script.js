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

function caption(img,poz){
	if(poz==1){
			$('#caption li').stop().animate({left:-$(document).width()},800, 'easeInExpo', function(){
				$('#caption li').css({display:'none'});																  
				$('#caption li').eq(img).css({display:'block',left:$(document).width()}).stop().animate({left:0},800, 'easeOutExpo');
			});
	}
	else if(poz==0){
			$('#caption li').stop().animate({left:$(document).width()},800, 'easeInExpo', function(){
				$('#caption li').css({display:'none'});																	 
				$('#caption li').eq(img).css({display:'block',left:-$(document).width()}).stop().animate({left:0},800, 'easeOutExpo');
			});
	}

}
function showSplash(){
	setTimeout(function () {
		
		$('.splash').css({visibility:'visible'}).stop().animate({opacity:1},800,'easeInOutExpo');
		$('.menu').stop().animate({marginTop:0},800,'easeInOutExpo');
		$('.menu_splash').stop().animate({marginTop:0},800,'easeInOutExpo');
		$('.px1').stop().animate({height:298, marginTop:0},800,'easeInOutExpo');
		$('.px2').stop().animate({height:278, marginTop:0},800,'easeInOutExpo');
		$('.bg2').stop().animate({opacity:1},800,'easeInOutExpo');

	}, 0);
	
};
function hideSplash(){ 
	
	$('.splash').stop().animate({opacity:0},800,'easeInOutExpo', function(){ $(this).css({visibility:'hidden'}); });
	$('.menu').stop().animate({marginTop:-100},800,'easeInOutExpo');
	$('.menu_splash').stop().animate({marginTop:150},800,'easeInOutExpo');
	$('.px1').stop().animate({height:548, marginTop:-100},800,'easeInOutExpo');
	$('.px2').stop().animate({height:528, marginTop:-100},800,'easeInOutExpo');
	$('.bg2').stop().animate({opacity:0.2},800,'easeInOutExpo');

   
};
function hideSplashQ(){	
	
	$('.splash').css({visibility:'hidden', opacity:0});
	$('.menu').css({marginTop:-100});
	$('.menu_splash').css({marginTop:150});
	$('.px1').css({height:548, marginTop:-100});
	$('.px2').css({height:528, marginTop:-100});
	$('.bg2').css({opacity:0.2});

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});
	
		
	/////// icons
	//$(".icons li").find("a").css({opacity:0.6});
	$(".icons li a").hover(function() {
		$(this).stop().animate({marginTop:-10 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({marginTop:0 }, 400, 'easeOutExpo' );		   
	});
	
	/////// sound
	$(".jp-mute, .jp-unmute").hover(function() {
		$(this).stop().animate({backgroundColor:"#ffffff"}, 400, 'easeOutExpo');
	},function(){
	    $(this).stop().animate({backgroundColor:"#000000"}, 400, 'easeOutExpo' );
	});
	
	
	
	////// submenu
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });	
	
	/////// submenu
	$(".submenu a").hover(function() {
		$(this).stop().animate({color:"#9ad1f6", backgroundColor:"#7b2632"}, 400, 'easeOutExpo');
	},function(){
	    $(this).stop().animate({color:"#c2ccdc", backgroundColor:"#244162"}, 400, 'easeOutExpo' );
	});
	
	/////// menu_splash
	$("#menu_splash a").find(".txt1").css({opacity:0.5});
	$("#menu_splash a").hover(function() {
		$(this).find(".txt1").stop().animate({opacity:1 }, 400, 'swing');	
		$(this).find(".over").stop().animate({marginTop:-15 }, 400, 'easeInOutBack');
	},function(){
	    $(this).find(".txt1").stop().animate({opacity:0.5 }, 400, 'swing');
		$(this).find(".over").stop().animate({marginTop:0 }, 400, 'easeOutBounce');
	});
	
	//////// prev - next
	$('.prev1, .next1').css({opacity:'0.5'});	
	$('.prev1, .next1').hover(function(){
		$(this).stop().animate({opacity:'1'});							 
	}, function(){
		$(this).stop().animate({opacity:'0.5'});							 
	});
	
	///////// video
	$('.video1 a').hover(function(){
		$(this).find("img").stop().animate({backgroundColor:"#80bad4"},400);
	}, function(){
		$(this).find("img").stop().animate({backgroundColor:"#ffffff"},400);
	});	
	
	///////// button1
	$('.button1').css({opacity:'0.6'});
	$('.button1').hover(function(){
		$(this).stop().animate({opacity:'1'},400);
	}, function(){
		$(this).stop().animate({opacity:'0.6'},400);
	});	
	
	///////// photo1
	$('.photo1').hover(function(){
		$(this).find("img").stop().animate({backgroundColor:"#80bad4"},400);
	}, function(){
		$(this).find("img").stop().animate({backgroundColor:"#ffffff"},400);
	});
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
	/// splash sliding
	$('#caption li').each(function(num){
		$(this).data({num:num});
	});
	$('#caption li').css({display:'none'});	
	$('#caption li').css({left:$(document).width()}).eq(0).css({display:'block',left:0});	
	
	var img=0;
	var num=$('#caption li').length-1;	
		
	$('.splash .prev1').click(function(){
		img=img-1;
		if (img<0){img=img+num+1};
		caption(img,0);		
        return false
	});
	$('.splash .next1').click(function(){
		img=img+1;
		if (img>num){img=img-num-1};
		caption(img,1);
        return false
	});					
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 10,
		verticalDragMinHeight: 100,
		verticalDragMaxHeight: 100
	});	
	
	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',left:-2000});
		   //$('.bg3').css({display:'none',opacity:0});
		   //$('.close').css({display:'none',opacity:0});
        },
        actFu:function(_){
			if(_.curr){
				_.curr.css({display:'block', left:-2000}).stop().animate({left:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({left:2000},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);			
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_HOME',
        hoverIn:function(li){ 
			//$('> a .over',li).stop().animate({top:0},400, 'easeOutCubic');
			$('.txt1',li).stop().animate({color:"#9ad1f6"},400, 'easeOutExpo');
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({color:"#c2ccdc"},400, 'easeOutExpo');
				//$('> a .over',li).stop().animate({top:55},400, 'easeOutCubic');
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});

	}, 100);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});

}
/*
     FILE ARCHIVED ON 13:29:16 Mar 26, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:00 Feb 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  cdx.remote: 0.093
  esindex: 0.01
  LoadShardBlock: 322.302 (6)
  PetaboxLoader3.resolve: 309.44 (2)
  PetaboxLoader3.datanode: 199.034 (7)
  load_resource: 288.033
*/