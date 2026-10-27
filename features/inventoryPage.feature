Feature: Inventario de Productos

  @Inventario
  Scenario: Verificar las 6 cajas de productos
    Given Estoy en la pagina del login
    When Ingreso los datos correctos, user="standard_user" y password="secret_sauce"
    Then Deberian verse 6 productos en la tienda