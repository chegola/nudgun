package com.nudgun.service;

import java.util.List;

import javax.persistence.criteria.JoinType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import com.nudgun.domain.ServiceProvider;
import com.nudgun.domain.*; // for static metamodels
import com.nudgun.repository.ServiceProviderRepository;
import com.nudgun.service.dto.ServiceProviderCriteria;
import com.nudgun.service.dto.ServiceProviderDTO;
import com.nudgun.service.mapper.ServiceProviderMapper;

/**
 * Service for executing complex queries for ServiceProvider entities in the database.
 * The main input is a {@link ServiceProviderCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link ServiceProviderDTO} or a {@link Page} of {@link ServiceProviderDTO} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class ServiceProviderQueryService extends QueryService<ServiceProvider> {

    private final Logger log = LoggerFactory.getLogger(ServiceProviderQueryService.class);

    private final ServiceProviderRepository serviceProviderRepository;

    private final ServiceProviderMapper serviceProviderMapper;

    public ServiceProviderQueryService(ServiceProviderRepository serviceProviderRepository, ServiceProviderMapper serviceProviderMapper) {
        this.serviceProviderRepository = serviceProviderRepository;
        this.serviceProviderMapper = serviceProviderMapper;
    }

    /**
     * Return a {@link List} of {@link ServiceProviderDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<ServiceProviderDTO> findByCriteria(ServiceProviderCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<ServiceProvider> specification = createSpecification(criteria);
        return serviceProviderMapper.toDto(serviceProviderRepository.findAll(specification));
    }

    /**
     * Return a {@link Page} of {@link ServiceProviderDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<ServiceProviderDTO> findByCriteria(ServiceProviderCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<ServiceProvider> specification = createSpecification(criteria);
        return serviceProviderRepository.findAll(specification, page)
            .map(serviceProviderMapper::toDto);
    }

    /**
     * Return the number of matching entities in the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the number of matching entities.
     */
    @Transactional(readOnly = true)
    public long countByCriteria(ServiceProviderCriteria criteria) {
        log.debug("count by criteria : {}", criteria);
        final Specification<ServiceProvider> specification = createSpecification(criteria);
        return serviceProviderRepository.count(specification);
    }

    /**
     * Function to convert ServiceProviderCriteria to a {@link Specification}
     */
    private Specification<ServiceProvider> createSpecification(ServiceProviderCriteria criteria) {
        Specification<ServiceProvider> specification = Specification.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), ServiceProvider_.id));
            }
            if (criteria.getName() != null) {
                specification = specification.and(buildStringSpecification(criteria.getName(), ServiceProvider_.name));
            }
            if (criteria.getProfile_pic() != null) {
                specification = specification.and(buildStringSpecification(criteria.getProfile_pic(), ServiceProvider_.profile_pic));
            }
            if (criteria.getServices() != null) {
                specification = specification.and(buildStringSpecification(criteria.getServices(), ServiceProvider_.services));
            }
            if (criteria.getAddress() != null) {
                specification = specification.and(buildStringSpecification(criteria.getAddress(), ServiceProvider_.address));
            }
            if (criteria.getPhone() != null) {
                specification = specification.and(buildStringSpecification(criteria.getPhone(), ServiceProvider_.phone));
            }
            if (criteria.getEmail() != null) {
                specification = specification.and(buildStringSpecification(criteria.getEmail(), ServiceProvider_.email));
            }
            if (criteria.getFacebook() != null) {
                specification = specification.and(buildStringSpecification(criteria.getFacebook(), ServiceProvider_.facebook));
            }
            if (criteria.getInstragram() != null) {
                specification = specification.and(buildStringSpecification(criteria.getInstragram(), ServiceProvider_.instragram));
            }
            if (criteria.getAcceptCreditCard() != null) {
                specification = specification.and(buildSpecification(criteria.getAcceptCreditCard(), ServiceProvider_.acceptCreditCard));
            }
            if (criteria.getParkingAvailable() != null) {
                specification = specification.and(buildSpecification(criteria.getParkingAvailable(), ServiceProvider_.parkingAvailable));
            }
            if (criteria.getDescription() != null) {
                specification = specification.and(buildStringSpecification(criteria.getDescription(), ServiceProvider_.description));
            }
            if (criteria.getServiceHour() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getServiceHour(), ServiceProvider_.serviceHour));
            }
        }
        return specification;
    }
}
