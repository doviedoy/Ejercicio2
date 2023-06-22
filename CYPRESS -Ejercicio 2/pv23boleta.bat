@echo off

cls
npx cypress run --browser chrome --env rucqa=72126234,obsqa=pruebaconCypress,trazaqa=%1 --spec 'cypress/e2e/smokeBoletaPV.cy.js'
