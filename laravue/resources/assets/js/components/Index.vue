<template>
<div>
    <div class="card">
        <div class="card-header">
            <router-link to="/create">
                <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Create Post">Create Post</button>
            </router-link>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="bg-primary">
                        <th v-on:click="sort('title')" >Title</th>
                        <th v-on:click="sort('desc')">Desc</th>
                        <th width="100"></th>
                        <th width="100"></th>
                        <th width="100"></th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="(post, index) of displayedPosts" :key="index" >
                        <td>{{post.title}}</td>
                        <td>{{post.desc}}</td>
                            <td>
                                <router-link :to="{name:'readPost' ,params:{id:post.id}}" class="btn btn-success">
                                <i class="fa fa-eye"></i> View
                                </router-link>
                                </td>
                                <td>
                                <router-link :to="{name:'editPost' ,params:{id:post.id}}" class="btn btn-warning">
                                <i class="fa fa-pencil"></i> Edit
                                </router-link>
                                </td>
                            <td>
                            <button type="button" class="btn btn-danger" v-on:click="submitPostDelete(post.id, index)"><i class="fa fa-trash"></i> Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <br>
            <nav aria-label="...">
                <ul class="pagination">
                    <li v-if="page != 1" v-on:click="page--" class="page-item">
                    <span class="page-link">Previous</span>
                    </li>
                    <li v-bind:class="{active: pageNumber == page }" class="page-item" v-for="pageNumber in pages" :key="pageNumber.id" @click="page = pageNumber">
                    <span class="page-link">
                        {{pageNumber}}
                    </span>
                    <li  @click="page++" v-if="page < this.pages.length"  class="page-item ">
                    <a class="page-link" href="#" >Next</a>
                    </li>
                </ul>
        </nav> 
    </div>
    
</template>

<script>

import axios from "axios";

export default {
data() {
    return {
        posts: [],
        errors: [],
        pages: [],
        currentSort: "name",
        currentSortDir: "asc",
        perPage:5,
        page:1,
        componentLoaded: false,
        hello:"hello Ini Jalan Saat Mulai"
        };
    },

    created () {
        console.log(this.hello)
        this.getPosts();
    
    },

methods: {
    async getPosts(){
        try {
            const response = await axios.get(`/Framework/Laravel_Vue/laravue/public/posts`)
            this.posts = Object.values(response.data);
            // console.dir(this.posts)
            this.componentLoaded = true;
            } catch (e) {
        this.errors.push(e)
        }
    },
    
    submitPostDelete(id , index){
    this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) =>{
        if(result.value){
                axios.delete(`/Framework/Laravel_Vue/laravue/public/posts/`+id)
                .then(response => {
                    this.posts.splice(index, 1);      
                    }).catch(e => {
                    this.errors.push(e);
                });
            this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
    })    

    },

    setPages(){
    let numberOfpages = Math.ceil(this.posts.length / this.perPage);
    // console.dir(this.posts.length);
    this.pages.length = 0;
    for (let i = 1 ; i <= numberOfpages;i++){
        this.pages.push(i);
        // console.dir(this.pages);
        }
    },

    paginate (posts){
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return posts.slice(from, to);
    },

    sort: function(d) {
        if (d == this.currentSort) {
            this.currentSortDir = this.currentSortDir == "asc" ? "desc" : "asc";
                }
            this.currentSort = d;
            
            },
        },

computed: {
        displayedPosts : function(){
            let sortPost = this.posts.sort((a,b) => {
            let modifier = 1;
            if(this.currentSortDir === 'desc')
                modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                    if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                    return 0;
            });
            return this.paginate(sortPost)
        }
    },

    watch: {
        posts(){           
            this.setPages();
            
        }
    }
};
</script>