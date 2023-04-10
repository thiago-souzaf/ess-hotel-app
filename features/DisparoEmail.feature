Feature: Disparo de email com comprovante
    Scenario: Pagamento com sucesso
        Given Estou logado como “cliente” com nome "José"
        And Estou na página de “métodos de pagamento”
        When O sistema verifica o pagamento de número "123"
        Then Eu recebo um email em "Josecliente@gmail.com" com o comprovante de pedido "123"
        And Aparece a mensagem de pagamento concluído com sucesso

    Scenario: Cartão inválido
        Given Estou logado como “cliente” com nome "Ana"
        And Estou na página de "métodos de pagamento”
        And O cartão de número "123 456 789" não é válido
        When Eu insiro o número de cartão "123 456 789"
        And O sistema verifica o pagamento de número "456"
        Then Eu não devo receber email com comprovante do pedido
        And Aparece a mensagem de erro no pagamento

    Scenario: Saldo insuficiente
        Given Estou logado como “cliente” com nome "Ana"
        And Estou na página de "métodos de pagamento”
        And O cartão  de número "987 654 321" tem saldo "R$0,00"
        When O sistema verifica o pagamento de número "789"
        Then Eu não devo receber email com comprovante do pedido
        And Aparece a mensagem de erro no pagamento
        And O sistema volta para a página de "métodos de pagamento"
