
## Build

```sh
docker build -t desafio-fullstack .  
```

## Run

```sh
docker run -p 3000:3000 -d desafio-fullstack
```


## Apis

https://www.getpostman.com/collections/966e45a1a8bb8655c3eb

## BDD


COMO um analista financeiro
DESEJO ver uma lista de clientes inadimplentes
PARA decidir quais ações devo tomar com base na listagem de clientes
Critérios de aceitação
DADO QUE sou um analista financeiro
QUANDO acesso a tela de clientes inadimplentes
ENTÃO é apresentada uma lista de clientes com títulos em atraso
DADO QUE sou um analista financeiro na tela de clientes inadimplentes
QUANDO clico na coluna “Nome do cliente”
ENTÃO a lista de clientes é ordenada com base no nome do cliente
DADO QUE sou um analista financeiro na tela de clientes inadimplentes
QUANDO clico na coluna “Valor”
ENTÃO a lista de clientes é ordenada com base no valor total de inadimplência
DADO QUE sou um analista financeiro na tela de clientes inadimplentes
QUANDO clico na coluna “Desde”
ENTÃO a lista de clientes é ordenada com base na data da primeira inadimplência
DADO QUE sou um analista financeiro na tela de clientes inadimplentes
QUANDO preencho o campo busca
E clico em “Buscar”
ENTÃO a lista de clientes é filtrada com base no texto que digitei no campo de busca

