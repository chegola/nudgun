package com.nudgun.service.dto;

import java.io.Serializable;
import java.util.Objects;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;

/**
 * Criteria class for the ServiceProvider entity. This class is used in ServiceProviderResource to
 * receive all the possible filtering options from the Http GET request parameters.
 * For example the following could be a valid requests:
 * <code> /service-providers?id.greaterThan=5&amp;attr1.contains=something&amp;attr2.specified=false</code>
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class ServiceProviderCriteria implements Serializable {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private StringFilter name;

    private StringFilter profile_pic;

    private StringFilter services;

    private StringFilter address;

    private StringFilter phone;

    private StringFilter email;

    private StringFilter facebook;

    private StringFilter instragram;

    private BooleanFilter acceptCreditCard;

    private BooleanFilter parkingAvailable;

    private StringFilter description;

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public StringFilter getName() {
        return name;
    }

    public void setName(StringFilter name) {
        this.name = name;
    }

    public StringFilter getProfile_pic() {
        return profile_pic;
    }

    public void setProfile_pic(StringFilter profile_pic) {
        this.profile_pic = profile_pic;
    }

    public StringFilter getServices() {
        return services;
    }

    public void setServices(StringFilter services) {
        this.services = services;
    }

    public StringFilter getAddress() {
        return address;
    }

    public void setAddress(StringFilter address) {
        this.address = address;
    }

    public StringFilter getPhone() {
        return phone;
    }

    public void setPhone(StringFilter phone) {
        this.phone = phone;
    }

    public StringFilter getEmail() {
        return email;
    }

    public void setEmail(StringFilter email) {
        this.email = email;
    }

    public StringFilter getFacebook() {
        return facebook;
    }

    public void setFacebook(StringFilter facebook) {
        this.facebook = facebook;
    }

    public StringFilter getInstragram() {
        return instragram;
    }

    public void setInstragram(StringFilter instragram) {
        this.instragram = instragram;
    }

    public BooleanFilter getAcceptCreditCard() {
        return acceptCreditCard;
    }

    public void setAcceptCreditCard(BooleanFilter acceptCreditCard) {
        this.acceptCreditCard = acceptCreditCard;
    }

    public BooleanFilter getParkingAvailable() {
        return parkingAvailable;
    }

    public void setParkingAvailable(BooleanFilter parkingAvailable) {
        this.parkingAvailable = parkingAvailable;
    }

    public StringFilter getDescription() {
        return description;
    }

    public void setDescription(StringFilter description) {
        this.description = description;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final ServiceProviderCriteria that = (ServiceProviderCriteria) o;
        return
            Objects.equals(id, that.id) &&
            Objects.equals(name, that.name) &&
            Objects.equals(profile_pic, that.profile_pic) &&
            Objects.equals(services, that.services) &&
            Objects.equals(address, that.address) &&
            Objects.equals(phone, that.phone) &&
            Objects.equals(email, that.email) &&
            Objects.equals(facebook, that.facebook) &&
            Objects.equals(instragram, that.instragram) &&
            Objects.equals(acceptCreditCard, that.acceptCreditCard) &&
            Objects.equals(parkingAvailable, that.parkingAvailable) &&
            Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
        id,
        name,
        profile_pic,
        services,
        address,
        phone,
        email,
        facebook,
        instragram,
        acceptCreditCard,
        parkingAvailable,
        description
        );
    }

    @Override
    public String toString() {
        return "ServiceProviderCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (name != null ? "name=" + name + ", " : "") +
                (profile_pic != null ? "profile_pic=" + profile_pic + ", " : "") +
                (services != null ? "services=" + services + ", " : "") +
                (address != null ? "address=" + address + ", " : "") +
                (phone != null ? "phone=" + phone + ", " : "") +
                (email != null ? "email=" + email + ", " : "") +
                (facebook != null ? "facebook=" + facebook + ", " : "") +
                (instragram != null ? "instragram=" + instragram + ", " : "") +
                (acceptCreditCard != null ? "acceptCreditCard=" + acceptCreditCard + ", " : "") +
                (parkingAvailable != null ? "parkingAvailable=" + parkingAvailable + ", " : "") +
                (description != null ? "description=" + description + ", " : "") +
            "}";
    }

}
