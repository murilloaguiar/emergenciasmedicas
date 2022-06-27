<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ $store.state.titulo }}</a>
      </div>
    </nav>

    <div class="container">
      <div class="row mt-5">
        <div class="col-6 p">
          <profissionais />
        </div>

        <div class="col-6">
          <equipamentos />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <configuracao-equipe />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import ConfiguracaoEquipe from "./ConfiguracaoEquipe.vue";
import Equipamentos from "./Equipamentos.vue";
import Equipes from "./Equipes.vue";
import Profissionais from "./Profissionais.vue";

export default {
  components: {
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais,
  },

  name: "Index",

  props: {
    msg: String,
  },

  methods: {
    ...mapMutations([
      "setEnfermeiros",
      "setSocorristas",
      "setMedicos",
      "setCarros",
      "setTelefones",
      "setKitsDeReanimacao"
    ]),

    //array
    //...mapActions(['fetchEquipamentos','fetchProfissionais'])

    //objeto
    // ...mapActions({
    //   //poderia ser qualquer nome
    //   fetchEquipamentos: 'fetchEquipamentos',
    //   fetchProfissionais: 'fetchProfissionais'
    // })

    //objeto e função
    ...mapActions({
      
      fetchEquipamentos: (dispatch, payload)=>{
        //implementar lógica
        dispatch('fetchEquipamentos', payload)
        //implementar outra lógica
      },

      fetchProfissionais: dispatch => {
        dispatch('fetchProfissionais')
      }
    })

  },

  computed: {
    tituloCustomizado() {
      return `.: ${this.$store.state.titulo}`;
    },
  },

  created() {
    // this.$store.dispatch({
    //   //payload
    //   type: 'fetchEquipamentos', //action a ser disparada
    //   carros: true,
    //   telefones: true,
    //   kitsDeReanimacao: true
    // })
    // this.$store.dispatch('fetchProfissionais')

    this.fetchEquipamentos({
      carros:true,
      telefones:true,
      kitsDeReanimacao:true
    })

    this.fetchProfissionais()

    // fetch("http://localhost:3000/equipamentos")
    //   .then((response) => response.json())
    //   .then((dados) => {
    //     this.setCarros(dados.carros);
    //     this.setTelefones(dados);
    //     this.setKitsDeReanimacao(dados)
    //   });

  },
};
</script>
