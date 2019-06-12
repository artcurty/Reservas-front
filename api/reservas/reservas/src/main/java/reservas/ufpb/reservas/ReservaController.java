package reservas.ufpb.reservas;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.jpa.repository.Query;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;



@RestController
public class ReservaController {

    private final ReservaRepository rRepository;
    private final ReservaResourceAssembler rAssembler;

        /**
         *
         * @param rRepository
         * @param rAssembler
         */
        ReservaController(ReservaRepository rRepository, ReservaResourceAssembler rAssembler){
            this.rRepository = rRepository;
            this.rAssembler = rAssembler;
        }
        /**
         *
         * @return
         */

        @GetMapping(value="/reservas", produces = "application/json; charset=UTF-8")
        public Resources<Resource<Reserva>> AllReservas(){

        List<Resource<Reserva>> reservas_resource;
        List<Reserva> reservas;

            reservas = rRepository.findAll();

        reservas_resource = reservas.stream().map(rAssembler::toResource).collect(Collectors.toList());

        return new Resources<>(reservas_resource,linkTo(methodOn(ReservaController.class).AllReservas()).withSelfRel());

        }
        /**
         * Select reserva
         * @param reserva_id
         * @return
         */
        @GetMapping(value = "/reservas/{reserva_id}", produces = "application/json; charset=UTF-8")
        Resource<Reserva> oneReserva(@PathVariable Long reserva_id){

            Reserva reserva = rRepository.findById(reserva_id).orElseThrow(()-> new ReservaNotFoundException(reserva_id));

            return rAssembler.toResource(reserva);
        }
        /**
         *  Create Reserva
         * @param nReserva
         * @return
         * @throws URISyntaxException
         */
        @PostMapping("/reservas")
        ResponseEntity<?> newReserva(@RequestBody Reserva nReserva) throws URISyntaxException{

            Resource<Reserva> resource = rAssembler.toResource(rRepository.save(nReserva));

            return ResponseEntity
                    .created(new URI(resource.getId().expand().getHref()))
                    .body(resource);
        }


        /**
         * Delete Booking by Id
         * @param reserva_id
         * @return
         */
        @DeleteMapping(value = "/reservas/{reserva_id}", produces = "application/json; charset=UTF-8")
        ResponseEntity<?> deleteReserva(@PathVariable Long reserva_id){
            rRepository.deleteById(reserva_id);

            return ResponseEntity.noContent().build();
        }


}
