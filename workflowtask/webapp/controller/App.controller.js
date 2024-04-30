sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";
    var fullurl;

    return BaseController.extend("inbox.workflowtask.controller.App", {
      onInit() {
        debugger
        //for approvedBy field, by this line we will get current user who loggedIn
        var username = new sap.ushell.services.UserInfo().getEmail();
        this.byId("appid").setValue(username);

      },
      onCommentPress: function () {

        debugger
//by clicking on commentHistory button the dialog box will open also, the comments in the database will display
        var cdialog = new sap.m.Dialog({
          title: "Comments",
          endButton: new sap.m.Button({
            text: "Close",
            press: async function () {
              cdialog.close();
            },
            layoutData: new sap.m.FlexItemData({
              growFactor: 5,
              alignSelf: "End" 
            })
          })
        });
        cdialog.addContent(new sap.m.VBox({
          width: "50vw"
        }));
        function generateUniqueId() {
          // Generate a random number
          var randomNumber = Math.floor(Math.random() * 1000000);

          // Get the current timestamp
          var timestamp = new Date().getTime();

          // Combine timestamp and random number to create a unique ID
          var uniqueId = timestamp + '-' + randomNumber;

          return uniqueId;
        }
        debugger
        var commentlist = this.getOwnerComponent().oModels.context.oData.commentList;
        for (let i = 0; i < commentlist.length; i++) {

          var oTimelineItem = new sap.suite.ui.commons.TimelineItem(("thisuniqid1" + generateUniqueId()), {
            // dateTime: `${commentlist[0].datatime}`,
            dateTime: "12/3/2024",
            userPicture: "Photo",
            userNameClickable: false,
            text: commentlist[i].textArea

          });
          cdialog.addContent(oTimelineItem);
        }

        // // //////////////////////////////////
        // var oTimelineItem = new sap.suite.ui.commons.TimelineItem(("thisuniqid1" + generateUniqueId()), {
        //   dateTime: "12/3/2024",
        //      title: "demo",
        //         userNameClickable: false,
        //         userPicture: "Photo",
        //         text: 'comment demo'
        // });
        // cdialog.addContent(oTimelineItem);
        cdialog.open(); // Open the dialog



      },


      onFilePress: function (oEvent) {
        debugger
        var filelink = oEvent.oSource.mProperties.href;
        fullurl = "https://0ee6e165trial-dev-reimburse-srv.cfapps.us10-001.hana.ondemand.com" + filelink;
        window.open(fullurl);



        // var filesTable = this.getOwnerComponent().oModels.context.oData.filesTable;
        // for (let i = 0; i < filesTable.length; i++) {
        //   fullurl = "https://0ee6e165trial-dev-reimburse-srv.cfapps.us10-001.hana.ondemand.com" + filesTable[i].url

        // }

        // window.open(fullurl);
        // /odata/v4/my/Files(ID=09bf49f9-80ee-4b7d-a4b1-1a496b4f915c,fileId=5d4beb26-1792-4d65-81ef-c38a0e29bd97)/content"
        // var oData = this.getOwnerComponent().oModels.context.oData;
        // var url1 = this._view.getModel().sServiceUrl;
        // var fileUrl =oData.url;

        // window.open("https://fd9d89betrial-dev-reimburse-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/Files(ID=09bf49f9-80ee-4b7d-a4b1-1a496b4f915c,fileId=5d4beb26-1792-4d65-81ef-c38a0e29bd97)/content");

      },


      onAfterRendering: function () {
        debugger
        var username = new sap.ushell.services.UserInfo().getEmail();
        this.byId("appid").setValue(username);

      }
    });
  }
);
