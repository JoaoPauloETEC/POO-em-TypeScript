var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getIdade = function () {
            return this._idade;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this._idade = idade;
        };
        Pessoa.prototype.getCPF = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCPF = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
})(empresa || (empresa = {}));
