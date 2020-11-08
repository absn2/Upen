import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);


defineSupportCode(function ({ Given, When, Then}) {

    Given(/^I'm in page "Geral"$/, async () => {
        await browser.get("http://localhost:4200");
        await expect(browser.getTitle()).to.eventually.equal('Upen');
    })

    Given(/^I see a option of "Generate general graph"$/, async () => {
        await $("a[name='dashboard']").click();
    });

    When(/^I ask to the system to generate a graph with the general data of the company$/, async () => {
        await $("a[name='dashboard']").click();
    });

    Then(/^I'm redirected to the page "Relatorio de Pesquisa"$/, async () => {
        await expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:4200/dashboard');
    });
   

    Then(/^I can visualize the graphic data of the company, like: "Tipo Pneus", "Tipo Veiculos", "Problemas Pneus", "Problemas Veiculo", "Historico de Registros e Remoções"$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal('Upen');
    });
})
