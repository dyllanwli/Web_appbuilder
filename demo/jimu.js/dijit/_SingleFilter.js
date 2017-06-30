// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_SingleFilter.html":'\x3cdiv\x3e\r\n\t\x3ctable class\x3d"setting-table" cellpadding\x3d"0" cellspacing\x3d"0" cellpadding\x3d"10px" style\x3d"table-layout:fixed;"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd class\x3d"fields-td" nowrap\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fieldsSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" data-dojo-props\x3d\'searchAttr:"displayName",required:true,intermediateChanges:true\' class\x3d"dijit-form-FilteringSelect" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"operators-td" nowrap\x3e\r\n\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"operatorsSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;" class\x3d"operator-select dijit-form-Select restrict-select-width"\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"none"\x3e${nls.none}\x3c/option\x3e\r\n\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"value-td" nowrap data-dojo-attach-point\x3d"valueTd"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"attributeValueContainer" class\x3d"value-container"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"radio-table-container"\x3e\r\n\t\t\t\t\t\t\t\x3ctable class\x3d"radio-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cinput class\x3d"jimu-radio-btn" type\x3d"radio" data-dojo-attach-point\x3d"valueRadio" checked\x3d"true" disabled  title\x3d"${nls.valueTooltip}" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"valueLabel" title\x3d"${nls.valueTooltip}"\x3e${nls.value}\x3c/label\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cinput class\x3d"jimu-radio-btn" type\x3d"radio" data-dojo-attach-point\x3d"fieldRadio" disabled title\x3d"${nls.fieldTooltip}" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"fieldLabel" title\x3d"${nls.fieldTooltip}"\x3e${nls.field}\x3c/label\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3ctd data-dojo-attach-point\x3d"uniqueTd"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cinput class\x3d"jimu-radio-btn" type\x3d"radio" data-dojo-attach-point\x3d"uniqueRadio" disabled title\x3d"${nls.uniqueValueTooltip}" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"uniqueLabel" title\x3d"${nls.uniqueValueTooltip}"\x3e${nls.unique}\x3c/label\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"delete-td" nowrap\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-delete" data-dojo-attach-point\x3d"btnDelete"\r\n\t\t\t\t\t data-dojo-attach-event\x3d"click:_destroySelf"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv class\x3d"askvalues"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"cbxAskValues" label\x3d"${nls.askForValues}" class\x3d"jimu-trailing-margin6"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"cbxCaseSensitive" label\x3d"${nls.caseSensitive}" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"promptSection" class\x3d"prompt"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"promptTable" cellpadding\x3d"0" cellspacing\x3d"0" class\x3d"prompt-table" style\x3d"width:100%;"\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.prompt}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"promptTB" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true" style\x3d"width:257px;" class\x3d"dijit-form-ValidationTextBox" \x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.hint}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"hintTB" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true" style\x3d"width:257px;" class\x3d"dijit-form-ValidationTextBox" \x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"cascadeTr" class\x3d"cascade-tr"\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv style\x3d"margin-bottom:5px;"\x3e${nls.listValues}:\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"cascadeSelect" class\x3d"cascade-select restrict-select-width" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"none"\x3e${nls.noneCascadeFilterTip}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"previous"\x3e${nls.previousCascadeFilterTip}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"all"\x3e${nls.allCascadeFilterTip}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_SingleFilter.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/store/Memory jimu/utils jimu/dijit/_filter/ValueProviderFactory jimu/dijit/CheckBox dijit/form/Select dijit/form/FilteringSelect dijit/form/ValidationTextBox".split(" "),function(m,n,p,q,r,d,c,k,f,t,h,l){return m([n,p,q],{templateString:r,baseClass:"jimu-single-filter",declaredClass:"jimu.dijit._SingleFilter",
nls:null,url:null,layerInfo:null,stringFieldType:"",dateFieldType:"",numberFieldTypes:[],supportFieldTypes:[],part:null,OPERATORS:null,enableAskForValues:!1,isHosted:!1,valueProviderFactory:null,valueProvider:null,postMixInProperties:function(){this.supportFieldTypes=[];this.supportFieldTypes.push(this.stringFieldType);this.supportFieldTypes.push(this.dateFieldType);this.supportFieldTypes=this.supportFieldTypes.concat(this.numberFieldTypes);this.nls=window.jimuNls.filterBuilder},postCreate:function(){this.inherited(arguments);
this._initSelf()},toJson:function(){var a={fieldObj:"",operator:"",valueObj:"",interactiveObj:"",caseSensitive:!1},b=this._getFieldObjByUI();if(!b)return null;a.fieldObj=b;b=this._getOperatorByUI();if(!b)return null;a.operator=b;a.caseSensitive=this.cbxCaseSensitive.getStatus()&&this.cbxCaseSensitive.getValue();if(b=this._isUseAskForValues()){if(!this.promptTB.validate())return this._showValidationErrorTip(this.promptTB),null;a.interactiveObj={prompt:this.promptTB.get("value"),hint:this.hintTB.get("value"),
cascade:"none"};this.uniqueRadio&&this.uniqueRadio.checked&&(a.interactiveObj.cascade=this.cascadeSelect.get("value"))}a.valueObj={isValid:!0,type:""};b=b?this.valueProvider.tryGetValueObject():this.valueProvider.getValueObject();if(!b)return null;this.valueRadio.checked?b.type="value":this.fieldRadio.checked?b.type="field":this.uniqueRadio.checked&&(b.type="unique");a.valueObj=b;return a},_getFieldObjByUI:function(){var a=this._getSelectedFilteringItem(this.fieldsSelect);return a?{name:a.name,label:a.name,
shortType:a.shortType,type:a.type}:null},_getOperatorByUI:function(){var a=this.operatorsSelect.get("value");"none"===a&&(a=null);return a},showDelteIcon:function(){c.setStyle(this.btnDelete,"display","inline-block")},hideDeleteIcon:function(){c.setStyle(this.btnDelete,"display","none")},_showAndEnableCaseSensitive:function(){this.cbxCaseSensitive.setStatus(!0);c.setStyle(this.cbxCaseSensitive.domNode,"display","inline-block")},_hideAndDisableCaseSensitive:function(){this.cbxCaseSensitive.setStatus(!1);
c.setStyle(this.cbxCaseSensitive.domNode,"display","none")},_initSelf:function(){this.layerInfo=d.mixin({},this.layerInfo);this.isHosted&&(this.cbxCaseSensitive.setValue(!1),this.cbxCaseSensitive.setStatus(!1),this.cbxCaseSensitive.domNode.title=this.nls.notSupportCaseSensitiveTip);this.own(f(this.fieldsSelect,"MouseEnter",d.hitch(this,this._updateFieldsSelectTitle)));this.own(f(this.operatorsSelect,"MouseEnter",d.hitch(this,this._updateOperatorsSelectTitle)));this.enableAskForValues?(c.setStyle(this.cbxAskValues.domNode,
"display","inline-block"),c.setStyle(this.promptSection,"display","block"),this.own(f(this.cbxAskValues,"status-change",d.hitch(this,this._onCbxAskValuesStatusChanged))),this.cbxAskValues.onChange=d.hitch(this,this._onCbxAskValuesClicked)):(c.setStyle(this.cbxAskValues.domNode,"display","none"),c.setStyle(this.promptSection,"display","none"));this._initValueTypeRadios();var a=this.layerInfo.fields;a&&0<a.length&&(a=k.filter(a,d.hitch(this,function(a){return 0<=this.supportFieldTypes.indexOf(a.type)})),
0<a.length&&(this._enableRadios(),this._initFieldsSelect(a),this.part?this._showPart(this.part):this._resetByFieldAndOperator(),setTimeout(d.hitch(this,function(){this._bindFieldsSelectChangeAndOperatorChangeEvents()}),10)))},_bindFieldsSelectChangeAndOperatorChangeEvents:function(){this._removeFieldsSelectChangeAndOperatorChangeEvents();this._handle1=f(this.fieldsSelect,"change",d.hitch(this,this._onFieldsSelectChange));this._handle2=f(this.operatorsSelect,"change",d.hitch(this,this._onOperatorsSelectChange))},
_removeFieldsSelectChangeAndOperatorChangeEvents:function(){this._handle1&&this._handle1.remove();this._handle2&&this._handle2.remove();this._handle2=this._handle1=null},_isServiceSupportDistinctValues:function(a,b){return this._isStreamServer(a)?!1:10.1<=parseFloat(b.currentVersion)},_isStreamServer:function(a){a=(a||"").replace(/\/*$/g,"");return/\/StreamServer$/gi.test(a)},_updateFieldsSelectTitle:function(){this.fieldsSelect.domNode.title="";var a=this._getSelectedFilteringItem(this.fieldsSelect);
a&&(this.fieldsSelect.domNode.title=a.displayName||a.alias||a.name)},_updateOperatorsSelectTitle:function(){this.operatorsSelect.domNode.title="";var a=this.operatorsSelect.get("value");a&&(a=this.operatorsSelect.getOptions(a),this.operatorsSelect.domNode.title=a.label)},_showValidationErrorTip:function(a){try{!a.validate()&&a.domNode&&a.focusNode&&(a.focusNode.focus(),a.focusNode.blur())}catch(b){console.error(b)}},_getSelectedFilteringItem:function(a){if(a.validate()){var b=a.get("item");if(b)return b}this._showValidationErrorTip(a);
return null},_getShortTypeByFieldType:function(a){return a===this.stringFieldType?"string":a===this.dateFieldType?"date":0<=this.numberFieldTypes.indexOf(a)?"number":null},_initFieldsSelect:function(a){a=k.map(a,d.hitch(this,function(a,b){var c=d.mixin({},a);c.id=b;c.shortType=this._getShortTypeByFieldType(a.type);c.alias||(c.alias=c.name);var e="";"string"===c.shortType?e=this.nls.string:"number"===c.shortType?e=this.nls.number:"date"===c.shortType&&(e=this.nls.date);c.displayName=c.alias+" ("+e+
")";return c}));if(0<a.length){var b=new t({data:a});this.fieldsSelect.set("store",b);this.fieldsSelect.set("value",a[0].id)}this._updateOperatorsByFieldsSelect()},_showPart:function(a){if((this.part=a)&&this.part.fieldObj&&this.part.operator&&this.part.valueObj){this._removeFieldsSelectChangeAndOperatorChangeEvents();var b=this.part.fieldObj.name;a=this.part.operator;this.part.caseSensitive=!!this.part.caseSensitive;b=this.fieldsSelect.store.query({name:b});0!==b.length&&(b=b[0])&&(this.fieldsSelect.set("value",
b.id),this._updateOperatorsByFieldsSelect(),this.operatorsSelect.set("value",a),this._resetByFieldAndOperator(this.part),a=this.part.interactiveObj)&&(this.cbxAskValues.check(),this._updatePrompt(),this.promptTB.set("value",a.prompt||""),this.hintTB.set("value",a.hint||""),"unique"===this.part.valueObj.type?this.cascadeSelect.set("value",a.cascade):this.cascadeSelect.set("value","none"))}},_onFieldsSelectChange:function(){this._updateOperatorsByFieldsSelect();this._resetByFieldAndOperator()},_updateOperatorsByFieldsSelect:function(){this._updateFieldsSelectTitle();
this.operatorsSelect.removeOption(this.operatorsSelect.getOptions());this.operatorsSelect.addOption({value:"none",label:this.nls.none});var a=this._getSelectedFilteringItem(this.fieldsSelect);a&&(this.operatorsSelect.shortType=a.shortType,a=l.getOperatorsByShortType(a.shortType),this.operatorsSelect.removeOption(this.operatorsSelect.getOptions()),k.forEach(a,d.hitch(this,function(a){this.operatorsSelect.addOption({value:a,label:this.nls[a]})})))},_onOperatorsSelectChange:function(){this._resetByFieldAndOperator()},
_initValueTypeRadios:function(){var a="radio_"+h.getRandomString();this.valueRadio.name=a;this.fieldRadio.name=a;this.uniqueRadio.name=a;this.valueRadio.valueType="value";this.fieldRadio.valueType="field";this.uniqueRadio.valueType="unique";h.combineRadioCheckBoxWithLabel(this.valueRadio,this.valueLabel);h.combineRadioCheckBoxWithLabel(this.fieldRadio,this.fieldLabel);h.combineRadioCheckBoxWithLabel(this.uniqueRadio,this.uniqueLabel);this.own(f(this.valueRadio,"click",d.hitch(this,function(){this._resetByFieldAndOperator(null,
"value")})));this.own(f(this.fieldRadio,"click",d.hitch(this,function(){this._resetByFieldAndOperator(null,"field")})));this.own(f(this.uniqueRadio,"click",d.hitch(this,function(){this._resetByFieldAndOperator(null,"unique")})));this._isServiceSupportDistinctValues(this.url,this.layerInfo)||(this.uniqueTd.style.display="none")},_updateValueTypeClass:function(){c.removeClass(this.domNode,"value-type");c.removeClass(this.domNode,"field-type");c.removeClass(this.domNode,"unique-type");c.removeClass(this.domNode,
"support-cascade");if(this.valueRadio.checked)c.addClass(this.domNode,"value-type"),this.cascadeSelect.set("value","none");else if(this.fieldRadio.checked)c.addClass(this.domNode,"field-type"),this.cascadeSelect.set("value","none");else{c.addClass(this.domNode,"unique-type");this.cascadeSelect.set("value","previous");var a=!0,a=this._getSelectedFilteringItem(this.fieldsSelect),a=this._getCodedValuesOrTypesCount(a);(a=0<a?h.isCodedValuesSupportFilter(this.layerInfo,a):!0)?(this.cascadeSelect.set("value",
"previous"),c.addClass(this.domNode,"support-cascade")):this.cascadeSelect.set("value","none")}},_getCodedValuesOrTypesCount:function(a){if(a){if(a.domain&&"codedValue"===a.domain.type&&a.domain.codedValues)return a.domain.codedValues.length;if(this.layerInfo.typeIdField===a.name&&this.layerInfo.types)return this.layerInfo.types.length}return 0},_enableRadios:function(){this.valueRadio.disabled=!1;this.fieldRadio.disabled=!1;this.uniqueRadio.disabled=!1},_disableAndUncheckRadios:function(){this._enableRadios();
this.valueRadio.checked=!1;this.fieldRadio.checked=!1;this.uniqueRadio.checked=!1;this.valueRadio.disabled=!0;this.fieldRadio.disabled=!0;this.uniqueRadio.disabled=!0},_resetByFieldAndOperator:function(a,b){this._updateOperatorsSelectTitle();this.valueProvider&&this.valueProvider.destroy();this._hideAndDisableCaseSensitive();this._disableAndUncheckRadios();a||(a={fieldObj:"",operator:"",valueObj:"",interactiveObj:"",caseSensitive:!1},a.fieldObj=this._getFieldObjByUI(),a.operator=this._getOperatorByUI());
var e=[],d=null;if(a.fieldObj&&a.operator){var e=this.valueProviderFactory.getSupportedValueTypes(a.fieldObj.name,a.operator),g=null;a.valueObj?d=a.valueObj.type:(d=b&&0<=e.indexOf(b)?b:e[0],a.valueObj={type:d});0<=e.indexOf("value")&&(this.valueRadio.disabled=!1);0<=e.indexOf("field")&&(this.fieldRadio.disabled=!1);0<=e.indexOf("unique")&&(this.uniqueRadio.disabled=!1);"value"===d?g=this.valueRadio:"field"===d?g=this.fieldRadio:"unique"===d&&(g=this.uniqueRadio);g&&(g.disabled=!1,g.checked=!0)}0<
e.length?(this.valueProvider=this.valueProviderFactory.getValueProvider(a,!1),this.valueProvider.placeAt(this.attributeValueContainer,"first"),this.valueProvider.setValueObject(a.valueObj),this.valueProvider.isBlankValueProvider()?(c.addClass(this.valueProvider.domNode,"hidden"),c.addClass(this.attributeValueContainer,"hidden")):c.removeClass(this.attributeValueContainer,"hidden"),(e=l.getOperatorInfo(a.operator))&&d&&(e[d]&&e[d].supportCaseSensitive&&this._showAndEnableCaseSensitive(),a&&this.cbxCaseSensitive.setValue(a.caseSensitive))):
c.addClass(this.attributeValueContainer,"hidden");this._updateWhenValueRadioChanged()},_updateWhenValueRadioChanged:function(){this._updatePrompt();this._updateValueTypeClass()},_getRadioByValueType:function(a){return"value"===a?this.valueRadio:"field"===a?this.fieldRadio:"unique"===a?this.uniqueRadio:null},_onCbxAskValuesClicked:function(){this._updateRequiredProperty();this._updatePrompt()},_onCbxAskValuesStatusChanged:function(){this._updateRequiredProperty()},_isUseAskForValues:function(){return this.cbxAskValues.status&&
this.cbxAskValues.checked},_isValueRequired:function(){return!this._isUseAskForValues()},_updateRequiredProperty:function(){var a=this._isValueRequired();this.valueProvider.setRequired(a)},_getValueTypeByUI:function(){return!this.valueRadio.disabled&&this.valueRadio.checked?"value":!this.fieldRadio.disabled&&this.fieldRadio.checked?"field":!this.uniqueRadio.disabled&&this.uniqueRadio.checked?"unique":null},_updatePrompt:function(){this.promptTB.set("value","");this.hintTB.set("value","");this.cbxAskValues.setStatus(!0);
c.setStyle(this.promptTable,"display","table");var a=this.operatorsSelect.get("value"),b=this.nls[a],d=!1,f=this._getValueTypeByUI(),g=l.getOperatorInfo(a);g&&f&&(f=g[f])&&f.supportAskForValue&&(d=!0);d||this.cbxAskValues.setStatus(!1);this.cbxAskValues.status&&this.cbxAskValues.checked?(c.setStyle(this.promptTable,"display","table"),(d=this._getSelectedFilteringItem(this.fieldsSelect))&&"none"!==a&&this.promptTB.set("value",(d.alias||d.name)+" "+b)):c.setStyle(this.promptTable,"display","none")},
_destroySelf:function(){this.destroy()},destroy:function(){this._removeFieldsSelectChangeAndOperatorChangeEvents();this.inherited(arguments)}})});