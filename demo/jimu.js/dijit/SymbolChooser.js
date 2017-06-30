// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/SymbolChooser.html":'\x3cdiv style\x3d"width:320px;"\x3e\r\n\t\x3cdiv class\x3d"symbol-section point-symbol-section" data-dojo-attach-point\x3d"pointSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointSymPreview" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr class\x3d"point-sym-class-select-tr"\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cselect class\x3d"restrict-select-width" data-dojo-attach-point\x3d"pointSymClassSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'0\' selected\x3d"selected"\x3e${nls.basic}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'1\'\x3eA-Z\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'2\'\x3e${nls.arrows}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'3\'\x3e${nls.business}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'4\'\x3e${nls.cartographic}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'5\'\x3e${nls.nationalParkService}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'6\'\x3e${nls.outdoorRecreation}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'7\'\x3e${nls.peoplePlaces}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'8\'\x3e${nls.safetyHealth}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'9\'\x3e${nls.shapes}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'10\'\x3e${nls.transportation}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d"custom"\x3e${nls.customImage}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointCustomImageTr"\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"customImageTd" class\x3d"custom-image-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"image-file-tip jimu-ellipsis jimu-leading-margin1" data-dojo-attach-point\x3d"imageNameNode"\x3e${nls.noFileChoosen}\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr class\x3d"point-icon-tables-tr" data-dojo-attach-point\x3d"pointIconTablesTr"\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"icon-tables" data-dojo-attach-point\x3d"pointIconTables"\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.symbolSize}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"pointSize" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;" data-dojo-props\x3d\'value:18,smallDelta:1,largeDelta:10,constraints:{min:1,max:50},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointColorTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.color}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:[0,0,128,128]\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointOpacityTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.transparency}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointAlpha" data-dojo-type\x3d"jimu/dijit/_Transparency" data-dojo-props\x3d\'alpha:0.5\' style\x3d"width:100%;font-size:13px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointOutlineColorTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.outlineColor}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointOutlineColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:[0,0,128,255]\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointOulineWidthTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e${nls.outlineWidth}:\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"pointOutlineWidth" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;" data-dojo-props\x3d\'value:1,smallDelta:1,constraints:{min:0,max:5},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"symbol-section line-symbol-section" data-dojo-attach-point\x3d"lineSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"lineSymPreview" style\x3d"width:100%;overflow:hidden;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"icon-tables" data-dojo-attach-point\x3d"lineIconTables"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.color}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"lineColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#9bbb59"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.style}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cselect class\x3d"restrict-select-width" data-dojo-attach-point\x3d"lineStylesSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"solid"\x3e${nls.solid}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"dash"\x3e${nls.dash}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"dot"\x3e${nls.dot}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"dashdot"\x3e${nls.dashDot}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"longdashdotdot"\x3e${nls.dashDotDot}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.transparency}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"lineAlpha" data-dojo-type\x3d"jimu/dijit/_Transparency" data-dojo-props\x3d\'alpha:1\' style\x3d"width:100%;font-size:13px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.width}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"lineWidth" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;"\r\n\t\t\t\t\t\tdata-dojo-props\x3d\'value:3,smallDelta:1,constraints:{min:1,max:50},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"symbol-section fill-symbol-section" data-dojo-attach-point\x3d"fillSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillSymPreview" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"icon-tables" data-dojo-attach-point\x3d"fillIconTables"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.color}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#9bbb59"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.transparency}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillAlpha" data-dojo-type\x3d"jimu/dijit/_Transparency" data-dojo-props\x3d\'alpha:0.5\' style\x3d"width:100%;font-size:13px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.outlineColor}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillOutlineColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#738c3d"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.outlineWidth}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"fillOutlineWidth" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;"\r\n\t\t\t\t\t\tdata-dojo-props\x3d\'value:2,smallDelta:1,constraints:{min:0,max:50},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"symbol-section text-symbol-section" data-dojo-attach-point\x3d"textSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"textPreview"\x3e\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.text}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput class\x3d"text-input" data-dojo-attach-point\x3d"inputText" type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.fontColor}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"textColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#000"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.fontSize}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"textFontSize" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;" data-dojo-props\x3d\'value:20,smallDelta:1,constraints:{min:1,max:100},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/SymbolChooser.html dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/sniff dojo/query dojo/request/xhr jimu/utils jimu/symbolUtils esri/symbols/jsonUtils esri/symbols/SimpleMarkerSymbol esri/symbols/PictureMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/symbols/TextSymbol esri/symbols/Font jimu/dijit/ImageChooser jimu/dijit/ColorPicker jimu/dijit/_Transparency dijit/form/Select dijit/form/NumberSpinner".split(" "),
function(q,r,t,u,v,w,d,b,x,e,y,g,l,z,n,m,A,B,h,p,C,D,E){return q([r,t,u,w],{templateString:v,baseClass:"jimu-symbol-chooser",declaredClass:"jimu.dijit.SymbolChooser",nls:null,_pointEventsBinded:!1,_lineEventBinded:!1,_fillEventBinded:!1,_textEventBinded:!1,_invokeSymbolChangeEvent:!0,_customPictureMarkerSymbol:null,symbol:null,type:null,postMixInProperties:function(){this.nls=window.jimuNls.symbolChooser},postCreate:function(){this.inherited(arguments);this._initImageChooser();this.own(e(document.body,
"click",d.hitch(this,this._onBodyClicked)));(this._isIE8=8===y("ie"))&&b.addClass(this.domNode,"ie8");this.symbol?this.showBySymbol(this.symbol):this.type&&this.showByType(this.type)},reset:function(){this.symbol=this.type=null;this._hideAllSections()},showBySymbol:function(a){this.reset();var c=a&&a.declaredClass;c&&"string"===typeof c&&0<=c.indexOf("esri.symbol")&&(this.symbol=this._cloneSymbol(a),this.isSimpleMarkerSymbol(this.symbol)||this.isPictureMarkerSymbol(this.symbol)?(this.type="marker",
this._initPointSection()):this.isSimpleLineSymbol(this.symbol)?(this.type="line",this._initLineSection()):this._isSimpleFillSymbol(this.symbol)?(this.type="fill",this._initFillSection()):this._isTextSymbol(this.symbol)&&(this.type="text",this._initTextSection()))},showByType:function(a){this.reset();if("marker"===a||"line"===a||"fill"===a||"text"===a)this.type=a,"marker"===this.type?this._initPointSection():"line"===this.type?this._initLineSection():"fill"===this.type?this._initFillSection():"text"===
this.type&&this._initTextSection()},getSymbol:function(){var a=null;"marker"===this.type?a=this._getPointSymbolBySetting():"line"===this.type?a=this._getLineSymbolBySetting():"fill"===this.type?a=this._getFillSymbolBySetting():"text"===this.type&&(a=this._getTextSymbolBySetting());var c=null;a&&(c=this._cloneSymbol(a));return c},hideColorPicker:function(){for(var a="pointColor pointOutlineColor lineColor fillColor fillOutlineColor textColor".split(" "),c=0,b=a.length;c<b;c++){var d=a[c];this[d]&&
this[d].hideTooltipDialog()}},_onBodyClicked:function(a){a=a.target||a.srcElement;this._tryHideDropDownOfSelectDijit(a,this.pointSymClassSelect);this._tryHideDropDownOfSelectDijit(a,this.lineStylesSelect)},_tryHideDropDownOfSelectDijit:function(a,c){var f=c.domNode,d=c.dropDown.domNode,f=a===f||b.isDescendant(a,f),d=a===d||b.isDescendant(a,d);if(!f&&!d)c.dropDown.onCancel()},_onChange:function(a){a=this._cloneSymbol(a);this.emit("change",a)},_hideAllSections:function(){g(".symbol-section",this.domNode).style("display",
"none")},_showSection:function(a){this._hideAllSections();g("."+a+"-symbol-section",this.domNode).style("display","block")},_getAncestor:function(a,c,b){return z.getAncestorDom(a,c,b)},_getAbsoluteUrl:function(a){return window.location.protocol+"//"+window.location.host+require.toUrl(a)},_cloneSymbol:function(a){if(!a)return null;var c=a;try{var b=a.toJson(),c=m.fromJson(b)}catch(k){console.error(k)}return c},_createSymbolIconTable:function(a,c,f){var e=this.type+"-icon-table";a=b.toDom('\x3ctable class\x3d"'+
("icon-table "+e+" "+(e+"-"+a))+'"\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3c/table\x3e');for(var e=g("tbody",a)[0],h=Math.ceil(c.length/8),l=0;l<h;l++)b.create("tr",{},e);var n=g("tr",a);x.forEach(c,d.hitch(this,function(a,c){var e=d.clone(a),k=m.fromJson(a),g=b.create("td",{},n[Math.floor(c/8)]);b.addClass(g,"symbol-td-item");k=this._createSymbolNode(k);b.addClass(k,"symbol-div-item");var h=k.firstChild;b.addClass(h,"svg-node");if(this._isIE8&&"point"===f)if(window.isRTL){if("Cross"===a.name||"X"===a.name)b.setStyle(h,
"right","-20px"),b.setStyle(k,"marginTop","20px")}else"Cross"!==a.name&&"X"!==a.name||b.setStyle(k,"marginTop","20px");k.symbol=e;b.place(k,g)}));return a},_updatePreview:function(a){var c=this._cloneSymbol(this.symbol);b.empty(a);(c=n.createSymbolNode(c))||(c=b.create("div"));b.place(c,a)},_createSymbolNode:function(a){(a=n.createSymbolNode(a,{width:36,height:36}))||(a=b.create("div"));b.setStyle(a,{width:"36px",height:"36px"});return a},_getLineShapeDesc:function(a){var c=null;if(this.isSimpleLineSymbol(a)||
this.isCartographicLineSymbol(a))c={defaultShape:{type:"path",path:"M -90,0 L 90,0 E"},fill:null,stroke:a.getStroke()};return c},_initPointSection:function(){this._showSection("point");this._pointEventsBinded||(this._pointEventsBinded=!0,this._bindPointEvents(),this._onPointSymClassSelectChange());this.isPictureMarkerSymbol(this.symbol)?this._showBuildInPictureMarkerSymSettings():(this.isSimpleMarkerSymbol(this.symbol)||(this.symbol=new A({style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[0,
0,128,255],width:1},type:"esriSMS",size:18})),this._showSimpleMarkerSymSettings());this._initPointSettings(this.symbol);this._getPointSymbolBySetting()},_bindPointEvents:function(){this.own(e(this.pointIconTables,".symbol-div-item:click",d.hitch(this,this._onPointSymIconItemClick)));this.own(e(this.pointSymClassSelect,"change",d.hitch(this,this._onPointSymClassSelectChange)));this.own(e(this.pointSize,"change",d.hitch(this,this._onPointSymbolChange)));this.own(e(this.pointColor,"change",d.hitch(this,
this._onPointSymbolChange)));this.own(e(this.pointAlpha,"change",d.hitch(this,this._onPointSymbolChange)));this.own(e(this.pointOutlineColor,"change",d.hitch(this,this._onPointSymbolChange)));this.own(e(this.pointOutlineWidth,"change",d.hitch(this,this._onPointSymbolChange)))},_onPointSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getPointSymbolBySetting(),this._onChange(this.symbol))},_initPointSettings:function(a){if(a){this._invokeSymbolChangeEvent=!1;if(this.isSimpleMarkerSymbol(a)){if(this.pointSize.set("value",
a.size),this.pointColor.setColor(a.color),this.pointAlpha.setAlpha(parseFloat(a.color.a.toFixed(2))),a=a.outline)this.pointOutlineColor.setColor(a.color),this.pointOutlineWidth.set("value",parseFloat(a.width.toFixed(0)))}else this.isPictureMarkerSymbol(a)&&this.pointSize.set("value",a.width);this._invokeSymbolChangeEvent=!0}},isSimpleMarkerSymbol:function(a){return a&&"esri.symbol.SimpleMarkerSymbol"===a.declaredClass},isPictureMarkerSymbol:function(a){return a&&"esri.symbol.PictureMarkerSymbol"===
a.declaredClass},_isCustomImageOptionSelected:function(){return"custom"===this.pointSymClassSelect.get("value")},_onPointSymClassSelectChange:function(){if(this._isCustomImageOptionSelected())this._showCustomPictureMarkerSymSettings(),this._customPictureMarkerSymbol&&(this.symbol=this._customPictureMarkerSymbol,this._onPointSymbolChange());else{this._showSimpleMarkerSymSettings();this._showSelectedPointSymIconTable();var a=this.pointSymClassSelect.get("value");this.pointSymClassSelect["def"+a]||this._requestPointSymJson(a);
a=this.pointSymClassSelect.getOptions(a);this.pointSymClassSelect.domNode.title=a?a.label:""}},_hideAllPointSymIconTable:function(){g(".marker-icon-table",this.pointIconTables).style("display","none")},_showSelectedPointSymIconTable:function(){this._hideAllPointSymIconTable();var a=this.pointSymClassSelect.get("value"),a=g(".marker-icon-table-"+a,this.pointIconTables);0<a.length&&a.style("display","table")},_requestPointSymJson:function(a){var c="def"+a,f=this.pointSymClassSelect[c];f||(f=this._getAbsoluteUrl("jimu/dijit/SymbolsInfo/"+
a+".json"),f=l(f,{handleAs:"json"}),this.pointSymClassSelect[c]=f,f.then(d.hitch(this,function(c){this.domNode&&(c=this._createSymbolIconTable(a,c,"point"),b.place(c,this.pointIconTables),this._showSelectedPointSymIconTable())}),d.hitch(this,function(a){console.error("get point symbol failed",a)})))},_onPointSymIconItemClick:function(a){if(a=this._getAncestor(a.target||a.srcElement,function(a){return b.hasClass(a,"symbol-div-item")},5))if(g(".selected-symbol-div-item",a.parentNode.parentNode.parentNode).removeClass("selected-symbol-div-item"),
b.addClass(a,"selected-symbol-div-item"),a=a.symbol){this.symbol=m.fromJson(a);a=b.getStyle(this.pointColorTr,"display");this.isSimpleMarkerSymbol(this.symbol)?this._showSimpleMarkerSymSettings():this._showBuildInPictureMarkerSymSettings();this._onPointSymbolChange();var c=b.getStyle(this.pointColorTr,"display");a!==c&&this.emit("resize")}},_showSimpleMarkerSymSettings:function(){b.addClass(this.pointCustomImageTr,"hidden");b.removeClass(this.pointIconTablesTr,"hidden");b.removeClass(this.pointColorTr,
"hidden");b.removeClass(this.pointOpacityTr,"hidden");b.removeClass(this.pointOutlineColorTr,"hidden");b.removeClass(this.pointOulineWidthTr,"hidden")},_showBuildInPictureMarkerSymSettings:function(){b.addClass(this.pointCustomImageTr,"hidden");b.removeClass(this.pointIconTablesTr,"hidden");b.addClass(this.pointColorTr,"hidden");b.addClass(this.pointOpacityTr,"hidden");b.addClass(this.pointOutlineColorTr,"hidden");b.addClass(this.pointOulineWidthTr,"hidden")},_showCustomPictureMarkerSymSettings:function(){b.removeClass(this.pointCustomImageTr,
"hidden");b.addClass(this.pointIconTablesTr,"hidden");b.addClass(this.pointColorTr,"hidden");b.addClass(this.pointOpacityTr,"hidden");b.addClass(this.pointOutlineColorTr,"hidden");b.addClass(this.pointOulineWidthTr,"hidden")},_getPointSymbolBySetting:function(){if(!this.symbol)return null;var a=parseFloat(this.pointSize.get("value"));if(this.isSimpleMarkerSymbol(this.symbol)){this.symbol.setSize(a);var a=this.pointColor.getColor(),c=this.pointAlpha.getAlpha();a.a=c;this.symbol.setColor(a);var a=this.pointOutlineColor.getColor(),
c=parseFloat(this.pointOutlineWidth.get("value")),b=new h;b.setStyle(h.STYLE_SOLID);b.setColor(a);b.setWidth(c);this.symbol.setOutline(b)}else this.isPictureMarkerSymbol(this.symbol)&&(this.symbol.setWidth(a),this.symbol.setHeight(a));this._updatePreview(this.pointSymPreview);return this.symbol},_initImageChooser:function(){this.imageChooser=new E({cropImage:!1,showSelfImg:!1,goldenWidth:16,goldenHeight:16,format:["image/gif","image/png","image/jpeg"],label:this.nls.chooseFile});b.addClass(this.imageChooser.domNode,
"custom-image-chooser");this.own(e(this.imageChooser,"change",d.hitch(this,this._onImageChange)));this.imageChooser.placeAt(this.customImageTd,"first")},_onImageChange:function(a,c){this.imageNameNode.innerHTML=c.fileName;a=a.replace(/^data:image\/.*;base64,/,"");var b=parseFloat(this.pointSize.get("value"));this._customPictureMarkerSymbol=this.symbol=new B({type:"esriPMS",url:null,imageData:a,contentType:"image/png",color:null,width:b,height:b,angle:0,xoffset:0,yoffset:0});this._onPointSymbolChange()},
_initLineSection:function(){this._showSection("line");this._lineEventBinded||(this._lineEventBinded=!0,this._bindLineEvents(),this._requestLineSymJson("line"));this._initLineSettings(this.symbol);this._getLineSymbolBySetting()},_bindLineEvents:function(){this.own(e(this.lineIconTables,".symbol-div-item:click",d.hitch(this,this._onLineSymIconItemClick)));this.own(e(this.lineColor,"change",d.hitch(this,this._onLineSymbolChange)));this.own(e(this.lineStylesSelect,"change",d.hitch(this,this._onLineSymbolChange)));
this.own(e(this.lineAlpha,"change",d.hitch(this,this._onLineSymbolChange)));this.own(e(this.lineWidth,"change",d.hitch(this,this._onLineSymbolChange)))},_onLineSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getLineSymbolBySetting(),this._onChange(this.symbol))},_initLineSettings:function(a){a&&(this._invokeSymbolChangeEvent=!1,this.lineColor.setColor(a.color),this.lineAlpha.setAlpha(parseFloat(a.color.a.toFixed(2))),this.lineWidth.set("value",parseFloat(a.width.toFixed(0))),this.lineStylesSelect.set("value",
a.style),this._invokeSymbolChangeEvent=!0)},isSimpleLineSymbol:function(a){return a&&"esri.symbol.SimpleLineSymbol"===a.declaredClass},isCartographicLineSymbol:function(a){return a&&"esri.symbol.CartographicLineSymbol"===a.declaredClass},_requestLineSymJson:function(a){var c=this._getAbsoluteUrl("jimu/dijit/SymbolsInfo/"+a+".json");l(c,{handleAs:"json"}).then(d.hitch(this,function(c){this.domNode&&(c=this._createSymbolIconTable(a,c,"line"),b.place(c,this.lineIconTables))}),d.hitch(this,function(a){console.error("get line symbol failed",
a)}))},_onLineSymIconItemClick:function(a){if(a=this._getAncestor(a.target||a.srcElement,function(a){return b.hasClass(a,"symbol-div-item")},5))if(g(".selected-symbol-div-item",a.parentNode.parentNode.parentNode).removeClass("selected-symbol-div-item"),b.addClass(a,"selected-symbol-div-item"),a=a.symbol)a=m.fromJson(a),this._initLineSettings(a),this._onLineSymbolChange()},_getLineSymbolBySetting:function(){this.symbol=new h;var a=this.lineColor.getColor(),c=this.lineStylesSelect.get("value");a.a=
this.lineAlpha.getAlpha();var b=parseFloat(this.lineWidth.get("value"));this.symbol.setStyle(c);this.symbol.setColor(a);this.symbol.setWidth(b);this._updatePreview(this.lineSymPreview);return this.symbol},_initFillSection:function(){this._showSection("fill");this._fillEventBinded||(this._fillEventBinded=!0,this._bindFillEvents(),this._requestFillSymJson("fill"));this._initFillSettings(this.symbol);this._getFillSymbolBySetting()},_bindFillEvents:function(){this.own(e(this.fillIconTables,".symbol-div-item:click",
d.hitch(this,this._onFillSymIconItemClick)));this.own(e(this.fillColor,"change",d.hitch(this,this._onFillSymbolChange)));this.own(e(this.fillAlpha,"change",d.hitch(this,this._onFillSymbolChange)));this.own(e(this.fillOutlineColor,"change",d.hitch(this,this._onFillSymbolChange)));this.own(e(this.fillOutlineWidth,"change",d.hitch(this,this._onFillSymbolChange)))},_onFillSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getFillSymbolBySetting(),this._onChange(this.symbol))},_initFillSettings:function(a){a&&
(this._invokeSymbolChangeEvent=!1,this.fillColor.setColor(a.color),this.fillAlpha.setAlpha(parseFloat(a.color.a.toFixed(2))),a.outline&&(this.fillOutlineColor.setColor(a.outline.color),this.fillOutlineWidth.set("value",parseInt(a.outline.width,10))),this._invokeSymbolChangeEvent=!0)},_isSimpleFillSymbol:function(a){return a&&"esri.symbol.SimpleFillSymbol"===a.declaredClass},_requestFillSymJson:function(a){var c=this._getAbsoluteUrl("jimu/dijit/SymbolsInfo/"+a+".json");l(c,{handleAs:"json"}).then(d.hitch(this,
function(c){this.domNode&&(c=this._createSymbolIconTable(a,c,"fill"),b.place(c,this.fillIconTables))}),d.hitch(this,function(a){console.error("get fill symbol failed",a)}))},_onFillSymIconItemClick:function(a){if(a=this._getAncestor(a.target||a.srcElement,function(a){return b.hasClass(a,"symbol-div-item")},5))if(g(".selected-symbol-div-item",a.parentNode.parentNode.parentNode).removeClass("selected-symbol-div-item"),b.addClass(a,"selected-symbol-div-item"),a=a.symbol)a=m.fromJson(a),this._initFillSettings(a),
this._onFillSymbolChange()},_getFillSymbolBySetting:function(){this.symbol=new p;var a=this.fillColor.getColor();a.a=this.fillAlpha.getAlpha();var c=this.fillOutlineColor.getColor(),b=parseInt(this.fillOutlineWidth.get("value"),10);this.symbol.setColor(a);this.symbol.setStyle(p.STYLE_SOLID);a=new h;a.setStyle(h.STYLE_SOLID);a.setColor(c);a.setWidth(b);this.symbol.setOutline(a);this._updatePreview(this.fillSymPreview);return this.symbol},_initTextSection:function(){this._showSection("text");this._textEventBinded||
(this._textEventBinded=!0,this._bindTextEvents());this._initTextSettings();this._getTextSymbolBySetting()},_bindTextEvents:function(){this.own(e(this.inputText,"change",d.hitch(this,this._onTextSymbolChange)));this.own(e(this.textColor,"change",d.hitch(this,this._onTextSymbolChange)));this.own(e(this.textFontSize,"change",d.hitch(this,this._onTextSymbolChange)))},_onTextSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getTextSymbolBySetting(),this._onChange(this.symbol))},_initTextSettings:function(a){a&&
(this._invokeSymbolChangeEvent=!1,this.inputText.value=a.text,this.textColor.setColor(a.color),a=parseInt(a.font.size,10),this.textFontSize.set("value",a),this._invokeSymbolChangeEvent=!0)},_isTextSymbol:function(a){return a&&"esri.symbol.TextSymbol"===a.declaredClass},_updateTextPreview:function(){var a=this.textColor.getColor().toHex(),c=parseInt(this.textFontSize.get("value"),10)+"px";b.setStyle(this.textPreview,{color:a,fontSize:c});this.textPreview.innerHTML=this.inputText.value},_getTextSymbolBySetting:function(){this.symbol=
new C;var a=this.inputText.value,b=this.textColor.getColor(),d=parseInt(this.textFontSize.get("value"),10),e=new D;e.setSize(d);this.symbol.setText(a);this.symbol.setColor(b);this.symbol.setFont(e);this._updateTextPreview();return this.symbol}})});