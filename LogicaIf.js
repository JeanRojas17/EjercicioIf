var salarioInicial, aumento = 0, salarioFinal;
aumento = parseInt(aumento);
salarioInicial = parseInt(prompt("Ingrese el salario del empleado: "));

if (salarioInicial < 1300606) {
    aumento = salarioInicial * 0.15;
} else {
    aumento = aumento
}

salarioFinal = salarioInicial + aumento;
alert("El salario con ajuste es de: "+salarioFinal);