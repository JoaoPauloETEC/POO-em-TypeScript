namespace Empresa{
    export class Banco{
        private _codBanco:number;
        private _Nome:string;
        private _clientes:Array<Cliente> = [];
        private _funcionarios:Array<Funcionario> = [];

        public getCodBanco(){
            return this._codBanco;
        }
        public setCodBanco(codigo:number){
            this._codBanco = codigo;
        }

        public getNome(){
            return this._Nome;
        }
        public setNome(Nome:string){
            this._Nome = Nome;
        }

        public getClientes(){
            return this._clientes;
        }
        public addCliente(cliente:Cliente){
            this._clientes.push(cliente);
        }

        public getFuncionarios(){
            return this._funcionarios;
        }
        public addFuncionario(funcionario:Funcionario){
            this._funcionarios.push(funcionario);
        }
    }
}