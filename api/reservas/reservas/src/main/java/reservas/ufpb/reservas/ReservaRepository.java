package reservas.ufpb.reservas;

import org.springframework.data.jpa.repository.JpaRepository;



public interface ReservaRepository extends JpaRepository<Cliente,Long>
{



}

