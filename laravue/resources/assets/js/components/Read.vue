<template>
<div class="card">
    <div class="card-header">
        <router-link to="/">
            <button type="button" class="btn btn-info float-rigth"><i class="fa fa-arrow-left"></i></button>
        </router-link>
    </div>
    <div class="card-body">
        <h2>{{posts.title}}</h2>
        <p>{{posts.desc}}</p>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
  async created() {
    let id = this.$route.params.id;
    axios
      .get(`/Framework/Laravel_Vue/laravue/public/posts/` + id)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
    // async / await version (created() becomes async created())
    //
  }
};
</script>