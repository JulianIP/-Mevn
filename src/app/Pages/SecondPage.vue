<template>
    <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <h1>Cargar tarea</h1>
            <md-field>
                <label>Titulo</label>
                <md-input type="text" v-model="title" placeholder="Ingrese titulo"></md-input>
            </md-field>
            <md-field>
                <label>Descripcion</label>
                <md-input type="text" v-model="description" placeholder="Ingrese descripcion"></md-input>
            </md-field>
            <md-button class="md-raised md-primary" @click="loadTask()">Cargar</md-button>
        </div>
    </div>
</template>

<script>

class Task {
    constructor(title,description){
        this.title = title,
        this.description = description
    }
}

export default {
    data(){
        return {
            title: "",
            description: ""
        }
    },
    methods: {
        loadTask () {
            var newTask = new Task(this.title,this.description);
            this.$http.post('/api/cargarTarea',JSON.stringify(newTask)).then( response => {
                console.log(response.body);
            });
        }
    }
}

</script>

<style scoped lang="scss">

</style>




