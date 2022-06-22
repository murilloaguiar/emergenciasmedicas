//script de configuração do vuex
import Vuex from 'vuex'


export default new Vuex.Store({
   state:{
      titulo: 'Emergências Médicas',
      equipe:{
         enfermeiro: 'Nome do enfermeiro',
         socorrista:'Nome do socorrista',
         medico: 'Nome do médico',
         carro: 'Placa do carro',
         telefone: 'Telefone qualquer',
         kitDeReanimacao: 'Kit 0001'

      }
   }
})