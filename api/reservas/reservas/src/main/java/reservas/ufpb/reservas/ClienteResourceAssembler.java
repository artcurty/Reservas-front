package reservas.ufpb.reservas;


import org.springframework.stereotype.Component;

@Component
class ClienteResourceAssembler implements ResourceAssembler<Cliente,Resource<Cliente>> {

    @Override
    public Resource<Cliente> toResource(Cliente cliente){
        return new Resource<>(cliente, linkTo(methodOn(ClienteController.class).one(cliente.getId())).withSelfRel(),
                linkTo(methodOn(ClienteController.class).AllClientes()).withRel("Clientes"));
    }
}
