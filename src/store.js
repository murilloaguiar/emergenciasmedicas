//script de configuração do vuex
import Vuex from 'vuex'


export default new Vuex.Store({
   state:{
      titulo: 'Emergências Médicas',
      equipe:{
         enfermeiro: 'Nome do enfermeiro',
         socorrista:'Nome do socorrista',
         medico: 'Nome do médico',
         carro: 'AAA-0000',
         telefone: '+55 38 99999-9999',
         kitDeReanimacao: 'Kit 0001'

      }
   }
})