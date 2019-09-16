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
///<reference path="IConta.ts"/>
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
        Cliente.prototype.getBanco = function () {
            return this._banco;
        };
        Cliente.prototype.setBanco = function (banco) {
            this._banco = banco;
        };
        Cliente.prototype.mostraConta = function (codCliente) {
            return codCliente + " Sua conta";
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
        Funcionario.prototype.getBanco = function () {
            return this._banco;
        };
        Funcionario.prototype.setBanco = function (banco) {
            this._banco = banco;
        };
        return Funcionario;
    }(Empresa.Pessoa));
    Empresa.Funcionario = Funcionario;
})(Empresa || (Empresa = {}));
var Empresa;
(function (Empresa) {
    var Banco = /** @class */ (function () {
        function Banco() {
            this._clientes = [];
            this._funcionarios = [];
        }
        Banco.prototype.getCodBanco = function () {
            return this._codBanco;
        };
        Banco.prototype.setCodBanco = function (codigo) {
            this._codBanco = codigo;
        };
        Banco.prototype.getNome = function () {
            return this._Nome;
        };
        Banco.prototype.setNome = function (Nome) {
            this._Nome = Nome;
        };
        Banco.prototype.getClientes = function () {
            return this._clientes;
        };
        Banco.prototype.addCliente = function (cliente) {
            this._clientes.push(cliente);
        };
        Banco.prototype.getFuncionarios = function () {
            return this._funcionarios;
        };
        Banco.prototype.addFuncionario = function (funcionario) {
            this._funcionarios.push(funcionario);
        };
        return Banco;
    }());
    Empresa.Banco = Banco;
})(Empresa || (Empresa = {}));
var Empresa;
(function (Empresa) {
    var Filial = /** @class */ (function () {
        function Filial() {
        }
        Filial.prototype.getCodFilial = function () {
            return this._codFilial;
        };
        Filial.prototype.setCodFilial = function (codigo) {
            this._codFilial = codigo;
        };
        Filial.prototype.getBanco = function () {
            return this._banco;
        };
        Filial.prototype.setBanco = function (Banco) {
            this._banco = Banco;
        };
        return Filial;
    }());
    Empresa.Filial = Filial;
})(Empresa || (Empresa = {}));
///<reference path="Pessoa.ts"/>
///<reference path="Cliente.ts"/>
///<reference path="Funcionario.ts"/>
///<reference path="Filial.ts"/>
///<reference path="Banco.ts"/>
var Empresa;
(function (Empresa) {
    //Instanciando Classe;
    var banco = new Empresa.Banco();
    banco.setNome("NuBank");
    banco.setCodBanco(1);
    var cliente = new Empresa.Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCPF("498.270.898-38");
    cliente.setIdade(19);
    cliente.setCredito(2000);
    cliente.setBanco(banco);
    var cliente2 = new Empresa.Cliente();
    cliente2.setNome("Mamãe");
    cliente2.setCodCliente(2);
    cliente2.setCPF("345.123.678-34");
    cliente2.setIdade(36);
    cliente2.setCredito(3000);
    cliente2.setBanco(banco);
    document.getElementById('codigo').textContent = cliente.getCodCliente().toString();
    document.getElementById('nome').textContent = cliente.getNome();
    document.getElementById('idade').textContent = cliente.getIdade().toString();
    document.getElementById('cpf').textContent = cliente.getCPF();
    document.getElementById('credito').textContent = cliente.getCredito().toString();
    document.getElementById('banco').textContent = cliente.getBanco().getNome();
    document.getElementById('conta').textContent = cliente.mostraConta(cliente.getCodCliente()).toString();
    banco.addCliente(cliente);
    banco.addCliente(cliente2);
    document.getElementById("clica").addEventListener("click", function () {
        banco.getClientes().forEach(function (element) {
            alert("Cliente: " + element.getNome() + " Banco: " + element.getBanco().getNome());
        });
    });
})(Empresa || (Empresa = {}));
