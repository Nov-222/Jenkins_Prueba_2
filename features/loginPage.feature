Feature: Login

  @Login
  Scenario: Login Exitoso
    Given Estoy en la pagina del login
    When Ingreso los datos correctos, user="standard_user" y password="secret_sauce"
    Then Login Exitoso