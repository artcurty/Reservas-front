package reservas.ufpb.reservas;

class ReservaNotFoundException extends RuntimeException {

    ReservaNotFoundException(Long id) {
        super("Não é possivel encontrar um cliente com o ID: " + id);
    }
}
