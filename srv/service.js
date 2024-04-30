const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {

    let { reimbursementitem, reimbursementheader } = this.entities;
    this.before('CREATE', 'Files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/Files(${req.data.ID})/content`
    })

    
});

