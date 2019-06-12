package reservas.ufpb.reservas;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(ignoreUnknown = true)
public class Reserva {

    private @Id @GeneratedValue Long id;
    private Long Hotel_ID;
    private int num_quartos;
    private Long Voo_ID;

        public Reserva() {

        }

        public Reserva(Long hotel_ID, int num_quartos, Long voo_ID) {
            Hotel_ID = hotel_ID;
            this.num_quartos = num_quartos;
            Voo_ID = voo_ID;
        }

            public Long getId() {
                return id;
            }

            public void setId(Long id) {
                this.id = id;
            }

            public Long getHotel_ID() {
                return Hotel_ID;
            }

            public void setHotel_ID(Long hotel_ID) {
                Hotel_ID = hotel_ID;
            }

            public int getNum_quartos() {
                return num_quartos;
            }

            public void setNum_quartos(int num_quartos) {
                this.num_quartos = num_quartos;
            }

            public Long getVoo_ID() {
                return Voo_ID;
            }

            public void setVoo_ID(Long voo_ID) {
                Voo_ID = voo_ID;
            }

}
