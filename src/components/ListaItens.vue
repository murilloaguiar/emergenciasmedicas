<template>
    <div>
        <item 
            v-for="(item, indice) in itens" 
            :key="indice" 
            :dados="item"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Item from '@/components/Item.vue'

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    props: {
        tipo: String
    },

    computed:{
        ...mapState({
            enfermeiros: state=> state.enfermeiros,
            socorristas: state=> state.socorristas,
            medicos: state=> state.medicos,
        }),

        itens(){
            switch (this.tipo) {
                //dentro propriedades computadas podemos acessar outras propriedades computadas, basta adicionar o operador this.
                case 'enfermeiros':
                    return this.enfermeiros
                    break;
                case 'socorristas':
                    return this.socorristas
                    break;
                case 'medicos':
                    return this.medicos
                    break;
            
                default:
                    return []
                    break;
            }
        }
    }
}
</script>