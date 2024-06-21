## Requisitos

A fim de auxiliar o usuário para que o cálculo do orçamento seja feito automaticamente
através do sistema desenvolvido, o sistema deve permitir que:

A tela deve conter os seguintes campos para análise orçamentária
- Deve conter um campo para inserir os dados do consumo de filamento (Valor do kg do filamento e Quantidade de material usado)
- Deve conter um campo para inserir os dados do consumo de energia elétrica(Potência da impressora, Tempo de impressão, taxa de energia distribuida)
- Deve conter um campo para inserir a margem de lucro desejada

Os calculos do orçamento do projeto da impressora 3d devem ser atendidos da seguinte maneira:
- Consumo de filamento
 a. Filamento por grama ->  preço do filamento/peso do filamento
 b. Custo total do filamento -> peso do filamento utilizado * Custo por grama
- Consumo de energia
 a. Consumo de energia durante impressão -> Potência da impressora * Tempo de impressão/1000
 b. Custo total de energia -> Consumo de energia * custo por kWh
- Margem de Lucro
 a. Preço Final -> Custo total + (Custo total * Margem de lucro) //Custo total seria a soma das despesas(consumo de filamento + energia eletrica)

---

## Todo List

- [x] Configurar o projeto
- [ ] Entregar o calculo de filamento
- [ ] Entregar o calculo de energia
- [ ] Entregar o calculo de lucro/total

