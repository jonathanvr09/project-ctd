package com.dh.store.carRent.service.impl;

import com.dh.store.carRent.dto.RangoFechasDTO;
import com.dh.store.carRent.exception.ResourceNotFound;
import com.dh.store.carRent.model.ReservaModel;
import com.dh.store.carRent.model.ReservaResponse;
import com.dh.store.carRent.model.UsuarioModel;
import com.dh.store.carRent.repository.ReservaRepository;
import com.dh.store.carRent.service.ReservaService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.modelmapper.ModelMapper;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;
import java.util.stream.Collectors;


@Service
@Transactional
public class ReservaServiceImpl implements ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;
    private final ModelMapper modelMapper = new ModelMapper();

    public ReservaServiceImpl(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Override
    public ReservaModel crear(ReservaModel reservaModel) {
        return reservaRepository.save(reservaModel);
    }

    @Override
    public ArrayList<ReservaModel> listar() {
        return (ArrayList<ReservaModel>)reservaRepository.findAll();
    }

    @Override
    public ReservaModel listarById(Long id) {
        if (!reservaRepository.existsById(id)) {
            throw new ResourceNotFound("No encontramos la reserva solicitada");
        } else {
            ReservaModel reservaModel = modelMapper.map(reservaRepository.findById(id).get(), ReservaModel.class);
            reservaRepository.getReferenceById(id);
            return reservaModel;
        }
    }

    private ReservaResponse buildReserva(ReservaModel reservaModel) {
        return ReservaResponse.builder()
                .fechaInicio(reservaModel.getFechaInicio())
                .fechaFin(reservaModel.getFechaFin())
                .idUsuario(reservaModel.getIdUsuario())
                .idVehiculo(reservaModel.getIdVehiculo())
                .idMedioPago(reservaModel.getIdMedioPago())
                .idEstadoReserva(reservaModel.getIdEstadoReserva())
                .build();
    }

    private boolean isBeforeOrEquals(Date date1, Date date2) {
        return date1.before(date2) || date1.equals(date2);
    }

    @Override
    public List<ReservaResponse> consultarReservaRangoFechas(RangoFechasDTO rangoFechasDTO) {
        List<ReservaModel> reservaModels = reservaRepository.findAll();
        return reservaModels.stream().filter(at -> at.getFechaInicio().after(rangoFechasDTO.getFechaInicio())
                        && isBeforeOrEquals(at.getFechaInicio(),rangoFechasDTO.getFechaFin()))
                .map(this::buildReserva)
                .distinct()
                .collect(Collectors.toList());
    }
}
