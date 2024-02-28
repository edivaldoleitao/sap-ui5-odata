sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        funcao3: function(oEvent) {
            MessageToast.show("butao header.");
        },
        funcao4: function(oEvent) {
        MessageToast.show("butao session");
        }
    };
});