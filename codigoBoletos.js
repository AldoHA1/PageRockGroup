$(document).ready(function() {

});
function validar () { 
	var x = $("#idsc").val();
	if(x>=7){
		$("#msjAlerta").text("INGRESE UN ID VALIDO POR FAVOR");
		$("#alerta").show('fade');
		$("#cerrarAlerta").click(function() {
			$("#alerta").hide('fade');
		});
		$("#emails").attr("readonly","readonly");
		$("#passtarjet").attr("readonly","readonly");
		$("#mesaño").attr("readonly","readonly");
		$("#numeroatras").attr("readonly","readonly");
	}else{
		var x = $("#idsc").val();
		var total = 0;
		var cuantos = $("#comprar").val();
		if(x==1){
			total = cuantos* 180;
		}else if(x==2){
			total = cuantos*120;
		}else if(x==3){
			total = cuantos*130;
		}else if(x==4){
			total = cuantos*98;
		}else if(x==5){
			total = cuantos*140;
		}else if(x==6){
			total = cuantos*125;
		}
		$("#TotalPago").val(total);
	}
	

}
 $("#boton1").click(function() {
 	if($("#TotalPago").val()!=0)
 	{
 		$("#hecho").show('fade');
 		$("#msjHecho").text("Gracias por su compra");
 		$("#cerrarHecho").click(function() {
 		$("#hecho").hide('fade');
 	});
 	}else{
 		$("#hecho").show('fade');
 		$("#msjHecho").text("Por favor compre los boletos");
 		$("#cerrarHecho").click(function() {
 		$("#hecho").hide('fade');
 	});
 	}
 });


	$("#cerrarModel").click(function() {
		$("#emails").removeAttr('readonly');
		$("#passtarjet").removeAttr('readonly');
		$("#mesaño").removeAttr('readonly');
		$("#numeroatras").removeAttr('readonly');
		$("#TotalPago").val("");
		$("#alerta").hide('fade');
	});
/*---------------------------------------------------------------------------------------------------------------*/
$("#uno").click(function() {
	$("#idsc").val("1");
});
$("#dos").click(function() {
	$("#idsc").val("2");
});
$("#tres").click(function() {
	$("#idsc").val("3");
});
$("#cuatro").click(function() {
	$("#idsc").val("4");
});
$("#cinco").click(function() {
	$("#idsc").val("5");
});
$("#seis").click(function() {
	$("#idsc").val("6");
});
/*---------------------------------------------------------------------------------------------------------------*/
