Feature: Carrito de Compras

  @Cart
  Scenario: Navegar al carrito despues de agregar un producto
    Given Estoy en la pagina del login
    When Ingreso los datos correctos, user="standard_user" y password="secret_sauce"
    When Agrego un producto y voy al carrito
    Then Deberia estar en la pagina del carrito "https://www.saucedemo.com/cart.html"