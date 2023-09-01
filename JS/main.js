$(document).ready(function() {
    $("#btnRFC").click(function(e) {
        e.preventDefault(); // Evitar el envío del formulario
        
        var nombre = $("#nombreInp").val().toUpperCase();
        var apePaterno = $("#apePaInp").val().toUpperCase();
        var apeMaterno = $("#apeMaInp").val().toUpperCase();
        var fechaNacimiento = $("#dateInp").val().split("-").join("").slice(2);
        
        var rfc = apePaterno[0] + obtenerPrimeraVocal(apePaterno) + apeMaterno[0] + nombre[0] + fechaNacimiento;
        $("#RFC").val(rfc);
    });

    $("#btnAPI").click(function() {
        var idAPI = $("#searchid").val();
        var apiUrl = "https://jsonplaceholder.typicode.com/users/" + idAPI;

        $.ajax({
            url: apiUrl,
            method: "GET",
            dataType:"json",

            success: function(data) {
              var name = data.name;
              var email = data.email;
              $("#nombreAPI").val(name);
              $("#emailAPI").val(email);
            },
            error: function(xhr, status, error) {
              console.log("Error al obtener los datos:", error);
            }
        });
    });
});

function obtenerPrimeraVocal(palabra) {
    var vocales = "AEIOU";
    for (var i = 1; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
        return palabra[i];
        }
    }
    return false;
  }