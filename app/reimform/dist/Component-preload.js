//@ui5-bundle reimform/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"reimform/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("reimform.Component",{metadata:{manifest:"json"}})});
},
	"reimform/ext/controller/LIST.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("reimform.ext.controller.LIST",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()}}})});
},
	"reimform/ext/controller/OBJ.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("reimform.ext.controller.OBJ",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onBeforeBinding:function(){debugger},beforeNavigationTo:function(){debugger},onAfterBinding:function(){debugger;var e=window.location.href;var t=/reimbursmentId='(\d+)'/;var r=e.match(t);var i=r[1];var o=this.base.getView().getContent()[0].getSections()[2].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[0].mBindingInfos.items.binding;o.filter(new sap.ui.model.Filter({path:"reimbursmentId",operator:sap.ui.model.FilterOperator.EQ,value1:i}))}},editFlow:{beforeNavigationTo:function(){debugger},onAfterSave:function(){debugger;sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").setUploadButtonInvisible(true);var e=sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").getItems();for(let t=0;t<e.length;t++){e[t].setVisibleRemove(false);e[t].setVisibleEdit(false)}},onAfterDiscard:function(){debugger;sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").setUploadButtonInvisible(true);var e=sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").getItems();for(let t=0;t<e.length;t++){e[t].setVisibleRemove(false);e[t].setVisibleEdit(false)}},onAfterEdit:function(e){debugger;var t=sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").getItems();for(let e=0;e<t.length;e++){t[e].setVisibleRemove(true);t[e].setVisibleEdit(true)}sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").setUploadButtonInvisible(false)},onAfterCreate:function(){debugger;var e=sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").getItems();for(let t=0;t<e.length;t++){e[t].setVisibleRemove(true);e[t].setVisibleEdit(true)}sap.ui.getCore().byId("reimform::reimbursementheaderObjectPage--fe::CustomSubSection::Attachment--uploadSet").setUploadButtonInvisible(false)},onBeforeEdit:function(e){debugger}}}})});
},
	"reimform/ext/fragment/Attachment.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros" displayBlock="true"\nxmlns:mvc="sap.ui.core.mvc" xmlns:upload="sap.m.upload"><VBox id="11"><upload:UploadSet\n\t\t\t\t\tid="uploadSet"\n\t\t\t\t\tcore:require="{ handler:  \'reimform/ext/fragment/Attachment\'}"\n\t\t\t\t\tinstantUpload="false"\n\t\t\t\t\tuploadEnabled="true"\n\t\t\t\t\tshowIcons="true"\n\t\t\t\t\tuploadButtonInvisible="true"\n\t\t\t\t\tmode="None"\n\t\t\t\t\tafterItemAdded="handler.onAfterItemAdded"\n\t\t\t\t\tuploadCompleted="handler.onUploadCompleted"\n\t\t\t\t\titems="{\n\t\t\t\t\t\t\t\tpath: \'/Files\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem\n\t\t\t\t\t\tid="ddd"\n\t\t\t\t\t\t\tfileName="{fileName}"\n\t\t\t\t\t\t\tmediaType="{mediaType}"\n\t\t\t\t\t\t\turl="{url}"\n\t\t\t\t\t\t\tthumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}"\n\t\t\t\t\t\t\tenabledEdit="true"\n\t\t\t\t\t\t\tvisibleEdit="false"\n\t\t\t\t\t\t\tvisibleRemove="false"\n\t\t\t\t\t\t\topenPressed="handler.onOpenPressed"\n\t\t\t\t\t\t\tremovePressed="handler.onRemovePressed"><upload:attributes><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded By"\n\t\t\t\t\t\t\t\t\ttext="{createdBy}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded on"\n\t\t\t\t\t\t\t\t\ttext="{createdAt}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dddw2"\n\n\t\t\t\t\t\t\t\t\ttitle="File Type"\n\t\t\t\t\t\t\t\t\ttext="{mediaType}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22a"\n\t\t\t\t\t\t\t\t\ttitle="File Size"\n\t\t\t\t\t\t\t\t\ttext="{size}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>\n\n\n',
	"reimform/ext/fragment/Attachment.js":function(){sap.ui.define(["sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/core/Item","sap/m/MessageToast"],function(e){"use strict";var t=this;return{onPress:function(t){debugger;e.show("Custom handler invoked.")},onAfterItemAdded:function(e){debugger;var t=e.getParameter("item");var a=this._view.getModel().sServiceUrl;var o=function(e){var t=window.location.href;var o=/reimbursmentId='(\d+)'/;var n=t.match(o);var r=n[1];var i={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size,reimbursmentId:r};var s={url:a+`Files`,method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(i)};return new Promise((e,t)=>{$.ajax(s).done((t,a,o)=>{e(t.fileId)}).fail(e=>{t(e)})})};o(t).then(e=>{var o=a+`Files(${e})/content`;t.setUploadUrl(o);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(t)}).catch(e=>{console.log(e)})},onUploadCompleted:function(e){debugger;var t=this.byId("uploadSet");t.removeAllIncompleteItems();t.getBinding("items").refresh()},onRemovePressed:function(t){t.preventDefault();t.getParameter("item").getBindingContext().delete();e.show("Selected file has been deleted")},onOpenPressed:function(e){debugger;e.preventDefault();var t=e.getSource();var a=t.getFileName();var o=function(e){var t={url:e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{console.log("Downloaded Blob:",t);e(t)}).fail(e=>{console.error("Download Error:",e);a(e)})})};o(t).then(e=>{var t=window.URL.createObjectURL(e);window.open(t,"_blank")}).catch(e=>{console.log(e)})},_download:function(e){var t={url:e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})},_createEntity:function(e){var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var a={url:"/my/Files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(a).done((t,a,o)=>{e(t.ID)}).fail(e=>{t(e)})})},_uploadContent:function(e,t){var a=`/my/Files(${t})/content`;e.setUploadUrl(a);var o=this.byId("uploadSet");o.setHttpRequestMethod("PUT");o.uploadItem(e)},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"reimform/ext/fragment/Comments.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><VBox id = "vbox1" class="mainVboxComment"><HBox id = "hbox1" justifyContent="SpaceBetween"><TextArea id = "text1" placeholder="Write a Comment" value="" rows="8" width = "93vw"/></HBox></VBox></core:FragmentDefinition>\n\n',
	"reimform/ext/fragment/Comments.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:function(e){debugger;var t=new sap.m.Dialog({title:"Comments",endButton:new sap.m.Button({text:"Close",press:async function(){t.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})});t.addContent(new sap.m.VBox({width:"60vw"}));function n(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var n=t+"-"+e;return n}debugger;var a=new sap.suite.ui.commons.TimelineItem("thisuniqid1"+n(),{dateTime:"12/3/34",userNameClickable:false,text:"comment1",userName:"Comments"});t.addContent(a);t.open();debugger}}});
},
	"reimform/ext/fragment/Workflow.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><VBox id="v1"><HBox id="buttonContainer" alignItems="End" justifyContent="End" width="100%"><Button id="btn4" core:require="{ handler: \'reimform/ext/fragment/Comments\'}" text="Comment History" press="handler.onPress" /></HBox><Title text="Level1" id="title1"/><ScrollContainer id="scrollContainer" height="280px" width="100%"><Table id="table" ><columns><Column width="11rem" id="c22" styleClass="colClass"><Text text="Title" id="demo"/></Column><Column id="c1" width="11rem" styleClass="colClass"><Text text="Employee ID" id="t1"/></Column><Column id="c2" width="11rem" styleClass="colClass"><Text text="Employee Name" id="t2" width="11rem"/></Column><Column id="c3" width="11rem" styleClass="colClass"><Text text="Begin Date" id="t3" width="11rem"/></Column><Column id="c4" width="11rem" styleClass="colClass"><Text text="End Date" id="t4"/></Column><Column id="c5" width="11rem" styleClass="colClass"><Text text="Days Taken" id="t5"/></Column><Column id="c6" width="11rem" styleClass="colClass"><Text text="Approved By" id="t06"/></Column></columns><items><ColumnListItem id="cli1"><cells></cells></ColumnListItem></items></Table></ScrollContainer></VBox></core:FragmentDefinition>\n\n\n\n\n',
	"reimform/ext/fragment/Workflow.js":function(){
},
	"reimform/i18n/i18n.properties":'# This is the resource bundle for reimform\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Reim Form\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,54\nflpTitle=Reimbursement Form\n',
	"reimform/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"reimform","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.1","toolsId":"e54f3995-8345-4f92-bb9d-674d6e939f40"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"sem-display":{"semanticObject":"sem","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.suite.ui.commons":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"reimform.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"reimbursementheaderList","target":"reimbursementheaderList"},{"pattern":"reimbursementheader({key}):?query:","name":"reimbursementheaderObjectPage","target":"reimbursementheaderObjectPage"}],"targets":{"reimbursementheaderList":{"type":"Component","id":"reimbursementheaderList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/reimbursementheader","variantManagement":"Page","navigation":{"reimbursementheader":{"detail":{"route":"reimbursementheaderObjectPage"}}},"initialLoad":"Enabled","controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"DataField::reimbursmentId":{"width":"300px"},"DataField::submissionDate":{"width":"300px"},"DataField::submittedBy":{"width":"300px"},"DataField::status_dis":{"width":"350px"}}}}}}},"reimbursementheaderObjectPage":{"type":"Component","id":"reimbursementheaderObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/reimbursementheader","content":{"body":{"sections":{"Attachment":{"template":"reimform.ext.fragment.Attachment","position":{"placement":"After","anchor":"ReimbursementDetails"},"title":"Attachments","type":"XMLFragment"},"Workflow":{"template":"reimform.ext.fragment.Workflow","position":{"placement":"After","anchor":"Attachment"},"title":"Workflow History","type":"XMLFragment"},"Comments":{"template":"reimform.ext.fragment.Comments","position":{"placement":"After","anchor":"Workflow"},"title":"Comments","type":"XMLFragment"}}}},"controlConfiguration":{"headItem1/@com.sap.vocabularies.UI.v1.LineItem#ReimbursementDetails":{"columns":{"DataField::item":{"width":"300px"},"DataField::reimbursmentType":{"width":"300px"},"DataField::reimbursmentDate":{"width":"300px"},"DataField::amountToBeReimbursed":{"width":"300px"},"DataField::amountEligibleToClaim":{"width":"300px"}}}}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});