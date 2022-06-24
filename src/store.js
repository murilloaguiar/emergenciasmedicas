//script de configuração do vuex
import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    titulo: "Emergências Médicas",

    equipe: {
      enfermeiro: "",
      socorrista: "",
      medico: "",
      carro: "",
      telefone: "",
      kitDeReanimacao: "",
    },

    enfermeiros: [],
    socorristas: [],
    medicos: [],

    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: [],
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
            );
    },

    totalSocorristas: (state) => state.socorristas.length,

    totalSocorristasPorTurno: (state, getters) => (turno) =>
      getters.socorristasPorTurno(turno).length, //closure
  },

  mutations: {
    setItemEquipe: (state, item) => {
      // console.log(state)
      // console.log(item)

      let t = item.tipo;
      let d = item.dados;

      t == "enfermeiros" ? (state.equipe.enfermeiro = d.nome) : null;
      t == "socorristas" ? (state.equipe.socorrista = d.nome) : null;
      t == "medicos" ? (state.equipe.medico = d.nome) : null;
      t == "carros" ? (state.equipe.carro = d.placa) : null;
      t == "telefones" ? (state.equipe.telefone = d.telefone) : null;
      t == "kits-de-reanimacao" ? (state.equipe.kitDeReanimacao = d.kit) : null;
    },

    setEnfermeiros: (state, payload) => {
      state.enfermeiros = payload;
    },

    setSocorristas: (state, payload) => {
      state.socorristas = payload;
    },

    setMedicos: (state, payload) => {
      state.medicos = payload;
    },

    setCarros: (state, payload) => {
      state.equipamentos.carros = payload;
    },

    setTelefones: (state, payload) => {
      state.equipamentos.telefones = payload.telefones;
    },

    setKitsDeReanimacao: (state, { kitsDeReanimacao }) => {
      state.equipamentos.kitsDeReanimacao = kitsDeReanimacao;
    },
  },
});
