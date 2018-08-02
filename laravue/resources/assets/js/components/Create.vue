<template>
<div class="container">
    <form v-on:submit="submitPost()">
        <div class="form-group">
            <input type="text" name="title" placeholder="Title" class="form-control">

        </div>
        <div class="form-group">
            <textarea type="text" name="desc" placeholder="Desc" class="form-control">
            </textarea>
        </div>
            <button type="button" class="btn btn-primary">submit</button>

        <div class="form-group">
            <router-link to="/" class="btn btn-warning">
                Cancel
            </router-link>
        </div>
    </form>
    </div>
</template>
<script>
new Vue( {
data: function() {
    return {
    posts: {
        title: "",
        desc: "",
    },
    errors: []
    };
},
    methods: {
    submitPost(){
    axios.post(`/posts`, this.posts)
        .then(response => {
            console.log(response)
        // JSON responses are automatically parsed.
        this.posts = response.data;
        })
        .catch(e => {
        this.errors.push(e);
        });
        }
    }
});
</script>