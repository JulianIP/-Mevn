<template>
    <div>
        <h1>Tareas</h1>
        <md-list>
            <md-list-item v-for="(item,index) in listaRdos" :key="index">               
                <md-icon>send</md-icon>
                <span class="md-list-item-text">{{item.title}}</span>
                <md-button @click="eliminarTarea(item._id)"><md-icon class="cursor-pointer">delete_outline</md-icon><md-tooltip>Eliminar</md-tooltip></md-button>
            </md-list-item>
        </md-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            listaRdos: []
        }
    },
    methods: {
        traerRdos() {
            this.$http.get('/api/obtenerTareas').then( response => {
                console.log(response.body)
                this.listaRdos = response.body
            });
        },
        eliminarTarea(id) {
            console.log(id);
            this.$http.delete('/api/eliminarTarea/' + id).then( response => {
                console.log(response.body);
                this.traerRdos();
            });
        }
    },
    created() {
        this.traerRdos();
    }
}
</script>

<style scoped lang="scss">
    .cursor-pointer {
        cursor:pointer;
    }
</style>




