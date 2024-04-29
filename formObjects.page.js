class formObjectsPage {
    static get url() {
        return "https://demoqa.com/automation-practice-form/";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get gender() {
        return cy.get("[for='gender-radio-1']");
    }

    static get userNumber() {
        return cy.get("#userNumber");
    }

    static get dateOfBirth() {
        return cy.get("#dateOfBirthInput");
    }

    static get subjects() {
        return cy.get(".subjects-auto-complete__value-container");
    }

    static get hobbies() {
        return cy.get("[for='hobbies-checkbox-3']");
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }

    static get state() {
        return cy.get("#state");
    }

    static get city() {
        return cy.get("#city");
    }

    static get submit() {
        return cy.get("#submit");
    }

    static get nameCheck() {
        return cy.get('table.table tbody tr:contains("Student Name") td:nth-child(2)');
    }

    static get emailCheck() {
        return cy.get('table.table tbody tr:contains("Student Email") td:nth-child(2)');
    }

    static get genderCheck() {
        return cy.get('table.table tbody tr:contains("Gender") td:nth-child(2)');
    }

    static get mobileCheck() {
        return cy.get('table.table tbody tr:contains("Mobile") td:nth-child(2)');
    }

    static get birthDateCheck() {
        return cy.get('table.table tbody tr:contains("Date of Birth") td:nth-child(2)');
    }

    static get subjectCheck() {
        return cy.get('table.table tbody tr:contains("Subjects") td:nth-child(2)');
    }

    static get hobbiesCheck() {
        return cy.get('table.table tbody tr:contains("Hobbies") td:nth-child(2)');
    }

    static get addressCheck() {
        return cy.get('table.table tbody tr:contains("Address") td:nth-child(2)');
    }

    static get stateAndCityCheck() {
        return cy.get('table.table tbody tr:contains("State and City") td:nth-child(2)');
    }
}

export default formObjectsPage;