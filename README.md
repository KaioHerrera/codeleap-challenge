# CodeLeap Fullstack Challenge

Este projeto foi desenvolvido como parte de um processo seletivo, contendo um frontend em React e um backend em Django (com DRF).

## Como rodar localmente (com Docker)

Este projeto é 100% "dockerizado" para garantir a execução em qualquer máquina com um único comando.

**Pré-requisitos:**
* Git
* Docker Desktop

**Passos:**

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/KaioHerrera/codeleap-challenge.git](https://github.com/KaioHerrera/codeleap-challenge.git)
    ```

2.  Acesse a pasta do projeto:
    ```bash
    cd codeleap-challenge
    ```

3.  Inicie os containers:
    ```bash
    docker-compose up -d
    ```

4.  Pronto!
    * **Frontend** estará rodando em: `http://localhost:5173`
    * **Backend** estará rodando em: `http://localhost:8000/careers/`

Para parar tudo, rode: `docker-compose down`

## Deploy

* **Frontend (Vercel):** https://codeleap-challenge-omega.vercel.app/
* **Backend (Render):** https://codeleap-challenge-d2w2.onrender.com/

> **Nota Importante:** O backend está hospedado no plano gratuito do Render. Após um período de inatividade (15 min), ele "dorme". **A primeira requisição para carregar os posts pode demorar de 30 a 60 segundos**

## Funcionalidades

* Backend completo em Django e DRF
* CRUD completo (Criar, Ler, Atualizar, Deletar posts)
* Autenticação de "username" (via frontend)
* Código componentizado (Botões, Inputs, Cards)
* Dark mode (modo escuro)
* Indicadores de loading
* Totalmente responsivo
