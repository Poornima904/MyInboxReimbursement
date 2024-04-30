sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'reimform/test/integration/FirstJourney',
		'reimform/test/integration/pages/reimbursementheaderList',
		'reimform/test/integration/pages/reimbursementheaderObjectPage'
    ],
    function(JourneyRunner, opaJourney, reimbursementheaderList, reimbursementheaderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('reimform') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThereimbursementheaderList: reimbursementheaderList,
					onThereimbursementheaderObjectPage: reimbursementheaderObjectPage
                }
            },
            opaJourney.run
        );
    }
);