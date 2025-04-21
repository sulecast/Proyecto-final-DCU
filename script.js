document.getElementById("login-btn").addEventListener("click", function() {
	window.location.href = "estructura.html";
});
document.getElementById("formulario").addEventListener("submit", function(event) {
	event.preventDefault();
  
	var titleInput = document.getElementById("title").value;
	var SubjectInput= document.getElementById("subject").value;
	var dateInput = document.getElementById("date").value;
	var timeInput = document.getElementById("time").value;
	var descriptionInput = document.getElementById("description").value;
  
	var tbody = document.querySelector("#tabla tbody");
	var fila = document.createElement("tr");
	var celda1 = document.createElement("td");
	var celda2 = document.createElement("td");
	var celda3 = document.createElement("td");
	var celda4 = document.createElement("td");
	var celda5 = document.createElement("td");

  
	celda1.textContent = titleInput;
	celda2.textContent = SubjectInput;
	celda3.textContent = dateInput;
	celda4.textContent = timeInput;
	celda5.textContent = descriptionInput;
  
	fila.appendChild(celda1);
	fila.appendChild(celda2);
	fila.appendChild(celda3);
	fila.appendChild(celda4);
	fila.appendChild(celda5);
  
	tbody.appendChild(fila);
	document.getElementById("tabla").style.display = "table";
  
	document.getElementById("limpiar").addEventListener("click", function(event) {
	  event.preventDefault();
	  document.getElementById("formulario").reset();
	});
  });
  