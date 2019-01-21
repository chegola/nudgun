package com.nudgun.service;

import com.nudgun.service.dto.ServiceProviderDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing ServiceProvider.
 */
public interface ServiceProviderService {

    /**
     * Save a serviceProvider.
     *
     * @param serviceProviderDTO the entity to save
     * @return the persisted entity
     */
    ServiceProviderDTO save(ServiceProviderDTO serviceProviderDTO);

    /**
     * Get all the serviceProviders.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<ServiceProviderDTO> findAll(Pageable pageable);


    /**
     * Get the "id" serviceProvider.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<ServiceProviderDTO> findOne(Long id);

    /**
     * Delete the "id" serviceProvider.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
