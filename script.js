function CalcularAmor() {
    let nota = document.getElementById("nota").value;
    console.log("Nota inserida: ", nota);

    if (nota >= 10) {
        Swal.fire({
            title: 'É muito amor!',
            text: 'Vocês foram feitos um para o outro!',
            imageUrl: 'vetor.png', // Aqui entra sua imagem
            imageWidth: 150,
            imageHeight: 'auto',
            imageAlt: 'Ícone de Amor',
            background: 'rgb(252, 227, 231)',
            confirmButtonColor: '#5f1138'
        });
    } else if (nota >= 7) {
        Swal.fire({
            title: 'É amor!',
            text: 'O sentimento é real!',
            imageUrl: 'vetor.png',
            imageWidth: 100,
            background: 'rgb(252, 227, 231)',
            confirmButtonColor: '#5f1138'
        });
    } else {
        Swal.fire({
            title: 'Hum...',
            text: 'Precisamos melhorar!',
            icon: 'info',
            background: 'rgb(252, 227, 231)',
            confirmButtonColor: '#5f1138'
        });
    }
}