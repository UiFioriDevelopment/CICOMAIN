sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onInit: function (oEvent) {
            // MessageToast.show("Custom handler invoked.");
            this.extensionAPI.attachPageDataLoaded(this._pageDataLoaded.bind(this));
        },

        _pageDataLoaded: function (oEvt) {
            var curObj = oEvt.context.getObject();
            if (curObj.Status === "CONFIRMED") {
                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--edit").setVisible(false);

                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--delete").setVisible(false);

                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--action::cds_zui_c_rap_s_checkin_checkout.cds_zui_c_rap_s_checkin_checkout_Entities::reprocessIncompleteOrders").setVisible(false);
            }else if(curObj.Status === "INCOMPLETE"){
                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--edit").setVisible(true);

                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--delete").setVisible(true);

                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--action::cds_zui_c_rap_s_checkin_checkout.cds_zui_c_rap_s_checkin_checkout_Entities::reprocessIncompleteOrders").setVisible(true);
            }else{
                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--edit").setVisible(true);

                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--delete").setVisible(true);

                this.byId("com.nttdata.acumed.rapcicomain::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_RAP_P_CHECKIN_CHECKOUT--action::cds_zui_c_rap_s_checkin_checkout.cds_zui_c_rap_s_checkin_checkout_Entities::reprocessIncompleteOrders").setVisible(false);
            }
        }
    };
});