package com.nudgun.service.mapper;

import com.nudgun.domain.*;
import com.nudgun.service.dto.ServiceProviderDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity ServiceProvider and its DTO ServiceProviderDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ServiceProviderMapper extends EntityMapper<ServiceProviderDTO, ServiceProvider> {



    default ServiceProvider fromId(Long id) {
        if (id == null) {
            return null;
        }
        ServiceProvider serviceProvider = new ServiceProvider();
        serviceProvider.setId(id);
        return serviceProvider;
    }
}
