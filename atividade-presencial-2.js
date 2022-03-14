const alunos = 14;

for (let i = 0; i <= alunos; i++) {
    if (i == 0) {
        console.log("Número zero")
    } else if (i % 2 == 0) {
        console.log("par: " + i)
    } else {
        console.log("O número é impar " + i)
    }
}