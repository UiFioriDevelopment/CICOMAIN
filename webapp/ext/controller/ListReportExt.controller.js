sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onInit: function(oEvent) {
            this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ListReport.view.ListReport::ZC_RAP_P_CHECKIN_CHECKOUT--deleteEntry").setVisible(false);
            // this.extensionAPI.attachPageDataLoaded(this._pageDataLoaded.bind(this));
        },

        
    };
});