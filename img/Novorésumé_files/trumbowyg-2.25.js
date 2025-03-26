/*!@license
The MIT License (MIT)
 Trumbowyg v2.19.1 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */
jQuery.trumbowyg={langs:{en:{viewHTML:"View HTML",undo:"Undo",redo:"Redo",formatting:"Formatting",p:"Paragraph",blockquote:"Quote",code:"Code",header:"Header",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",strong:"Strong",em:"Emphasis",del:"Deleted",superscript:"Superscript",subscript:"Subscript",unorderedList:"Unordered list",orderedList:"Ordered list",insertImage:"Insert Image",link:"Link",createLink:"Insert link",unlink:"Remove link",justifyLeft:"Align Left",justifyCenter:"Align Center",justifyRight:"Align Right",justifyFull:"Align Justify",horizontalRule:"Insert horizontal rule",removeformat:"Remove format",fullscreen:"Fullscreen",close:"Close",submit:"Confirm",reset:"Cancel",required:"Required",description:"Description",title:"Title",text:"Text",target:"Target",width:"Width"}},plugins:{},svgPath:null,hideButtonTexts:null},Object.defineProperty(jQuery.trumbowyg,"defaultOptions",{value:{lang:"en",fixedBtnPane:!1,fixedFullWidth:!1,autogrow:!1,autogrowOnEnter:!1,imageWidthModalEdit:!1,prefix:"trumbowyg-",semantic:!0,semanticKeepAttributes:!1,resetCss:!1,removeformatPasted:!1,tabToIndent:!1,tagsToRemove:[],tagsToKeep:["hr","img","embed","iframe","input"],btns:[["viewHTML"],["undo","redo"],["formatting"],["strong","em","del"],["superscript","subscript"],["link"],["insertImage"],["justifyLeft","justifyCenter","justifyRight","justifyFull"],["unorderedList","orderedList"],["horizontalRule"],["removeformat"],["fullscreen"]],btnsDef:{},changeActiveDropdownIcon:!1,inlineElementsSelector:"a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",pasteHandlers:[],plugins:{},urlProtocol:!1,minimalLinks:!1},writable:!1,enumerable:!0,configurable:!1}),function(a,b,c,d){"use strict";var e="tbwconfirm",f="tbwcancel";d.fn.trumbowyg=function(a,b){var c="trumbowyg";if(a===Object(a)||!a)return this.each(function(){d(this).data(c)||d(this).data(c,new g(this,a))});if(1===this.length)try{var e=d(this).data(c);switch(a){case"execCmd":return e.execCmd(b.cmd,b.param,b.forceCss,b.skipTrumbowyg);case"openModal":return e.openModal(b.title,b.content);case"closeModal":return e.closeModal();case"openModalInsert":return e.openModalInsert(b.title,b.fields,b.callback);case"saveRange":return e.saveRange();case"getRange":return e.range;case"getRangeText":return e.getRangeText();case"restoreRange":return e.restoreRange();case"enable":return e.setDisabled(!1);case"disable":return e.setDisabled(!0);case"toggle":return e.toggle();case"destroy":return e.destroy();case"empty":return e.empty();case"html":return e.html(b)}}catch(a){}return!1};var g=function(e,f){var g=this,h="trumbowyg-icons",i=d.trumbowyg;g.doc=e.ownerDocument||c,g.$ta=d(e),g.$c=d(e),f=f||{},null!=f.lang||null!=i.langs[f.lang]?g.lang=d.extend(!0,{},i.langs.en,i.langs[f.lang]):g.lang=i.langs.en,g.hideButtonTexts=null!=i.hideButtonTexts?i.hideButtonTexts:f.hideButtonTexts;var j=null!=i.svgPath?i.svgPath:f.svgPath;if(g.hasSvg=!1!==j,g.svgPath=g.doc.querySelector("base")?b.location.href.split("#")[0]:"",0===d("#"+h,g.doc).length&&!1!==j){if(null==j){for(var k=c.getElementsByTagName("script"),l=0;l<k.length;l+=1){var m=k[l].src,n=m.match("trumbowyg(.min)?.js");null!=n&&(j=m.substring(0,m.indexOf(n[0]))+"ui/icons.svg")}null==j&&console.warn("You must define svgPath: https://goo.gl/CfTY9U")}var o=g.doc.createElement("div");o.id=h,g.doc.body.insertBefore(o,g.doc.body.childNodes[0]),d.ajax({async:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"xml",crossDomain:!0,url:j,data:null,beforeSend:null,complete:null,success:function(a){o.innerHTML=(new XMLSerializer).serializeToString(a.documentElement)}})}var p=g.lang.header,q=function(){return(b.chrome||b.Intl&&Intl.v8BreakIterator)&&"CSS"in b};g.btnsDef={viewHTML:{fn:"toggle",class:"trumbowyg-not-disable"},undo:{isSupported:q,key:"Z"},redo:{isSupported:q,key:"Y"},p:{fn:"formatBlock"},blockquote:{fn:"formatBlock"},h1:{fn:"formatBlock",title:p+" 1"},h2:{fn:"formatBlock",title:p+" 2"},h3:{fn:"formatBlock",title:p+" 3"},h4:{fn:"formatBlock",title:p+" 4"},h5:{fn:"formatBlock",title:p+" 5"},h6:{fn:"formatBlock",title:p+" 6"},subscript:{tag:"sub"},superscript:{tag:"sup"},bold:{key:"B",tag:"b"},italic:{key:"I",tag:"i"},underline:{tag:"u"},strikethrough:{tag:"strike"},strong:{fn:"bold",key:"B"},em:{fn:"italic",key:"I"},del:{fn:"strikethrough"},createLink:{key:"K",tag:"a"},unlink:{},insertImage:{},justifyLeft:{tag:"left",forceCss:!0},justifyCenter:{tag:"center",forceCss:!0},justifyRight:{tag:"right",forceCss:!0},justifyFull:{tag:"justify",forceCss:!0},unorderedList:{fn:"insertUnorderedList",tag:"ul"},orderedList:{fn:"insertOrderedList",tag:"ol"},horizontalRule:{fn:"insertHorizontalRule"},removeformat:{},fullscreen:{class:"trumbowyg-not-disable"},close:{fn:"destroy",class:"trumbowyg-not-disable"},formatting:{dropdown:["p","blockquote","h1","h2","h3","h4"],ico:"p"},link:{dropdown:["createLink","unlink"]}},g.o=d.extend(!0,{},i.defaultOptions,f),g.o.hasOwnProperty("imgDblClickHandler")||(g.o.imgDblClickHandler=g.getDefaultImgDblClickHandler()),g.urlPrefix=g.setupUrlPrefix(),g.disabled=g.o.disabled||"TEXTAREA"===e.nodeName&&e.disabled,f.btns?g.o.btns=f.btns:g.o.semantic||(g.o.btns[3]=["bold","italic","underline","strikethrough"]),d.each(g.o.btnsDef,function(a,b){g.addBtnDef(a,b)}),g.eventNamespace="trumbowyg-event",g.keys=[],g.tagToButton={},g.tagHandlers=[],g.pasteHandlers=[].concat(g.o.pasteHandlers),g.isIE=-1!==a.userAgent.indexOf("MSIE")||-1!==a.appVersion.indexOf("Trident/"),g.isMac=-1!==a.platform.toUpperCase().indexOf("MAC"),g.init()};g.prototype={DEFAULT_SEMANTIC_MAP:{b:"strong",i:"em",s:"del",strike:"del",div:"p"},init:function(){var a=this;a.height=a.$ta.height(),a.initPlugins();try{a.doc.execCommand("enableObjectResizing",!1,!1),a.doc.execCommand("defaultParagraphSeparator",!1,"p")}catch(a){}a.buildEditor(),a.buildBtnPane(),a.fixedBtnPaneEvents(),a.buildOverlay(),setTimeout(function(){a.disabled&&a.setDisabled(!0),a.$c.trigger("tbwinit")})},addBtnDef:function(a,b){this.btnsDef[a]=d.extend(b,this.btnsDef[a]||{})},setupUrlPrefix:function(){var a=this.o.urlProtocol;if(a)return"string"!=typeof a?"https://":a.replace("://","")+"://"},buildEditor:function(){var a=this,c=a.o.prefix,e="";a.$box=d("<div/>",{class:c+"box "+c+"editor-visible "+c+a.o.lang+" trumbowyg"}),a.isTextarea=a.$ta.is("textarea"),a.isTextarea?(e=a.$ta.val(),a.$ed=d("<div/>"),a.$box.insertAfter(a.$ta).append(a.$ed,a.$ta)):(a.$ed=a.$ta,e=a.$ed.html(),a.$ta=d("<textarea/>",{name:a.$ta.attr("id"),height:a.height}).val(e),a.$box.insertAfter(a.$ed).append(a.$ta,a.$ed),a.syncCode()),a.$ta.addClass(c+"textarea").attr("tabindex",-1),a.$ed.addClass(c+"editor").attr({contenteditable:!0,dir:a.lang._dir||"ltr"}).html(e),a.o.tabindex&&a.$ed.attr("tabindex",a.o.tabindex),a.$c.is("[placeholder]")&&a.$ed.attr("placeholder",a.$c.attr("placeholder")),a.$c.is("[spellcheck]")&&a.$ed.attr("spellcheck",a.$c.attr("spellcheck")),a.o.resetCss&&a.$ed.addClass(c+"reset-css"),a.o.autogrow||a.$ta.add(a.$ed).css({height:a.height}),a.semanticCode(),a.o.autogrowOnEnter&&a.$ed.addClass(c+"autogrow-on-enter");var f,g=!1,h=!1;a.$ed.on("dblclick","img",a.o.imgDblClickHandler).on("keydown",function(b){if(!b.ctrlKey&&!b.metaKey||b.altKey){if(a.o.tabToIndent&&"Tab"===b.key)try{return b.shiftKey?a.execCmd("outdent",!0,null):a.execCmd("indent",!0,null),!1}catch(a){}}else{g=!0;var c=a.keys[String.fromCharCode(b.which).toUpperCase()];try{return a.execCmd(c.fn,c.param),!1}catch(a){}}}).on("compositionstart compositionupdate",function(){h=!0}).on("keyup compositionend",function(b){if("compositionend"===b.type)h=!1;else if(h)return;var c=b.which;if(!(c>=37&&c<=40)){if(!b.ctrlKey&&!b.metaKey||89!==c&&90!==c)if(g||17===c)void 0===b.which&&a.semanticCode(!1,!1,!0);else{var d=!a.isIE||"compositionend"===b.type;a.semanticCode(!1,d&&13===c),a.$c.trigger("tbwchange")}else a.semanticCode(!1,!0),a.$c.trigger("tbwchange");setTimeout(function(){g=!1},50)}}).on("mouseup keydown keyup",function(b){(!b.ctrlKey&&!b.metaKey||b.altKey)&&setTimeout(function(){g=!1},50),clearTimeout(f),f=setTimeout(function(){a.updateButtonPaneStatus()},50)}).on("focus blur",function(b){if(a.$c.trigger("tbw"+b.type),"blur"===b.type&&a.clearButtonPaneStatus(),a.o.autogrowOnEnter){if(a.autogrowOnEnterDontClose)return;"focus"===b.type?(a.autogrowOnEnterWasFocused=!0,a.autogrowEditorOnEnter()):a.o.autogrow||(a.$ed.css({height:a.$ed.css("min-height")}),a.$c.trigger("tbwresize"))}}).on("cut drop",function(){setTimeout(function(){a.semanticCode(!1,!0),a.$c.trigger("tbwchange")},0)}).on("paste",function(c){if(a.o.removeformatPasted){c.preventDefault(),b.getSelection&&b.getSelection().deleteFromDocument&&b.getSelection().deleteFromDocument();try{var e=b.clipboardData.getData("Text");try{a.doc.selection.createRange().pasteHTML(e)}catch(b){a.doc.getSelection().getRangeAt(0).insertNode(a.doc.createTextNode(e))}a.$c.trigger("tbwchange",c)}catch(b){a.execCmd("insertText",(c.originalEvent||c).clipboardData.getData("text/plain"))}}d.each(a.pasteHandlers,function(a,b){b(c)}),setTimeout(function(){a.semanticCode(!1,!0),a.$c.trigger("tbwpaste",c),a.$c.trigger("tbwchange")},0)}),a.$ta.on("keyup",function(){a.$c.trigger("tbwchange")}).on("paste",function(){setTimeout(function(){a.$c.trigger("tbwchange")},0)}),d(a.doc.body).on("keydown",function(b){if(27===b.which&&d("."+c+"modal-box").length>=1)return a.closeModal(),!1})},autogrowEditorOnEnter:function(){var a=this;a.$ed.removeClass("autogrow-on-enter");var b=a.$ed[0].clientHeight;a.$ed.height("auto");var c=a.$ed[0].scrollHeight;a.$ed.addClass("autogrow-on-enter"),b!==c&&(a.$ed.height(b),setTimeout(function(){a.$ed.css({height:c}),a.$c.trigger("tbwresize")},0))},buildBtnPane:function(){var a=this,b=a.o.prefix,c=a.$btnPane=d("<div/>",{class:b+"button-pane"});d.each(a.o.btns,function(e,f){d.isArray(f)||(f=[f]);var g=d("<div/>",{class:b+"button-group "+(f.indexOf("fullscreen")>=0?b+"right":"")});d.each(f,function(b,c){try{a.isSupportedBtn(c)&&g.append(a.buildBtn(c))}catch(a){}}),g.html().trim().length>0&&c.append(g)}),a.$box.prepend(c)},buildBtn:function(a){var b=this,c=b.o.prefix,e=b.btnsDef[a],f=e.dropdown,g=null==e.hasIcon||e.hasIcon,h=b.lang[a]||a,i=d("<button/>",{type:"button",class:c+a+"-button "+(e.class||"")+(g?"":" "+c+"textual-button"),html:b.hasSvg&&g?'<svg><use xlink:href="'+b.svgPath+"#"+c+(e.ico||a).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>':b.hideButtonTexts?"":e.text||e.title||b.lang[a]||a,title:(e.title||e.text||h)+(e.key?" ("+(b.isMac?"Cmd":"Ctrl")+" + "+e.key+")":""),tabindex:-1,mousedown:function(){return f&&!d("."+a+"-"+c+"dropdown",b.$box).is(":hidden")||d("body",b.doc).trigger("mousedown"),!((b.$btnPane.hasClass(c+"disable")||b.$box.hasClass(c+"disabled"))&&!d(this).hasClass(c+"active")&&!d(this).hasClass(c+"not-disable")||(b.execCmd(!!f&&"dropdown"||e.fn||a,e.param||a,e.forceCss),1))}});if(f){i.addClass(c+"open-dropdown");var j=c+"dropdown",k={class:j+"-"+a+" "+j+" "+c+"fixed-top "+(e.dropdownClass||"")};k["data-"+j]=a;var l=d("<div/>",k);d.each(f,function(a,c){b.btnsDef[c]&&b.isSupportedBtn(c)&&l.append(b.buildSubBtn(c))}),b.$box.append(l.hide())}else e.key&&(b.keys[e.key]={fn:e.fn||a,param:e.param||a});return f||(b.tagToButton[(e.tag||a).toLowerCase()]=a),i},buildSubBtn:function(a){var b=this,c=b.o.prefix,e=b.btnsDef[a],f=null==e.hasIcon||e.hasIcon;return e.key&&(b.keys[e.key]={fn:e.fn||a,param:e.param||a}),b.tagToButton[(e.tag||a).toLowerCase()]=a,d("<button/>",{type:"button",class:c+a+"-dropdown-button "+(e.class||"")+(e.ico?" "+c+e.ico+"-button":""),html:b.hasSvg&&f?'<svg><use xlink:href="'+b.svgPath+"#"+c+(e.ico||a).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>'+(e.text||e.title||b.lang[a]||a):e.text||e.title||b.lang[a]||a,title:e.key?"("+(b.isMac?"Cmd":"Ctrl")+" + "+e.key+")":null,style:e.style||null,mousedown:function(){return d("body",b.doc).trigger("mousedown"),b.execCmd(e.fn||a,e.param||a,e.forceCss),!1}})},isSupportedBtn:function(a){try{return this.btnsDef[a].isSupported()}catch(a){}return!0},buildOverlay:function(){var a=this;return a.$overlay=d("<div/>",{class:a.o.prefix+"overlay"}).appendTo(a.$box),a.$overlay},showOverlay:function(){var a=this;d(b).trigger("scroll"),a.$overlay.fadeIn(200),a.$box.addClass(a.o.prefix+"box-blur")},hideOverlay:function(){var a=this;a.$overlay.fadeOut(50),a.$box.removeClass(a.o.prefix+"box-blur")},fixedBtnPaneEvents:function(){var a=this,c=a.o.fixedFullWidth,e=a.$box;a.o.fixedBtnPane&&(a.isFixed=!1,d(b).on("scroll."+a.eventNamespace+" resize."+a.eventNamespace,function(){if(e){a.syncCode();var f=d(b).scrollTop(),g=e.offset().top+1,h=a.$btnPane,i=h.outerHeight()-2;f-g>0&&f-g-a.height<0?(a.isFixed||(a.isFixed=!0,h.css({position:"fixed",top:0,left:c?0:"auto",zIndex:7}),a.$box.css({paddingTop:h.height()})),h.css({width:c?"100%":e.width()-1}),d("."+a.o.prefix+"fixed-top",e).css({position:c?"fixed":"absolute",top:c?i:i+(f-g),zIndex:15})):a.isFixed&&(a.isFixed=!1,h.removeAttr("style"),a.$box.css({paddingTop:0}),d("."+a.o.prefix+"fixed-top",e).css({position:"absolute",top:i}))}}))},setDisabled:function(a){var b=this,c=b.o.prefix;b.disabled=a,a?b.$ta.attr("disabled",!0):b.$ta.removeAttr("disabled"),b.$box.toggleClass(c+"disabled",a),b.$ed.attr("contenteditable",!a)},destroy:function(){var a=this,c=a.o.prefix;a.isTextarea?a.$box.after(a.$ta.css({height:""}).val(a.html()).removeClass(c+"textarea").show()):a.$box.after(a.$ed.css({height:""}).removeClass(c+"editor").removeAttr("contenteditable").removeAttr("dir").html(a.html()).show()),a.$ed.off("dblclick","img"),a.destroyPlugins(),a.$box.remove(),a.$c.removeData("trumbowyg"),d("body").removeClass(c+"body-fullscreen"),a.$c.trigger("tbwclose"),d(b).off("scroll."+a.eventNamespace+" resize."+a.eventNamespace)},empty:function(){this.$ta.val(""),this.syncCode(!0)},toggle:function(){var a=this,b=a.o.prefix;a.o.autogrowOnEnter&&(a.autogrowOnEnterDontClose=!a.$box.hasClass(b+"editor-hidden")),a.semanticCode(!1,!0),a.$c.trigger("tbwchange"),setTimeout(function(){a.doc.activeElement.blur(),a.$box.toggleClass(b+"editor-hidden "+b+"editor-visible"),a.$btnPane.toggleClass(b+"disable"),d("."+b+"viewHTML-button",a.$btnPane).toggleClass(b+"active"),a.$box.hasClass(b+"editor-visible")?a.$ta.attr("tabindex",-1):a.$ta.removeAttr("tabindex"),a.o.autogrowOnEnter&&!a.autogrowOnEnterDontClose&&a.autogrowEditorOnEnter()},0)},dropdown:function(a){var c=this,e=d("body",c.doc),f=c.o.prefix,g=d("[data-"+f+"dropdown="+a+"]",c.$box),h=d("."+f+a+"-button",c.$btnPane),i=g.is(":hidden");if(e.trigger("mousedown"),i){var j=h.offset().left;h.addClass(f+"active"),g.css({position:"absolute",top:h.offset().top-c.$btnPane.offset().top+h.outerHeight(),left:c.o.fixedFullWidth&&c.isFixed?j:j-c.$btnPane.offset().left}).show(),d(b).trigger("scroll"),e.on("mousedown."+c.eventNamespace,function(a){g.is(a.target)||(d("."+f+"dropdown",c.$box).hide(),d("."+f+"active",c.$btnPane).removeClass(f+"active"),e.off("mousedown."+c.eventNamespace))})}},html:function(a){var b=this;return null!=a?(b.$ta.val(a),b.syncCode(!0),b.$c.trigger("tbwchange"),b):b.$ta.val()},syncTextarea:function(){var a=this;a.$ta.val(a.$ed.text().trim().length>0||a.$ed.find(a.o.tagsToKeep.join(",")).length>0?a.$ed.html():"")},syncCode:function(a){var b=this;if(!a&&b.$ed.is(":visible"))b.syncTextarea();else{var c=d("<div>").html(b.$ta.val()),e=d("<div>").append(c);d(b.o.tagsToRemove.join(","),e).remove(),b.$ed.html(e.contents().html())}if(b.o.autogrow&&(b.height=b.$ed.height(),b.height!==b.$ta.css("height")&&(b.$ta.css({height:b.height}),b.$c.trigger("tbwresize"))),b.o.autogrowOnEnter){b.$ed.height("auto");var f=b.autogrowOnEnterWasFocused?b.$ed[0].scrollHeight:b.$ed.css("min-height");f!==b.$ta.css("height")&&(b.$ed.css({height:f}),b.$c.trigger("tbwresize"))}},semanticCode:function(a,b,c){var e=this;if(e.saveRange(),e.syncCode(a),e.o.semantic){if(e.semanticTag("b",e.o.semanticKeepAttributes),e.semanticTag("i",e.o.semanticKeepAttributes),e.semanticTag("s",e.o.semanticKeepAttributes),e.semanticTag("strike",e.o.semanticKeepAttributes),b){var f=e.o.inlineElementsSelector,g=":not("+f+")";e.$ed.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim().length>0}).wrap("<span data-tbw/>");var h=function(a){if(0!==a.length){var b=a.nextUntil(g).addBack().wrapAll("<p/>").parent(),c=b.nextAll(f).first();b.next("br").remove(),h(c)}};h(e.$ed.children(f).first()),e.semanticTag("div",!0),d("[data-tbw]",e.$ed).contents().unwrap(),e.$ed.find("p:empty").remove()}c||e.restoreRange(),e.syncTextarea()}},semanticTag:function(a,b){var c;if(null!=this.o.semantic&&"object"==typeof this.o.semantic&&this.o.semantic.hasOwnProperty(a))c=this.o.semantic[a];else{if(!0!==this.o.semantic||!this.DEFAULT_SEMANTIC_MAP.hasOwnProperty(a))return;c=this.DEFAULT_SEMANTIC_MAP[a]}d(a,this.$ed).each(function(){var a=d(this);return 0!==a.contents().length&&(a.wrap("<"+c+"/>"),b&&d.each(a.prop("attributes"),function(){a.parent().attr(this.name,this.value)}),void a.contents().unwrap())})},createLink:function(){for(var a,b,c,e=this,f=e.doc.getSelection(),g=f.getRangeAt(0),h=f.focusNode,i=(new XMLSerializer).serializeToString(g.cloneContents())||g+"";["A","DIV"].indexOf(h.nodeName)<0;)h=h.parentNode;if(h&&"A"===h.nodeName){var j=d(h);i=j.text(),a=j.attr("href"),e.o.minimalLinks||(b=j.attr("title"),c=j.attr("target"));var k=e.doc.createRange();k.selectNode(h),f.removeAllRanges(),f.addRange(k)}e.saveRange();var l={url:{label:"URL",required:!0,value:a},text:{label:e.lang.text,value:i}};e.o.minimalLinks||d.extend(l,{title:{label:e.lang.title,value:b},target:{label:e.lang.target,value:c}}),e.openModalInsert(e.lang.createLink,l,function(a){var b=e.prependUrlPrefix(a.url);if(!b.length)return!1;var c=d(['<a href="',b,'">',a.text||a.url,"</a>"].join(""));return e.o.minimalLinks||(a.title.length>0&&c.attr("title",a.title),a.target.length>0&&c.attr("target",a.target)),e.range.deleteContents(),e.range.insertNode(c[0]),e.syncCode(),e.$c.trigger("tbwchange"),!0})},prependUrlPrefix:function(a){var b=this;return b.urlPrefix?/^([a-z][-+.a-z0-9]*:|\/|#)/i.test(a)?a:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?"mailto:"+a:b.urlPrefix+a:a},unlink:function(){var a=this,b=a.doc.getSelection(),c=b.focusNode;if(b.isCollapsed){for(;["A","DIV"].indexOf(c.nodeName)<0;)c=c.parentNode;if(c&&"A"===c.nodeName){var d=a.doc.createRange();d.selectNode(c),b.removeAllRanges(),b.addRange(d)}}a.execCmd("unlink",void 0,void 0,!0)},insertImage:function(){var a=this;a.saveRange();var b={url:{label:"URL",required:!0},alt:{label:a.lang.description,value:a.getRangeText()}};a.o.imageWidthModalEdit&&(b.width={}),a.openModalInsert(a.lang.insertImage,b,function(b){a.execCmd("insertImage",b.url,!1,!0);var c=d('img[src="'+b.url+'"]:not([alt])',a.$box);return c.attr("alt",b.alt),a.o.imageWidthModalEdit&&c.attr({width:b.width}),a.syncCode(),a.$c.trigger("tbwchange"),!0})},fullscreen:function(){var a,c=this,e=c.o.prefix,f=e+"fullscreen",g=f+"-placeholder",h=c.$box.outerHeight();c.$box.toggleClass(f),a=c.$box.hasClass(f),a?c.$box.before(d("<div/>",{class:g}).css({height:h})):d("."+g).remove(),d("body").toggleClass(e+"body-fullscreen",a),d(b).trigger("scroll"),c.$c.trigger("tbw"+(a?"open":"close")+"fullscreen")},execCmd:function(a,b,c,d){var e=this;d=!!d||"","dropdown"!==a&&e.$ed.focus();try{e.doc.execCommand("styleWithCSS",!1,c||!1)}catch(a){}try{e[a+d](b)}catch(c){try{a(b)}catch(c){"insertHorizontalRule"===a?b=void 0:"formatBlock"===a&&e.isIE&&(b="<"+b+">"),e.doc.execCommand(a,!1,b),e.syncCode(),e.semanticCode(!1,!0)}"dropdown"!==a&&(e.updateButtonPaneStatus(),e.$c.trigger("tbwchange"))}},openModal:function(a,c,g){var h=this,i=h.o.prefix;if(g=!1!==g,d("."+i+"modal-box",h.$box).length>0)return!1;h.o.autogrowOnEnter&&(h.autogrowOnEnterDontClose=!0),h.saveRange(),h.showOverlay(),h.$btnPane.addClass(i+"disable");var j=d("<div/>",{class:i+"modal "+i+"fixed-top"}).css({top:h.$box.offset().top+h.$btnPane.height(),zIndex:99999}).appendTo(d(h.doc.body));h.$overlay.one("click",function(){return j.trigger(f),!1});var k;k=g?d("<form/>",{action:"",html:c}).on("submit",function(){return j.trigger(e),!1}).on("reset",function(){return j.trigger(f),!1}).on("submit reset",function(){h.o.autogrowOnEnter&&(h.autogrowOnEnterDontClose=!1)}):c;var l=d("<div/>",{class:i+"modal-box",html:k}).css({top:"-"+h.$btnPane.outerHeight(),opacity:0,paddingBottom:g?null:"5%"}).appendTo(j).animate({top:0,opacity:1},100);return a&&d("<span/>",{text:a,class:i+"modal-title"}).prependTo(l),g&&(d("input:first",l).focus(),h.buildModalBtn("submit",l),h.buildModalBtn("reset",l),j.height(l.outerHeight()+10)),d(b).trigger("scroll"),j},buildModalBtn:function(a,b){var c=this,e=c.o.prefix;return d("<button/>",{class:e+"modal-button "+e+"modal-"+a,type:a,text:c.lang[a]||a}).appendTo(d("form",b))},closeModal:function(){var a=this,b=a.o.prefix;a.$btnPane.removeClass(b+"disable"),a.$overlay.off();var c=d("."+b+"modal-box",d(a.doc.body));c.animate({top:"-"+c.height()},100,function(){c.parent().remove(),a.hideOverlay()}),a.restoreRange()},openModalInsert:function(a,b,c){var g=this,h=g.o.prefix,i=g.lang,j="";return d.each(b,function(a,b){var c=b.label||a,d=b.name||a,e=b.attributes||{},f=Object.keys(e).map(function(a){return a+'="'+e[a]+'"'}).join(" ");j+='<label><input type="'+(b.type||"text")+'" name="'+d+'"'+("checkbox"===b.type&&b.value?' checked="checked"':' value="'+(b.value||"").replace(/"/g,"&quot;"))+'"'+f+'><span class="'+h+'input-infos"><span>'+(i[c]?i[c]:c)+"</span></span></label>"}),g.openModal(a,j).on(e,function(){var a=d("form",d(this)),f=!0,h={};d.each(b,function(b,c){var e=c.name||b,i=d('input[name="'+e+'"]',a);switch(i.attr("type").toLowerCase()){case"checkbox":h[e]=i.is(":checked");break;case"radio":h[e]=i.filter(":checked").val();break;default:h[e]=d.trim(i.val())}c.required&&""===h[e]?(f=!1,g.addErrorOnModalField(i,g.lang.required)):c.pattern&&!c.pattern.test(h[e])&&(f=!1,g.addErrorOnModalField(i,c.patternError))}),f&&(g.restoreRange(),c(h,b)&&(g.syncCode(),g.$c.trigger("tbwchange"),g.closeModal(),d(this).off(e)))}).one(f,function(){d(this).off(e),g.closeModal()})},addErrorOnModalField:function(a,b){var c=this.o.prefix,e=c+"msg-error",f=a.parent();a.on("change keyup",function(){f.removeClass(c+"input-error"),setTimeout(function(){f.find("."+e).remove()},150)}),f.addClass(c+"input-error").find("input+span").append(d("<span/>",{class:e,text:b}))},getDefaultImgDblClickHandler:function(){var a=this;return function(){var b=d(this),c=b.attr("src"),e="(Base64)";0===c.indexOf("data:image")&&(c=e);var f={url:{label:"URL",value:c,required:!0},alt:{label:a.lang.description,value:b.attr("alt")}};return a.o.imageWidthModalEdit&&(f.width={value:b.attr("width")?b.attr("width"):""}),a.openModalInsert(a.lang.insertImage,f,function(c){return c.url!==e&&b.attr({src:c.url}),b.attr({alt:c.alt}),a.o.imageWidthModalEdit&&(parseInt(c.width)>0?b.attr({width:c.width}):b.removeAttr("width")),!0}),!1}},saveRange:function(){var a=this,b=a.doc.getSelection();if(a.range=null,b&&b.rangeCount){var c,d=a.range=b.getRangeAt(0),e=a.doc.createRange();e.selectNodeContents(a.$ed[0]),e.setEnd(d.startContainer,d.startOffset),c=(e+"").length,a.metaRange={start:c,end:c+(d+"").length}}},restoreRange:function(){var a,b=this,c=b.metaRange,d=b.range,e=b.doc.getSelection();if(d){if(c&&c.start!==c.end){var f,g=0,h=[b.$ed[0]],i=!1,j=!1;for(a=b.doc.createRange();!j&&(f=h.pop());)if(3===f.nodeType){var k=g+f.length;!i&&c.start>=g&&c.start<=k&&(a.setStart(f,c.start-g),i=!0),i&&c.end>=g&&c.end<=k&&(a.setEnd(f,c.end-g),j=!0),g=k}else for(var l=f.childNodes,m=l.length;m>0;)m-=1,h.push(l[m])}try{e.removeAllRanges()}catch(a){}e.addRange(a||d)}},getRangeText:function(){return this.range+""},clearButtonPaneStatus:function(){var a=this,b=a.o.prefix,c=b+"active-button "+b+"active",e=b+"original-icon";d("."+b+"active-button",a.$btnPane).removeClass(c),d("."+e,a.$btnPane).each(function(){d(this).find("svg use").attr("xlink:href",d(this).data(e))})},updateButtonPaneStatus:function(){var a=this,b=a.o.prefix,c=b+"active-button "+b+"active",e=b+"original-icon",f=a.getTagsRecursive(a.doc.getSelection().focusNode);a.clearButtonPaneStatus(),d.each(f,function(f,g){var h=a.tagToButton[g.toLowerCase()],i=d("."+b+h+"-button",a.$btnPane);if(i.length>0)i.addClass(c);else try{i=d("."+b+"dropdown ."+b+h+"-dropdown-button",a.$box);var j=i.find("svg use"),k=i.parent().data(b+"dropdown"),l=d("."+b+k+"-button",a.$box),m=l.find("svg use");l.addClass(c),a.o.changeActiveDropdownIcon&&j.length>0&&(l.addClass(e).data(e,m.attr("xlink:href")),m.attr("xlink:href",j.attr("xlink:href")))}catch(a){}})},getTagsRecursive:function(a,b){var c=this;if(b=b||(a&&a.tagName?[a.tagName]:[]),!a||!a.parentNode)return b;a=a.parentNode;var e=a.tagName;return"DIV"===e?b:("P"===e&&""!==a.style.textAlign&&b.push(a.style.textAlign),d.each(c.tagHandlers,function(d,e){b=b.concat(e(a,c))}),b.push(e),c.getTagsRecursive(a,b).filter(function(a){return null!=a}))},initPlugins:function(){var a=this;a.loadedPlugins=[],d.each(d.trumbowyg.plugins,function(b,c){c.shouldInit&&!c.shouldInit(a)||(c.init(a),c.tagHandler&&a.tagHandlers.push(c.tagHandler),a.loadedPlugins.push(c))})},destroyPlugins:function(){var a=this;d.each(this.loadedPlugins,function(b,c){c.destroy&&c.destroy(a)})}}}(navigator,window,document,jQuery);