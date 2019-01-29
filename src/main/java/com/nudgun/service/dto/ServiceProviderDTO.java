package com.nudgun.service.dto;

import com.bedatadriven.jackson.datatype.jts.serialization.GeometrySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.vividsolutions.jts.geom.Point;

import java.time.ZonedDateTime;
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

    @NotNull
    private ZonedDateTime serviceStart;

    @NotNull
    private ZonedDateTime serviceEnd;

    private String phone2;

    private String phone3;

    @Size(max = 100)
    private String parkingDetail;

    @JsonSerialize(using = GeometrySerializer.class)
    private Point location;

    public Point getLocation() {
        return location;
    }

    public void setLocation(Point location) {
        this.location = location;
    }

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

    public ZonedDateTime getServiceStart() {
        return serviceStart;
    }

    public void setServiceStart(ZonedDateTime serviceStart) {
        this.serviceStart = serviceStart;
    }

    public ZonedDateTime getServiceEnd() {
        return serviceEnd;
    }

    public void setServiceEnd(ZonedDateTime serviceEnd) {
        this.serviceEnd = serviceEnd;
    }

    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    public String getPhone3() {
        return phone3;
    }

    public void setPhone3(String phone3) {
        this.phone3 = phone3;
    }

    public String getParkingDetail() {
        return parkingDetail;
    }

    public void setParkingDetail(String parkingDetail) {
        this.parkingDetail = parkingDetail;
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
            ", address='" + getAddress() + "'" +
            ", phone='" + getPhone() + "'" +
            ", email='" + getEmail() + "'" +
            ", facebook='" + getFacebook() + "'" +
            ", instragram='" + getInstragram() + "'" +
            ", acceptCreditCard='" + isAcceptCreditCard() + "'" +
            ", parkingAvailable='" + isParkingAvailable() + "'" +
            ", description='" + getDescription() + "'" +
            ", serviceStart='" + getServiceStart() + "'" +
            ", serviceEnd='" + getServiceEnd() + "'" +
            ", phone2='" + getPhone2() + "'" +
            ", phone3='" + getPhone3() + "'" +
            ", parkingDetail='" + getParkingDetail() + "'" +
        /*    ", location='" + getLocation().getCoordinate().toString() + "'" +*/
            "}";
    }
}
