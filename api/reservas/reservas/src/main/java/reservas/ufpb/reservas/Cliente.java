package reservas.ufpb.reservas;

import javax.persistence.*;

@Entity
public class Cliente {

    private @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)  Long id;
    private String nome;
    private int idade;
    private String sexo;
    @ManyToOne
    private Pacotes pacotes;

        public Cliente(){

        }

        public Cliente(String nome, int idade, String sexo, Pacotes pacotes) {
            this.nome = nome;
            this.idade = idade;
            this.sexo = sexo;
            this.pacotes = pacotes;
        }

        public Cliente(String nome, int idade, String sexo) {
            this.nome = nome;
            this.idade = idade;
            this.sexo = sexo;
        }

            public Long getId() {
                return id;
            }

            public void setId(Long id) {
                this.id = id;
            }

            public String getNome() {
                return nome;
            }

            public void setNome(String nome) {
                this.nome = nome;
            }

            public int getIdade() {
                return idade;
            }

            public void setIdade(int idade) {
                this.idade = idade;
            }

            public String getSexo() {
                return sexo;
            }

            public void setSexo(String sexo) {
                this.sexo = sexo;
            }

            public Pacotes getPacotes() {
                return pacotes;
            }

            public void setPacotes(Pacotes pacotes) {
                this.pacotes = pacotes;
            }
}

