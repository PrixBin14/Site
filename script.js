
function CalcularAmor()
    {
        let nota = document.getElementById("nota").value;
        console.log("Nota inserida: ",nota);

        if (nota >=10) {
            alert("É muito amor!");
        } else if (nota >= 7) {
            alert("É amor!");
        } else {
            alert("Precisamos melhorar!");
        }
        
    }