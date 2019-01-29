package com.nudgun.service.impl;

import com.nudgun.service.GeometryService;
import com.nudgun.service.ServiceProviderService;
import com.nudgun.domain.ServiceProvider;
import com.nudgun.repository.ServiceProviderRepository;
import com.nudgun.service.dto.ServiceProviderDTO;
import com.nudgun.service.mapper.ServiceProviderMapper;
import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.Point;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing ServiceProvider.
 */
@Service
@Transactional
public class ServiceProviderServiceImpl implements ServiceProviderService {

    private final Logger log = LoggerFactory.getLogger(ServiceProviderServiceImpl.class);

    private final ServiceProviderRepository serviceProviderRepository;

    private final ServiceProviderMapper serviceProviderMapper;

    private final GeometryService geometryService;

    @Autowired
    private GeometryFactory geometryFactory;


    public ServiceProviderServiceImpl(ServiceProviderRepository serviceProviderRepository,
                                      ServiceProviderMapper serviceProviderMapper,
                                      GeometryService geometryService) {
        this.serviceProviderRepository = serviceProviderRepository;
        this.serviceProviderMapper = serviceProviderMapper;
        this.geometryService = geometryService;
    }

    /**
     * Save a serviceProvider.
     *
     * @param serviceProviderDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public ServiceProviderDTO save(ServiceProviderDTO serviceProviderDTO) {
        log.debug("Request to save ServiceProvider : {}", serviceProviderDTO);
        ServiceProvider serviceProvider = serviceProviderMapper.toEntity(serviceProviderDTO);

        if (!serviceProviderDTO.getLocation().isEmpty()) {
            serviceProvider.setLocation(getPoint(serviceProvider));
        }

        serviceProvider = serviceProviderRepository.save(serviceProvider);
        return serviceProviderMapper.toDto(serviceProvider);
    }

    private Point getPoint(final ServiceProvider serviceProvider) {

        final Geometry geometry = geometryService.wktToGeometry(serviceProvider.getLocation().toText());
        final Point newPoint = geometryFactory.createPoint(new Coordinate(geometry.getCoordinate()));
        newPoint.setSRID(geometryService.getSRID());
        return newPoint;

    }

    /**
     * Get all the serviceProviders.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<ServiceProviderDTO> findAll(Pageable pageable) {
        log.debug("Request to get all ServiceProviders");
        return serviceProviderRepository.findAll(pageable)
            .map(serviceProviderMapper::toDto);
    }


    /**
     * Get one serviceProvider by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<ServiceProviderDTO> findOne(Long id) {
        log.debug("Request to get ServiceProvider : {}", id);
        return serviceProviderRepository.findById(id)
            .map(serviceProviderMapper::toDto);
    }

    /**
     * Delete the serviceProvider by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete ServiceProvider : {}", id);
        serviceProviderRepository.deleteById(id);
    }
}
