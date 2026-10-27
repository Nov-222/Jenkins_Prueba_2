Feature: Ordenar Productos

  @Sort
  Scenario: Ordenar de menor a mayor precio
    Given Estoy en la pagina del login
    When Ingreso los datos correctos, user="standard_user" y password="secret_sauce"
    When Selecciono la opcion de ordenar de mas barato a mas caro
    Then El primer producto debe costar "$7.99"