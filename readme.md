# **🤖 Automação de Comentários com Puppeteer**

Um tempo atraz eu quis participar de um sorteio no Instagram, onde cada comentário aumentava aumentava em 1x a chance de ganhar. Comecei animado e comentando manualmente, e repetindo de novo e de novo durante horas, e assim depois de 2 dias não queria nem ver mais um campo de comentário do insta.

Daí veio a ideia:

>"Vou fazer um bot para comentar automaticamente"

No comoço, quis fazer tudo pelo Vanilla Js, mas não deu certo, logo os meios de segurança do instagram bloquearam meus comentários.

Vi que a forma como estava comentando era extremamente ineficiente, pois um Humano nunca comentária rápido como o bot estava fazendo e vi que logo seria bloqueado de novo.

Então pesquisei e encontrei o `Puppeteer`, e vi que poderia automatizar a navegação de uma forma mais humana.

# ✖️ Puppeteer

Para obter o Puppeteer é simples, basta adiciona-lo no seu projeto usando:

```
 npm install puppeteer
```

ou

```
 yarn add Puppeteer
  ```

OBS: Para mais informações basta acessar a documentação oficila do puppeteer.

![https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

https://github.com/puppeteer/puppeteer 

# **ℹ️ Como Utilizar**

Primeiro, basta atualizar as credenciais de login:
~~~javascript
const user = 'example@example.com' // Seu usuário no instagram
const password = '12345678' // Sua senha de login no instagram
~~~
O proximo passo é adicionar a mensagem que será comentada, o link do post para comentar e a quantidade de comentários que deja fazer.
~~~javascript
const message = 'Example message XD' // Seu comentário
const postLink = 'https://www.instagram.com/examplepost/' // O link do post para comentar
const amountComents = 50 // A quantidade de comentário que deja enviar.
~~~
Depois é fácil, acesse o terminal na pasta em que você fez o clone do projeto e digite:

```
node index.js
``` 
E pronto o Script fará tudo daqui em diante 😉.

------
