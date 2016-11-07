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

				var template = "<ul> {{#customers}}" +
				 "<li> Id : {{id}} </li>" +
				 "<li> First name : {{first_name}} </li>" +
				 "<li> Last name : {{last_name}} </li>" +
				 "<li> Company : {{company}} </li>" +
				 "<li> Role : {{role}} </li>" +
				 "<li> Phone : {{phone}} </li>" +
				 "<li> Email : {{email}} </li>" +
				 "<li> Description : {{description}} </li> <br></br>" +
				 "{{/customers}} </ul>";

				 var html = Mustache.to_html(template, response);
				 $('#data').html(html);

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