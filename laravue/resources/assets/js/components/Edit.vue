<template>
<div class="container">
    <form v-on:submit.prevent="submitPostEdit()">
        <div class="form-group">
            <input type="text" v-model="posts.title" placeholder="Title" class="form-control">

        </div>
        <div class="form-group">
            <textarea type="text" v-model="posts.desc" placeholder="Desc" class="form-control">
            </textarea>
        </div>
        <div class="form-group">
            <button class="btn btn-primary form-control">Edit Post</button>
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
},  async created() {
    let id = this.$route.params.id;
    axios
        .get(`/Framework/Laravel_Vue/laravue/public/posts/` + id +'/edit')
        .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data;
            })
            .catch(e => {
                this.errors.push(e);
        });
    // async / await version (created() becomes async created())
    //
    },
    methods: {
    async submitPostEdit(){
    let id = this.$route.params.id;
    await axios
        .patch(`/Framework/Laravel_Vue/laravue/public/posts/`+id , this.posts)
        .then(response => {
            // Use sweetalret2
        console.log(response.data);
        this.posts = response.data;        
        })
        .catch(e => {
        this.errors.push(e);
        });

    await this.$swal({
            type: 'success',
            title: 'Post TerEdit'
            });
            this.$router.push({path:'/'});
        }
    }
    
    
};
</script>