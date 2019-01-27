/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ServiceProviderComponentsPage, ServiceProviderDeleteDialog, ServiceProviderUpdatePage } from './service-provider.page-object';

const expect = chai.expect;

describe('ServiceProvider e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let serviceProviderUpdatePage: ServiceProviderUpdatePage;
    let serviceProviderComponentsPage: ServiceProviderComponentsPage;
    let serviceProviderDeleteDialog: ServiceProviderDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ServiceProviders', async () => {
        await navBarPage.goToEntity('service-provider');
        serviceProviderComponentsPage = new ServiceProviderComponentsPage();
        expect(await serviceProviderComponentsPage.getTitle()).to.eq('nudgunApp.serviceProvider.home.title');
    });

    it('should load create ServiceProvider page', async () => {
        await serviceProviderComponentsPage.clickOnCreateButton();
        serviceProviderUpdatePage = new ServiceProviderUpdatePage();
        expect(await serviceProviderUpdatePage.getPageTitle()).to.eq('nudgunApp.serviceProvider.home.createOrEditLabel');
        await serviceProviderUpdatePage.cancel();
    });

    it('should create and save ServiceProviders', async () => {
        const nbButtonsBeforeCreate = await serviceProviderComponentsPage.countDeleteButtons();

        await serviceProviderComponentsPage.clickOnCreateButton();
        await promise.all([
            serviceProviderUpdatePage.setNameInput('name'),
            serviceProviderUpdatePage.setProfile_picInput('profile_pic'),
            serviceProviderUpdatePage.setServicesInput('services'),
            serviceProviderUpdatePage.setAddressInput('address'),
            serviceProviderUpdatePage.setPhoneInput('phone'),
            serviceProviderUpdatePage.setEmailInput('email'),
            serviceProviderUpdatePage.setFacebookInput('facebook'),
            serviceProviderUpdatePage.setInstragramInput('instragram'),
            serviceProviderUpdatePage.setDescriptionInput('description'),
            serviceProviderUpdatePage.setServiceStartInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            serviceProviderUpdatePage.setServiceEndInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            serviceProviderUpdatePage.setPhone2Input('phone2'),
            serviceProviderUpdatePage.setPhone3Input('phone3'),
            serviceProviderUpdatePage.setParkingDetailInput('parkingDetail')
        ]);
        expect(await serviceProviderUpdatePage.getNameInput()).to.eq('name');
        expect(await serviceProviderUpdatePage.getProfile_picInput()).to.eq('profile_pic');
        expect(await serviceProviderUpdatePage.getServicesInput()).to.eq('services');
        expect(await serviceProviderUpdatePage.getAddressInput()).to.eq('address');
        expect(await serviceProviderUpdatePage.getPhoneInput()).to.eq('phone');
        expect(await serviceProviderUpdatePage.getEmailInput()).to.eq('email');
        expect(await serviceProviderUpdatePage.getFacebookInput()).to.eq('facebook');
        expect(await serviceProviderUpdatePage.getInstragramInput()).to.eq('instragram');
        const selectedAcceptCreditCard = serviceProviderUpdatePage.getAcceptCreditCardInput();
        if (await selectedAcceptCreditCard.isSelected()) {
            await serviceProviderUpdatePage.getAcceptCreditCardInput().click();
            expect(await serviceProviderUpdatePage.getAcceptCreditCardInput().isSelected()).to.be.false;
        } else {
            await serviceProviderUpdatePage.getAcceptCreditCardInput().click();
            expect(await serviceProviderUpdatePage.getAcceptCreditCardInput().isSelected()).to.be.true;
        }
        const selectedParkingAvailable = serviceProviderUpdatePage.getParkingAvailableInput();
        if (await selectedParkingAvailable.isSelected()) {
            await serviceProviderUpdatePage.getParkingAvailableInput().click();
            expect(await serviceProviderUpdatePage.getParkingAvailableInput().isSelected()).to.be.false;
        } else {
            await serviceProviderUpdatePage.getParkingAvailableInput().click();
            expect(await serviceProviderUpdatePage.getParkingAvailableInput().isSelected()).to.be.true;
        }
        expect(await serviceProviderUpdatePage.getDescriptionInput()).to.eq('description');
        expect(await serviceProviderUpdatePage.getServiceStartInput()).to.contain('2001-01-01T02:30');
        expect(await serviceProviderUpdatePage.getServiceEndInput()).to.contain('2001-01-01T02:30');
        expect(await serviceProviderUpdatePage.getPhone2Input()).to.eq('phone2');
        expect(await serviceProviderUpdatePage.getPhone3Input()).to.eq('phone3');
        expect(await serviceProviderUpdatePage.getParkingDetailInput()).to.eq('parkingDetail');
        await serviceProviderUpdatePage.save();
        expect(await serviceProviderUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await serviceProviderComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last ServiceProvider', async () => {
        const nbButtonsBeforeDelete = await serviceProviderComponentsPage.countDeleteButtons();
        await serviceProviderComponentsPage.clickOnLastDeleteButton();

        serviceProviderDeleteDialog = new ServiceProviderDeleteDialog();
        expect(await serviceProviderDeleteDialog.getDialogTitle()).to.eq('nudgunApp.serviceProvider.delete.question');
        await serviceProviderDeleteDialog.clickOnConfirmButton();

        expect(await serviceProviderComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
