<template>
    <form>
        <div class="form-group">
            <input type="text" name="" placeholder="Title" class="form-control">

        </div>
        <div class="form-group">
            <textarea type="text" name="" placeholder="Desc" class="form-control">
            </textarea>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary form-control">Submit</button>
        </div>
        <div class="form-group">
            <router-link to="/" class="btn btn-warning">
                Cancel
            </router-link>
        </div>
    </form>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>