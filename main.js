var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Empresa;
(function (Empresa) {
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
    Empresa.Pessoa = Pessoa;
})(Empresa || (Empresa = {}));
///<reference path="Pessoa.ts"/>
var Empresa;
(function (Empresa) {
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cliente.prototype.getCodCliente = function () {
            return this._codCliente;
        };
        Cliente.prototype.setCodCliente = function (codigo) {
            this._codCliente = codigo;
        };
        Cliente.prototype.getCredito = function () {
            return this._credito;
        };
        Cliente.prototype.setCredito = function (credito) {
            this._credito = credito;
        };
        return Cliente;
    }(Empresa.Pessoa));
    Empresa.Cliente = Cliente;
})(Empresa || (Empresa = {}));
///<reference path="Pessoa.ts"/>
var Empresa;
(function (Empresa) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        Funcionario.prototype.setCodFuncionario = function (codigo) {
            this._codFuncionario = codigo;
        };
        Funcionario.prototype.getSetor = function () {
            return this._setor;
        };
        Funcionario.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        return Funcionario;
    }(Empresa.Pessoa));
    Empresa.Funcionario = Funcionario;
})(Empresa || (Empresa = {}));
///<reference path="Pessoa.ts"/>
///<reference path="Cliente.ts"/>
///<reference path="Funcionario.ts"/>
var Empresa;
(function (Empresa) {
    //Instanciando Classe;
    var cliente = new Empresa.Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCPF("498.270.898-38");
    cliente.setIdade(19);
    cliente.setCredito(2000);
    document.getElementById('codigo').textContent = cliente.getCodCliente().toString();
    document.getElementById('nome').textContent = cliente.getNome();
    document.getElementById('idade').textContent = cliente.getIdade().toString();
    document.getElementById('cpf').textContent = cliente.getCPF();
    document.getElementById('credito').textContent = cliente.getCredito().toString();
})(Empresa || (Empresa = {}));
