$(document).ready(function(){
	$.getJSON("http://json-data.herokuapp.com/forms", function(data){
		var htmlStr = ""

		data.forEach(function(field ){
			if (field.type === 'text' || field.type === 'email' || field.type === 'tel') {
				htmlStr +=  `<div class="form"><i class="fa ${field.icon}" aria-hidden="true"></i>
				<input type="${field.type}" placeholder="${field.label}" id="${field.id}" /></div>`
			}
			if (field.type === 'select') {
				htmlStr += `<select id="${field.id}">
					<option value=''>${field.label}</option></div>`

				field.options.forEach(function(option){
				htmlStr += `<option value="${option.value}">${option.label}</option>`
				})

				htmlStr += `</select>`
			}
			if (field.type === 'textarea') {
				htmlStr += `<div class="textareas">
											<i class="fa ${field.icon}" aria-hidden="true"></i><textarea id="${field.id}" placeholder="${field.label}"></textarea>
										</div>`
			}
		})
		$("#app").html(htmlStr)
	})
})
