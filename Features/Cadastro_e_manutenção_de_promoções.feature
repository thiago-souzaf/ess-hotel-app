scenario: escolher primeira oferta da lista 
    Given eu estou na página "visualizar descontos"
    and vejo as opções em "Descontos no precinho"
    when seleciono o primeiro desconto da lista "Descontos no precinho"
    then eu sou redirecionado para "página da atração" daquele desconto

scenario: escolher oferta relâmpago
    Given eu estou na página "visualizar descontos"
    and vejo as opções em "Ofertas relâmpago"
    when seleciono o desconto escrito "Oferta Relâmpago"
    then eu sou redirecionado para "página da atração" da "Oferta Relâmpago"

scenario: ordenar ofertas pelo menor preço
    Given eu estou na página "visualizar descontos"
    and eu vejo "Ordenar por:" em "Filtrar"
    when eu seleciono a opção "Duração da promoção" em "ordenar por:"
    then eu visualizo "Descontos no precinho"
    and eu vejo Uma lista de descontos pelos menores preços

Scenario: Não possui promoção desejada 
    Given Estou na página "descontos"
    When Seleciono a data "18/05"
    And Não existem descontos no dia "Disponível em:"
    Then Nenhuma oferta foi exibida
    And Preciso escolher outra data