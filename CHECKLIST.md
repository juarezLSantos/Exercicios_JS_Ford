# Setup inicial de um repositorio do githubno visual studio code local

1-Limpar credenciais  do sistema
2-Limpar os dados donavegador
3-Abrir o repositorio no github
4-Copiar a url do repositorio (HTTPS)
5-Abrie o VS Code
6-Se houver algum projeto aberto no VS Code, entao feche (CTRL + K F) 
7-Se houver algum usuario logado no VS Code, entao clique 'Sair'
8-Verifique as variaveis `User.name`e `User.email`globais:
~~~git
git config --global user.name
git config --global user.email
~~~
9- Se as variaveis retornarem algum valor, redefina ambas as variaveis:
~~~bash
git config --global unset user.name
git config --global --unset user.email
~~~
10-Faça a clonagem do repositorio no computador local:
~~~bash
git clone https://github.com/<usuario>/<repositorio>.git
~~~
11-Abra o projeto lonado no VS Code:
~~~bash
code -r<repositorio_local>/
~~~
12-Faça login no VS Code local para sincronizar suas extensões e temas
13-Ative o salvamento automatico _(Auto Save)_:Arquivo> Salvamento