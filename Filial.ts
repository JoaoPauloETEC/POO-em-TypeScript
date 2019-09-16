namespace Empresa{
    export class Filial{
        private _codFilial:number;
        private _banco:Banco;

        public getCodFilial(){
            return this._codFilial;
        }
        public setCodFilial(codigo:number){
            this._codFilial = codigo;
        }

        public getBanco(){
            return this._banco;
        }
        public setBanco(Banco:Banco){
            this._banco = Banco;
        }
    }
}