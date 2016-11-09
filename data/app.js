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

			var lastname = $('#lastname').val();
			var firstname = $('#firstname').val();
			var company = $('#company').val();
			var role = $('#role').val();
			var phone = $('#phone').val();
			var email = $('#email').val();
			var description = $('#description').val();

			$.ajax({
				url: 'http://192.168.1.114:3003/createCustomer',
				type: 'POST',
				data: {
					'last_name' : lastname,
					'first_name' : firstname,
					'company' : company,
					'role' : role,
					'phone': phone,
					'email' : email,
					'description' : description
				},
				dataType: 'html'
			})
			.done(function() {
				console.log('réussi');
			})
			.fail(function() {
				console.log('raté');
			});
		}
	};

	$(document).ready(function() {
		app.init();
	});
})();