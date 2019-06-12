package reservas.ufpb.reservas;

import org.springframework.data.jpa.repository.Query;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;


@RestController
public class ClienteController
{
    private final ClienteRepository cRepository;
    private final ReservaRepository rRepository;
    private final ClienteResourceAssembler cAssembler;

    /**
     *
     * @param cRepository
     * @param rRepository
     * @param cAssembler
     */

    ClienteController(ClienteRepository cRepository, ReservaRepository rRepository, ClienteResourceAssembler cAssembler){
        this.cRepository = cRepository;
        this.rRepository = rRepository;
        this.cAssembler = cAssembler;
    }




}

