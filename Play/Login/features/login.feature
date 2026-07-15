Feature: Login e navegação na conta

  Scenario: Usuário realiza login e acessa seções da conta
    Given que o usuário acessa o site de automação
    When ele clica em Login e insere credenciais válidas
    Then o login deve ser realizado com sucesso
    And o usuário deve conseguir acessar a seção de Orders
    And o usuário deve conseguir acessar a seção de Downloads
    And o usuário deve conseguir acessar a seção de Addresses
    And o usuário deve conseguir acessar a seção de Account details
    Finally o usuário deve conseguir fazer logout
