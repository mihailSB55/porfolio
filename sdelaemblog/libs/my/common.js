$(document).ready(function() {

  //$('.sb-wrap').addClass('sb-left-sidebar_active');
  $('.sb-header__menu-btn').on('click', function(){
    $('.sb-wrap').toggleClass('sb-left-sidebar_active');
    $('.sb-header__menu-btn').toggleClass('sb-header__menu-btn_active');
  });

  // $(".sb-header__menu-btn").click(function() {
  //   $('.sb-wrap').toggleClass('sb-left-sidebar_active');
  //   $('.sb-header__menu-btn').toggleClass('sb-header__menu-btn_active');
  //   });

//     new Mmenu( "#sidebar", {
//       extensions 	: [ 
//         "position-front",
//         ],
//   });

// new Mmenu( "#menu", {
//    "offCanvas":false,
//   "autoHeight":true,
//   sidebar:{collapsed:{use:1024},expanded:{use:1024,"offCanvas":true},
//   "(max-width: 1024px)": ["fullscreen"]
// },
//    });

$(function() {
//===================================================				
  // e=new Mmenu("#menu", {
  //   //extensions: [ "theme-dark" ],
  //   navbar: {title: "<div class='sb-site-name__title'><span class='sb-site-name__title_red'>Sdelaem</span>Blog</div>"},
  //   autoHeight:true,
  //   //offCanvas:{page:{selector:"#page"}},
  //   sidebar: {
  //     collapsed: {
  //       use:1024,
  //       hideNavbar:!0,
  //       hideDivider:!0,
  //       blockMenu:true,
  //       "offCanvas":false,
  //     },
  //     expanded: {
  //       use:1024,
  //       "offCanvas":false,
  //       // initial:"remember"
  //     },
  //   },
  //  });

  //  t=$(".sb-header").children(".sb-header__menu-btn");
  //  e.bind("close:finish",function(){
  //    setTimeout(function(){
  //      t.attr("href","#menu")
  //     },100)
  //   }),
  //     e.bind("open:finish",function(){
  //       setTimeout(function(){t.attr("href","#mm-0")},100)
  //     })
//=================================================
  // $(".mh-head.Sticky").mhead({
  //   scroll: {
  //     hide: 200
  //   }
  // });

  // $('body').on( 'click',
  //   'a[href^="#/"]',
  //   function() {
  //     alert( "Thank you for clicking, but that's a demo link." );
  //     return false;
  //   }
  // );
});

});


// $(function(){var e,t,n=$(window);$("body"),$("body, html");String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},setTimeout(function(){document.body.classList.add("docready")},250),e=$(".licenses").children(),t=[".title",".price",".usp",".comment"],n.on("resize.eqh",function(){if(e.find(t.join(", ")).css("height",""),1<Math.floor(e.parent().width()/e.first().width()))for(var n=0;n<t.length;n++){var i=0;e.each(function(){i=Math.max(i,$(this).find(t[n]).height())}).find(t[n]).height(i)}}).trigger("resize.eqh"),function(){var e=[],t="";if($(".submenutext").each(function(n){var i="h"+n;$(this).parent().before('<a id="'+i+'" />'),e.push("#"+i),t+='<li><a href="#'+i+'">'+$(this).text().capitalize()+"</a></li>"}),t.length){e=e.reverse();var i=$("h1").first().addClass("has-submenu"),a=$('<div class="submenu hidden visible-sm"><div><ul>'+t+"</ul></div></div>").insertAfter(i),r=-1,o=a.find("li");n.on("scroll.submenu",function(t){for(var i=n.scrollTop(),a=0;a<e.length;a++)if($(e[a]).offset().top<i+160){r!==a&&(r=a,o.removeClass("selected").find('[href="'+e[a]+'"]').parent().addClass("selected"));break}}),n.trigger("scroll.submenu")}}(),
// function(){
//   if(Mmenu){var e=new Mmenu("#menu",{extensions:{all:["theme-white","pagedim-black"],"(max-width: 767px)":["fx-menu-slide"]},counters:!0,iconPanels:{add:!0,hideDivider:!0,hideNavbar:!0,visible:"first"},navbar:{title:"mmenu"},navbars:[{position:"top",content:["searchfield"]},{position:"top"}],searchfield:{panel:{add:!0,splash:'<p>What are you looking for?<br />Search the menu or try some of these popular pages:</p><a href="/examples.html">Advanced examples</a><br /><a href="/tutorials/off-canvas">Off-canvas tutorial</a><br /><a href="/download.html">Download the plugin</a><br /><a href="/wordpress-plugin">mmenu WordPress plugin</a><br /><br /><small>Documentation:</small><br .><a href="/docs/core/options.html">Options</a><br /><a href="/docs/extensions">Extensions</a><br /><a href="/docs/addons">Add-ons</a><br /><a href="/docs/core/api.html">API</a>'}},setSelected:{hover:!0,parent:!0},sidebar:{collapsed:{use:768,hideNavbar:!0,hideDivider:!0},expanded:{use:1440,initial:"remember"}}},{offCanvas:{page:{selector:"#page"}},searchfield:{clear:!0}}).API,t=$("#hamburger").children(".mburger");e.bind("close:finish",function(){setTimeout(function(){t.attr("href","#menu")},100)}),e.bind("open:finish",function(){setTimeout(function(){t.attr("href","#page")},100)})}
// }(),$("a.rotate").on("click",function(e){e.preventDefault(),$(this).parent().toggleClass("portrait")}),setTimeout(function(){$("#emaillink").attr("href","mailto:info@mmenujs.com")},2e3),function(){var e=$(".phone, .tablet").not(".no-auto-open");if(e.length){var t={};e.each(function(){var e=$(this).offset().top-150;e<0&&(e=0),t[e]||(t[e]=$()),t[e]=t[e].add(this)}),n.on("scroll.phones",function(){var e=n.scrollTop();for(var i in t)e>i&&(t[i].each(function(e){var t=$(this).find("iframe"),n=0;if(t.length){t=t[0].contentWindow;var i=setInterval(function(){if(t.$){var e=t.$("#menu")[0].mmApi;e&&(e.open&&e.open(),clearInterval(i))}++n>50&&clearInterval(i)},250+250*e)}}),delete t[i]);for(var i in t)return;$(this).off("scroll.phones")}),setTimeout(function(){n.trigger("scroll.phones")},2500)}}()});