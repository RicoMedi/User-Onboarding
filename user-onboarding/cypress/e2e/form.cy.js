describe('settings page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

//my list of helpers
    const textInput = () => cy.get('input[name=username]');
    const emailInput= () => cy.get('input[name=email]');
    const passInput= () => cy.get('input[name=password]');
    const clickInput=() => cy.get('input[name=tos]');
    const submitBtn =() => cy.get('input[type=submit]');


//element check 
it("the proper elements are showing", ()=>{
    textInput().should("exist");
    emailInput().should("exist");
    passInput().should("exist");
    clickInput().should("exist");
    submitBtn().should("exist");
})


//get name and change input

it("get and change name", ()=>{
    textInput()
    .should("have.value", "")
    .type("RickyRick")
    .should("have.value", "RickyRick");

})

it("get and change email", () =>{
    emailInput()
    .should("have.value", "")
    .type("bigBear@gmaa.com")
    .should("have.value", "bigBear@gmaa.com");

})

it("update password ",() =>{
    passInput()
    .should("have.value", "")
    .type("cowboysRule")
    .should("have.value", "cowboysRule");
})

it("click box", () => {
    clickInput()
    .click();
})

it("Submit user forms", () => {
    
    textInput()
    .should("have.value", "")
    .type("RickyRick")
    emailInput()
    .should("have.value", "")
    .type("bigBear@gmaa.com")
    passInput()
    .should("have.value", "")
    .type("cowboysRule")
    clickInput()
    .click();
    submitBtn()
    .click();

})
 it("testing form validation", ()=> {
    textInput()
    .type("oo")
    .clear()
    emailInput()
    .should("have.value", "")
    .type("bigBea")
    .clear()
    passInput()
    .should("have.value", "")
    .type("cowbe")
    .clear()
    clickInput()
    .click()
    .uncheck()

    

 })


})