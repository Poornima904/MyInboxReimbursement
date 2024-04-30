sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";
    let fullurl;

    return BaseController.extend("inbox.workflowuimodule.controller.App", {
      
      onInit() {
        debugger
      },
      onFilePress: function () {
        debugger

        var filesTable = this.getOwnerComponent().oModels.context.oData.filesTable;
        
        
        for (let i = 0; i < filesTable.length; i++) {
          fullurl = "https://0ee6e165trial-dev-reimburse-srv.cfapps.us10-001.hana.ondemand.com" + filesTable[i].url;
          // https://24089da8trial-dev-reimburse-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/Files(ID=69faec7e-c43a-4ff2-8a3f-38288947f274,fileId=de56df60-8ab1-4218-9d16-c2ac66f37281)/content

        }
      
        window.open(fullurl);
        // /odata/v4/my/Files(ID=09bf49f9-80ee-4b7d-a4b1-1a496b4f915c,fileId=5d4beb26-1792-4d65-81ef-c38a0e29bd97)/content"
        // var oData = this.getOwnerComponent().oModels.context.oData;
        // var url1 = this._view.getModel().sServiceUrl;
        // var fileUrl =oData.url;

        // window.open("https://fd9d89betrial-dev-reimburse-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/Files(ID=09bf49f9-80ee-4b7d-a4b1-1a496b4f915c,fileId=5d4beb26-1792-4d65-81ef-c38a0e29bd97)/content");

      },

      onAfterRendering: function () {
        debugger

      },
      getFileIcon: function (fullurl) {
        // Define a dictionary mapping file extensions to icon URLs
        var iconMap = {
          'pdf': 'sap-icon://pdf-attachment',
          'doc': 'sap-icon://doc-attachment',
          'xlsx': 'sap-icon://excel-attachment',
          'txt': 'sap-icon://document-text',
          // Add more file types as needed
        };

        // Extract the file extension from the URL
        var extension = fullurl.split('.').pop().toLowerCase();

        // Check if an icon exists for the file extension
        if (iconMap[extension]) {
          return iconMap[extension];
        } else {
          // Default icon for unknown file types
          return 'sap-icon://attachment';
        }
      }



      // let filesTable = this.getOwnerComponent().oModels.context.oData.filesTable;

      // let oTable = this.byId("filesTable");

      // for (let i = 0; i < filesTable.length; i++) {
      //   oTable.addItem(new sap.m.ColumnListItem());
      //   var oColumn = oTable.getItems()[i];

      //   var fileName = new sap.m.Text({
      //     text:filesTable[i].fileName
      //   })
      //   oColumn.addCell(fileName)

      //   var fileUrl = new sap.m.Text({
      //     text:filesTable[i].fileUrl
      //   })
      //   oColumn.addCell(fileUrl)

      // }



      // let tableData = this.getOwnerComponent().oModels.context.oData.tableData;

      // let oTable = this.byId("tableData");

      // for (let i = 0; i < tableData.length; i++) {
      //   oTable.addItem(new sap.m.ColumnListItem());
      //   var oColumn = oTable.getItems()[i];

      //   var reimbursmentType = new sap.m.Text({
      //     text:tableData[i].reimbursmentType
      //   })
      //   oColumn.addCell(reimbursmentType)

      //   var amountToBeReimbursed = new sap.m.Text({
      //     text:tableData[i].amountToBeReimbursed
      //   })
      //   oColumn.addCell(amountToBeReimbursed)

      //   var amountToBeClaimed = new sap.m.Text({
      //     text:tableData[i].amountToBeClaimed
      //   })
      //   oColumn.addCell(amountToBeClaimed)

      // }

    });
  }
);
