(function() {
	"use strict";

	var app = {

		url: "http://192.168.1.6:3003/",
		json: "crm.json",


		init: function() {
			this.getDataCustom();
			this.listeners();
		},

		listeners: function() {
			$('#check').on('click', this.btnClick);
			$('form').on('submit', function(event) {
				event.preventDefault();
			});
		},

		getDataCustom: function() {
			$.ajax(this.url + this.json)
			.done(this.dataDone)
			.fail(this.fail);
		},

		dataDone: function(response) {
			//boucle for remplacée par utilisation Mustache.js
				var template = "<ul> {{#customers}}" +
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
			//récup contenu input
			var lastname = $('#lastname').val();
			var firstname = $('#firstname').val();
			var phone = $('#phone').val();
			var email = $('#email').val();
			var description = $('#description').val();
			console.log(lastname);

			//envoyer ce que j'ai récup ds input au server
			$.post({
				url: 'http://192.168.1.6:3003/createCustomer', 
				dataType: 'text',
				response: {
					last_name: $('#lastname').val(),
					first_name: $('#firstname').val(),
					phone: $('#phone').val(),
					email:$('#email').val(),
					description: $('#description').val()
				}
			});
		}
	};

	$(document).ready(function() {
		app.init();
	});
})();