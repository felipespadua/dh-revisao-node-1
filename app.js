const fs = require("fs");
const validaCpf = require("./validaCpf");
const cpfs = fs.readFileSync("./dados.txt", "utf-8");

const cpfList = cpfs.split(",");

cpfList.forEach(cpf => {
    if(validaCpf(cpf)){
        fs.writeFileSync("retorno.txt",`${cpf} ==> CPF Válido!!\n`, { encoding: "utf-8", flag: "a" })
    } else {
        fs.writeFileSync("retorno.txt",`${cpf} ==> CPF Não Válido!!\n`, { encoding: "utf-8", flag: "a" })
    }
    
})



