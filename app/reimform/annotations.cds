using MyService as service from '../../srv/service';

annotate service.reimbursementheader with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : reimbursmentId,
            Label : 'Reimbursement Id',
        },
        {
            $Type : 'UI.DataField',
            Value : submissionDate,
            Label : 'Submission Date',
        },
        {
            $Type : 'UI.DataField',
            Value : submittedBy,
            Label : 'Submitted By',
        },
        {
            $Type : 'UI.DataField',
            Value : status_dis,
            Label : 'Status',
            Criticality : status_val,
        },
    ]
);
annotate service.reimbursementheader with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            ID : 'GeneralInformation',
            Target : '@UI.FieldGroup#GeneralInformation',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Reimbursement Details',
            ID : 'ReimbursementDetails',
            Target : 'headItem1/@UI.LineItem#ReimbursementDetails',
        },
    ],
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : reimbursementDate,
                Label : 'Reimbursment Date',
            },
            {
                $Type : 'UI.DataField',
                Value : totalAmount,
                Label : 'Total Amount',
            },
            {
                $Type : 'UI.DataField',
                Value : status_dis,
                Label : 'Status',
            },],
    }
);
annotate service.Files with @(
    UI.LineItem #ReimbursementDetails : [
        {
            $Type : 'UI.DataField',
            Value : files.headItem1.item,
            Label : 'item',
        },{
            $Type : 'UI.DataField',
            Value : files.headItem1.reimbursmentType,
            Label : 'reimbursmentType',
        },{
            $Type : 'UI.DataField',
            Value : files.headItem1.reimbursmentDate,
            Label : 'reimbursmentDate',
        },{
            $Type : 'UI.DataField',
            Value : files.headItem1.amountToBeReimbursed,
            Label : 'amountToBeReimbursed',
        },{
            $Type : 'UI.DataField',
            Value : files.headItem1.amountEligibleToClaim,
            Label : 'amountEligibleToClaim',
        },]
);
annotate service.reimbursementitem with @(
    UI.LineItem #ReimbursementDetails : [
        {
            $Type : 'UI.DataField',
            Value : item,
            Label : 'Item ID',
        },{
            $Type : 'UI.DataField',
            Value : reimbursmentType,
            Label : 'Reimbursement Type',
        },{
            $Type : 'UI.DataField',
            Value : reimbursmentDate,
           Label : 'Reimbursement Date',
        },{
            $Type : 'UI.DataField',
            Value : amountToBeReimbursed,
            Label : 'Amount to be Reimbursed',
        },{
            $Type : 'UI.DataField',
            Value : amountEligibleToClaim,
            Label : 'Amount Eligible to Claim',
        },]
);
annotate service.reimbursementitem with {
    reimbursmentType @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'vluehelp_remtype',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : reimbursmentType,
                    ValueListProperty : 'remType',
                },
            ],
            Label : 'search help',
        },
        Common.ValueListWithFixedValues : true
)};
