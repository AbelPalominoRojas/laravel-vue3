<template>
    <div class="card">
        <div class="card-header">
            Edit Category
        </div>
        <div class="card-body">
            <form-category :category="category" @saveData="saveData"></form-category>
        </div>
    </div>
</template>
<script>
    import {
        reactive,
        ref,
        onMounted
    } from 'vue';
    import {
        useRouter,
        useRoute
    } from 'vue-router';
    import FormCategory from './_FormCategory';

    export default {
        components: {
            FormCategory
        },
        setup() {
            const category = reactive({
                name: '',
                description: ''
            });

            //vue router
            const router = useRouter();
            //vue route
            const route = useRoute();

            onMounted(async () => {
                const response = await fetch(`${appApiBaseUrl}/category/${route.params.id}`);
                const data = await response.json();

                category.name = data.name;
                category.description = data.description;
            });

            const saveData = async (category) => {
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

                    if (data.hasOwnProperty('id')) {
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
