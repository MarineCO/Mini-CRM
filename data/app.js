(function() {
	"use strict";

	var app = {

		url: "http://192.168.1.114:3003/",
		json: "crm.json",


		init: function() {
			this.getDataCustom();
			this.listeners();
		},

		listeners: function() {
			$('#check').on('click', this.btnClick);
		},

		getDataCustom: function() {
			$.ajax(this.url + this.json)
			.done(this.dataDone)
			.fail(this.fail);
		},

		dataDone: function(response) {
			for (var i = 0; i < response.customers.length; i++) {
				var info = response.customers[i];
				var id = info.id;

				$('#data').append('<ul data-id="'+id+'">' +
				 '<li>' + 'Id :' + info.id + '</li>' +
				 '<li>' + 'First name :' + info.first_name + '</li>' +
				 '<li>' + 'Last name :' + info.last_name + '</li>' +
				 '<li>' + 'Company :' + info.company + '</li>' +
				 '<li>' + 'Role :' + info.role + '</li>' +
				 '<li>' + 'Phone :' + info.phone + '</li>' +
				 '<li>' + 'Email :' + info.email + '</li>' +
				 '<li>' + 'Description :' + info.description + '</li>' +
				  '</ul>');
			}
		},

		fail: function() {
			console.log('fail');
		},

		btnClick: function() {
			console.log('yep');
		},
	};

	$(document).ready(function() {
		app.init();
	});
})();