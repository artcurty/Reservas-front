package reservas.ufpb.reservas;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

public class ReservaResourceAssembler implements ResourceAssembler<Reserva, Resource<Reserva>> {

    @Override
    public Resource<Reserva> toResource(Reserva reserva){

        return  new Resource<>(reserva,
                linkTo(methodOn(ReservaController.class).oneReserva(reserva.getId())).withSelfRel(),
                linkTo(methodOn(ReservaController.class).AllReservas()).withRel("Reservas"));
    }

}
