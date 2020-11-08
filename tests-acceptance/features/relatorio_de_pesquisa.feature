Feature: As an employer
         I want to see the company statistics 
         So that I can improve the company efficiecy

Scenario: Generate general graph
Given I'm in page "Geral"
And I see a option of "Generate general graph"
When I ask to the system to generate a graph with the general data of the company
Then I'm redirected to the page "Relatorio de Pesquisa"
And I can visualize the graphic data of the company, like: "Tipo Pneus", "Tipo Veiculos", "Problemas Pneus", "Problemas Veiculo", "Historico de Registros e Remoções"

