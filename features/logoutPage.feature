Feature: Logout

  @Logout
  Scenario: Logout Exitoso
    Given Estoy en la pagina del login
    When Ingreso los datos correctos, user="standard_user" y password="secret_sauce"
    When Navego a la barra de opciones
    Then Realizo logout