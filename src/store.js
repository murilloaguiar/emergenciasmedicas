//script de configuração do vuex
import Vuex from "vuex";

export default new Vuex.Store({
   state: {
      titulo: "Emergências Médicas",

      equipe: {
         enfermeiro: "Nome do enfermeiro",
         socorrista: "Nome do socorrista",
         medico: "Nome do médico",
         carro: "AAA-0000",
         telefone: "+55 38 99999-9999",
         kitDeReanimacao: "Kit 0001",
      },

      enfermeiros: [
         { id: 1, nome: "João", escala: "12x36" },
         { id: 2, nome: "Maria", escala: "12x36" },
         { id: 3, nome: "Ana", escala: "24x48" },
         { id: 4, nome: "José", escala: "24x48" },
      ],
      socorristas: [
         { id: 1, nome: "Marcos", turno: "manhã" },
         { id: 2, nome: "Felipe", turno: "tarde" },
         { id: 3, nome: "Cláudia", turno: "tarde" },
         { id: 4, nome: "Michele", turno: "noite" },
      ],
      medicos: [
         { id: 1, nome: "André", escala: "12x36" },
         { id: 2, nome: "Roberta", escala: "12x36" },
         { id: 3, nome: "Carlos", escala: "24x48" },
         { id: 4, nome: "Juliana", escala: "24x48" },
      ],
      equipamentos: {
         carros: [
            { id: 1, placa: "ABC-0000" },
            { id: 2, placa: "BRA1A11" },
            { id: 3, placa: "CBA-1111" },
            { id: 4, placa: "ARB2B22" },
         ],
         telefones: [
            { id: 1, telefone: "+55 11 98888-8888" },
            { id: 2, telefone: "+55 11 97777-7777" },
            { id: 3, telefone: "+55 11 96666-6666" },
            { id: 4, telefone: "+55 11 95555-5555" },
         ],
         kitsDeReanimacao: [
            { id: 1, kit: "K0001" },
            { id: 2, kit: "K0002" },
            { id: 3, kit: "K0003" },
            { id: 4, kit: "K0004" },
         ],
      },
   },

   getters: {
      totalEnfermeiros(state) {
         return state.enfermeiros.length;
      },

      socorristasPorTurno(state) {
         //closure
         return (turno) =>
            !turno
               ? state.socorristas
               : state.socorristas.filter(
                    (socorrista) => socorrista.turno === turno
                 )
      },

      totalSocorristas: (state) => state.socorristas.length,

      totalSocorristasPorTurno: (state, getters) => turno => getters.socorristasPorTurno(turno).length, //closure

   },
});
