import formObjectsPage from "./formObjects.page";

describe("Form completition", () => {
    beforeEach(() => {
        formObjectsPage.visit();
    });

    it("Filling out the form", () => {
        // actions
        formObjectsPage.firstName.type("John");
        formObjectsPage.lastName.type("Doe");
        formObjectsPage.userEmail.type("john.doe@gmail.com");
        formObjectsPage.gender.click();
        formObjectsPage.userNumber.type("1234567890");
        formObjectsPage.dateOfBirth.type("{selectall}28 Feb 1930{enter}");
        formObjectsPage.subjects.type("Economics{enter}");
        formObjectsPage.hobbies.click();
        formObjectsPage.currentAddress.type("24 Tilak Marg");
        formObjectsPage.state.type("NCR{enter}");
        formObjectsPage.city.type("Delhi{enter}");
        formObjectsPage.submit.click();

        // validation
        formObjectsPage.nameCheck.should('have.text', 'John Doe');
        formObjectsPage.emailCheck.should('have.text', 'john.doe@gmail.com');
        formObjectsPage.genderCheck.should('have.text', 'Male');
        formObjectsPage.mobileCheck.should('have.text', '1234567890');
        formObjectsPage.birthDateCheck.should('have.text', '28 February,1930');
        formObjectsPage.subjectCheck.should('have.text', 'Economics');
        formObjectsPage.hobbiesCheck.should('have.text', 'Music');
        formObjectsPage.addressCheck.should('have.text', '24 Tilak Marg');
        formObjectsPage.stateAndCityCheck.should('have.text', 'NCR Delhi');
    });
});