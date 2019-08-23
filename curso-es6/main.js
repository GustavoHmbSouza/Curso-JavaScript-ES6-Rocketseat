class Lista
{
    constructor()
    {
        this.data = [];
    }

    add(data)
    {
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends Lista
{
    constructor()
    {
        super();

        this.usuario = "Gustavo Souza";
    }

    mostraUsuario()
    {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick =
function()
{
    MinhaLista.add("Um novo");
}

document.getElementById('Usuario').onclick =
function()
{
    MinhaLista.mostraUsuario();
}

class Matematica
{
    static soma(a, b)
    {
        return a + b;
    }
}

document.getElementById('soma').onclick =
function()
{
    console.log(Matematica.soma(2,3));
}