<template>
<div class="container">
    <form v-on:submit.prevent="submitPost()">
        <div class="form-group">
            <input type="text" v-model="posts.title" placeholder="Title" class="form-control">

        </div>
        <div class="form-group">
            <textarea type="text" v-model="posts.desc" placeholder="Desc" class="form-control">
            </textarea>
        </div>
        <div class="form-group">
            <button class="btn btn-primary form-control">Create Post</button>
        </div>
        <div class="form-group">
            <router-link to="/" class="btn btn-warning">
                Cancel
            </router-link>
        </div>
    </form>
    </div>
</template>
<script>
export default {
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
    axios
        .post(`/Framework/Laravel_Vue/laravue/public/posts`, this.posts)
        .then(response => {
            // Use sweetalret2
        this.$swal({
            type: 'success',
            title: 'Post Tersimpan'
        });
        this.posts = response.data;
        this.posts.title =this.posts.desc = '';
        
        })
        .catch(e => {
        this.errors.push(e);
        });
        }
    }
    
    
};
</script>