package com.nudgun.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A ServiceProvider.
 */
@Entity
@Table(name = "ng_service_provider")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ServiceProvider implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(max = 100)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @NotNull
    @Size(max = 100)
    @Column(name = "profile_pic", length = 100, nullable = false)
    private String profile_pic;

    @NotNull
    @Size(max = 100)
    @Column(name = "services", length = 100, nullable = false)
    private String services;

    @NotNull
    @Column(name = "open_hour", nullable = false)
    private String openHour;

    @NotNull
    @Column(name = "address", nullable = false)
    private String address;

    @NotNull
    @Column(name = "phone", nullable = false)
    private String phone;

    @NotNull
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "facebook")
    private String facebook;

    @Column(name = "instragram")
    private String instragram;

    @NotNull
    @Column(name = "accept_credit_card", nullable = false)
    private Boolean acceptCreditCard;

    @Column(name = "parking_available")
    private Boolean parkingAvailable;

    @Column(name = "description")
    private String description;

    @Column(name = "price_range")
    private String priceRange;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public ServiceProvider name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfile_pic() {
        return profile_pic;
    }

    public ServiceProvider profile_pic(String profile_pic) {
        this.profile_pic = profile_pic;
        return this;
    }

    public void setProfile_pic(String profile_pic) {
        this.profile_pic = profile_pic;
    }

    public String getServices() {
        return services;
    }

    public ServiceProvider services(String services) {
        this.services = services;
        return this;
    }

    public void setServices(String services) {
        this.services = services;
    }

    public String getOpenHour() {
        return openHour;
    }

    public ServiceProvider openHour(String openHour) {
        this.openHour = openHour;
        return this;
    }

    public void setOpenHour(String openHour) {
        this.openHour = openHour;
    }

    public String getAddress() {
        return address;
    }

    public ServiceProvider address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public ServiceProvider phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public ServiceProvider email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFacebook() {
        return facebook;
    }

    public ServiceProvider facebook(String facebook) {
        this.facebook = facebook;
        return this;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getInstragram() {
        return instragram;
    }

    public ServiceProvider instragram(String instragram) {
        this.instragram = instragram;
        return this;
    }

    public void setInstragram(String instragram) {
        this.instragram = instragram;
    }

    public Boolean isAcceptCreditCard() {
        return acceptCreditCard;
    }

    public ServiceProvider acceptCreditCard(Boolean acceptCreditCard) {
        this.acceptCreditCard = acceptCreditCard;
        return this;
    }

    public void setAcceptCreditCard(Boolean acceptCreditCard) {
        this.acceptCreditCard = acceptCreditCard;
    }

    public Boolean isParkingAvailable() {
        return parkingAvailable;
    }

    public ServiceProvider parkingAvailable(Boolean parkingAvailable) {
        this.parkingAvailable = parkingAvailable;
        return this;
    }

    public void setParkingAvailable(Boolean parkingAvailable) {
        this.parkingAvailable = parkingAvailable;
    }

    public String getDescription() {
        return description;
    }

    public ServiceProvider description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriceRange() {
        return priceRange;
    }

    public ServiceProvider priceRange(String priceRange) {
        this.priceRange = priceRange;
        return this;
    }

    public void setPriceRange(String priceRange) {
        this.priceRange = priceRange;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ServiceProvider serviceProvider = (ServiceProvider) o;
        if (serviceProvider.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), serviceProvider.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ServiceProvider{" +
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
