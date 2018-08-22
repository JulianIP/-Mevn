<template>
    <div>        
        <form class="md-layout md-gutter md-alignment-center" @submit.prevent="loadTask">
            <div class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <h1>Cargar tarea</h1>
                <md-field>
                    <label>Titulo</label>
                    <md-input required name="title" type="text" v-model="title" placeholder="Ingrese titulo"></md-input>
                </md-field>
                <md-field>
                    <label>Descripción</label>
                    <md-textarea required name="description" v-model="description" placeholder="Ingrese descripcion"></md-textarea>
                </md-field>
                <md-button class="md-raised md-primary" type="submit" :disabled="sending">Cargar</md-button>
            </div>         
            <md-snackbar md-position="center" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
                <span>Tarea creada</span>
            </md-snackbar>   
        </form>
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
            description: "",
            showSnackbar: false,
            duration:2000,
            sending: false
        }
    },
    methods: {
        clearForm () {
            this.description = null
            this.title = null
        },
        loadTask () {
            this.sending = true
            var newTask = new Task(this.title,this.description);
            this.$http.post('/api/cargarTarea',JSON.stringify(newTask)).then( response => {
                console.log(response.body);
                this.sending = false;
                this.clearForm();
                this.showSnackbar = true;
            });
        }
    }
}

</script>

<style scoped lang="scss">

</style>




