sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sampleemail.controller.View1", {
			onInit: function () {

			},
			onSendMail: function () {
			var that = this;
			Email.send({
				Host: "smtp.elasticemail.com",
				Username: "knonidayal@gmail.com",
				Password: "B595D35BDA4783A4799D5C224C5A4577DB1B",
				To: "nonidalal32@gmail.com",
				From: "knonidayal@gmail.com",
				Subject: "Selected tab is " +
					that.getView().byId("idIconTabBarNoIcons").getSelectedKey(),
				Body: "And this is the body",
			}).then((message) => alert(message));
		}
		});
	});
