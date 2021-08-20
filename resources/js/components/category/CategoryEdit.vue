<template>
    <div class="card">
        <div class="card-header">
            Edit Category
        </div>
        <div class="card-body">
            <form class="row g-3" @submit.prevent="saveData">
                <div class="col-md-6">
                    <label class="form-label">Name</label>
                    <input type="text" v-model="category.name" class="form-control">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Description</label>
                    <input type="text" v-model="category.description" class="form-control">
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <router-link :to="{ name: 'category' }" class="btn btn-info">
                        <i class="fas fa-reply"></i>
                        <span class="d-none d-sm-inline-block ms-1">Return</span>
                    </router-link>
                    <div>
                        <button type="submit" class="btn btn-success waves-effect waves-light me-2">
                            <i class="fa fa-save"></i>
                            Save
                        </button>
                        <button type="reset" class="btn waves-effect waves-light btn-outline-secondary ml-2">
                            <i class="fa fa-window-close"></i>
                            <span class="d-none d-sm-inline-block ms-1">Cancel</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
    setup() {
        const category = reactive({
            name:'',
            description: ''
        });

        //vue router
        const router = useRouter();
        //vue route
        const route = useRoute();

        onMounted( async ()=> {
            const response = await fetch(`${appApiBaseUrl}/category/${route.params.id}`);
            const data = await response.json();

            category.name = data.name;
            category.description = data.description;
        });

        const saveData = async () => {
                try {
                    let paramData = {
                        name: category.name,
                        description: category.description
                    };

                    const response = await fetch(`${appApiBaseUrl}/category/${route.params.id}`, {
                        method: 'put', // or 'PUT'
                        body: JSON.stringify(paramData), // data can be `string` or {object}!
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    const data = await response.json();

                    if(data.hasOwnProperty('id')){
                                        //redirect ke post index
                        router.push({
                            name: 'category'
                        })
                    }

                } catch (error) {
                    console.log(error);
                }

        };

        return {
            category,
            saveData,
            router
        }
    },
}
</script>
