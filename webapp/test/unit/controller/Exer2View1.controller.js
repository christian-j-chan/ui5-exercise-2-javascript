/*global QUnit*/

sap.ui.define([
	"ui5jsexercise/controller/Exer2View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Exer2View1 Controller");

	QUnit.test("I should test the Exer2View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
