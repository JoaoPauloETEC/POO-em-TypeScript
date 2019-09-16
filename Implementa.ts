///<reference path="Pessoa.ts"/>
///<reference path="Cliente.ts"/>
///<reference path="Funcionario.ts"/>
///<reference path="Filial.ts"/>
///<reference path="Banco.ts"/>
namespace Empresa{
    //Instanciando Classe;
    let banco = new Banco();
    banco.setNome("NuBank");
    banco.setCodBanco(1);

    let cliente = new Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCPF("498.270.898-38");
    cliente.setIdade(19);
    cliente.setCredito(2000);
    cliente.setBanco(banco);

    let cliente2 = new Cliente();
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

    banco.addCliente(cliente);
    banco.addCliente(cliente2);

    document.getElementById("clica").addEventListener("click",function(){
        banco.getClientes().forEach(element => {
            alert("Cliente: "+element.getNome() + " Banco: "+element.getBanco().getNome());
        });
    });
}