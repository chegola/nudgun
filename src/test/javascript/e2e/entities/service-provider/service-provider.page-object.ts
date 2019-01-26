import { element, by, ElementFinder } from 'protractor';

export class ServiceProviderComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-service-provider div table .btn-danger'));
    title = element.all(by.css('jhi-service-provider div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ServiceProviderUpdatePage {
    pageTitle = element(by.id('jhi-service-provider-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    profile_picInput = element(by.id('field_profile_pic'));
    servicesInput = element(by.id('field_services'));
    addressInput = element(by.id('field_address'));
    phoneInput = element(by.id('field_phone'));
    emailInput = element(by.id('field_email'));
    facebookInput = element(by.id('field_facebook'));
    instragramInput = element(by.id('field_instragram'));
    acceptCreditCardInput = element(by.id('field_acceptCreditCard'));
    parkingAvailableInput = element(by.id('field_parkingAvailable'));
    descriptionInput = element(by.id('field_description'));
    serviceStartInput = element(by.id('field_serviceStart'));
    serviceEndInput = element(by.id('field_serviceEnd'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async setProfile_picInput(profile_pic) {
        await this.profile_picInput.sendKeys(profile_pic);
    }

    async getProfile_picInput() {
        return this.profile_picInput.getAttribute('value');
    }

    async setServicesInput(services) {
        await this.servicesInput.sendKeys(services);
    }

    async getServicesInput() {
        return this.servicesInput.getAttribute('value');
    }

    async setAddressInput(address) {
        await this.addressInput.sendKeys(address);
    }

    async getAddressInput() {
        return this.addressInput.getAttribute('value');
    }

    async setPhoneInput(phone) {
        await this.phoneInput.sendKeys(phone);
    }

    async getPhoneInput() {
        return this.phoneInput.getAttribute('value');
    }

    async setEmailInput(email) {
        await this.emailInput.sendKeys(email);
    }

    async getEmailInput() {
        return this.emailInput.getAttribute('value');
    }

    async setFacebookInput(facebook) {
        await this.facebookInput.sendKeys(facebook);
    }

    async getFacebookInput() {
        return this.facebookInput.getAttribute('value');
    }

    async setInstragramInput(instragram) {
        await this.instragramInput.sendKeys(instragram);
    }

    async getInstragramInput() {
        return this.instragramInput.getAttribute('value');
    }

    getAcceptCreditCardInput() {
        return this.acceptCreditCardInput;
    }
    getParkingAvailableInput() {
        return this.parkingAvailableInput;
    }
    async setDescriptionInput(description) {
        await this.descriptionInput.sendKeys(description);
    }

    async getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    async setServiceStartInput(serviceStart) {
        await this.serviceStartInput.sendKeys(serviceStart);
    }

    async getServiceStartInput() {
        return this.serviceStartInput.getAttribute('value');
    }

    async setServiceEndInput(serviceEnd) {
        await this.serviceEndInput.sendKeys(serviceEnd);
    }

    async getServiceEndInput() {
        return this.serviceEndInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class ServiceProviderDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-serviceProvider-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-serviceProvider'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
