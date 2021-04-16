const validadorCpf = require("cpf");

function validaCpf(cpf){
    return validadorCpf.isValid(cpf);
}

module.exports = validaCpf;