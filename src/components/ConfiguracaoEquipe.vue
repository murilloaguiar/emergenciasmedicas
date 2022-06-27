<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-boxes me-2"></i>{{tituloCustomizadoLocal}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        
        <p>Enfermeiro: {{e.enfermeiro}}</p>
        <p>Socorrista: {{e.socorrista}}</p>
        <p>Médico: {{e.medico}}</p>
        <p>Carro: {{e.carro}}</p>
        <p>Telefone: {{e.telefone}}</p>
        <p>Kit de reanimação: {{e.kitDeReanimacao}}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="require(`@/assets/ambulancias/${imgAmbulancia}`)">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button 
              type="button" 
              class="btn btn-primary" 
              @click="montarEquipe"
              >
                Montar equipe
              </button>
          </div>
        </div>              
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ConfiguracaoEquipe',
    data: ()=>({
      titulo: 'Configuração da equipe'
    }),


    //computed: mapState(['equipe'])
    computed: {

        //espalhando os objetos retornados pelo mapState dentro da propriedade computed. Isso nos permite 
        ...mapState({
        e: state => state.equipe,

        //para combinar o state com o estado local é preciso usar uma função para ter acesso ao escopo do componente. A arrow function cria um contexto isolado
        tituloCustomizadoLocal(state){
          return `${this.titulo} ${state.equipe.carro}`
        }
      }),

      corTitulo(){
        let testeLogico = true
        if(testeLogico) return 'text-danger'
        return 'text-primary'
      }, 

      imgAmbulancia(){
        if(this.e.kitDeReanimacao) return 'uti.png'
        else if(this.e.carro) return 'simples.png'
        return 'indefinida.png'
      }

    },

    methods:{
      montarEquipe(){
        //copiando o valor do objeto equipe contido na store do vuex para uma nova variável. Nos permite trabalhar direto com os dados e não com a referência deles
        let equipe = Object.assign({}, this.$store.state.equipe)

        this.$store.commit('adicionarEquipeEmEquipes', equipe)

      }
    }

}
</script>
