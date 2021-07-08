# portfolio-example
Exemplo de portfolio seguindo o tutorial fornecido pelo canal João Carlos Lima e Silva, link: https://www.youtube.com/watch?v=L_JSUkn7LME

## Ícones
:package: Nova funcionalidade
:up: Atualização
:beetle: Correção de bug
:checkered_flag: Release

# Passos Extras
O tutorial não teve continuidade na parte de responsividade da página e nem na parte de adicionar um loader na mesma, garantindo que o CSS estaria carregado antes da exibição do conteúdo.

Por estes motivos, adicionei estas funcionalidades sozinho.

A parte de responsividaed, por mais trabalhosa que seja, não demonstrou muitas dificuldades. Alterar a maneira como o conteúdo é exibido é relativamente simples.
Porém, como esta foi a primeira vez que fiz responsividade, posso não ter escolhido os melhores breakpoints.
Da mesma maneira, é possível refatorar o código para otimizar os breakpoints, e agrupar as instruções por breakpoints, diferente de como está hoje.

A parte do loader foi muito mais fácil de implementar, porém esse demonstrou uma maior dificuldade por necessitar entendimento de Javascript, o que no momento é extremamente limitado para mim. 
De qualquer forma, após encontrar uma maneira de identificar o carregamento da página, foi relativamente simples de implementar mudanças nos atributos de CSS utilizando JS.