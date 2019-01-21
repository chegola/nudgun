package com.nudgun.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the ServiceProvider entity.
 */
public class ServiceProviderDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(max = 100)
    private String name;

    @NotNull
    @Size(max = 100)
    private String profile_pic;

    @NotNull
    @Size(max = 100)
    private String services;

    @NotNull
    private String openHour;

    @NotNull
    private String address;

    @NotNull
    private String phone;

    @NotNull
    private String email;

    private String facebook;

    private String instragram;

    @NotNull
    private Boolean acceptCreditCard;

    private Boolean parkingAvailable;

    private String description;

    private String priceRange;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfile_pic() {
        return profile_pic;
    }

    public void setProfile_pic(String profile_pic) {
        this.profile_pic = profile_pic;
    }

    public String getServices() {
        return services;
    }

    public void setServices(String services) {
        this.services = services;
    }

    public String getOpenHour() {
        return openHour;
    }

    public void setOpenHour(String openHour) {
        this.openHour = openHour;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getInstragram() {
        return instragram;
    }

    public void setInstragram(String instragram) {
        this.instragram = instragram;
    }

    public Boolean isAcceptCreditCard() {
        return acceptCreditCard;
    }

    public void setAcceptCreditCard(Boolean acceptCreditCard) {
        this.acceptCreditCard = acceptCreditCard;
    }

    public Boolean isParkingAvailable() {
        return parkingAvailable;
    }

    public void setParkingAvailable(Boolean parkingAvailable) {
        this.parkingAvailable = parkingAvailable;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriceRange() {
        return priceRange;
    }

    public void setPriceRange(String priceRange) {
        this.priceRange = priceRange;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ServiceProviderDTO serviceProviderDTO = (ServiceProviderDTO) o;
        if (serviceProviderDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), serviceProviderDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ServiceProviderDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", profile_pic='" + getProfile_pic() + "'" +
            ", services='" + getServices() + "'" +
            ", openHour='" + getOpenHour() + "'" +
            ", address='" + getAddress() + "'" +
            ", phone='" + getPhone() + "'" +
            ", email='" + getEmail() + "'" +
            ", facebook='" + getFacebook() + "'" +
            ", instragram='" + getInstragram() + "'" +
            ", acceptCreditCard='" + isAcceptCreditCard() + "'" +
            ", parkingAvailable='" + isParkingAvailable() + "'" +
            ", description='" + getDescription() + "'" +
            ", priceRange='" + getPriceRange() + "'" +
            "}";
    }
}
