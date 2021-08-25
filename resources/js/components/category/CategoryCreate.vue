<template>
    <div class="card">
        <div class="card-header">
            Create Category
        </div>
        <div class="card-body">
            <form-category @saveData="saveData"></form-category>
        </div>
    </div>
</template>
<script>
    import {
        reactive,
        ref
    } from 'vue';
    import {
        useRouter
    } from 'vue-router';
    import FormCategory from './_FormCategory';

    export default {
        components: {
            FormCategory
        },
        setup() {
            //vue router
            const router = useRouter()

            const saveData = async (category) => {
                try {
                    let paramData = {
                        name: category.name,
                        description: category.description
                    };

                    const response = await fetch(`${appApiBaseUrl}/category`, {
                        method: 'POST', // or 'PUT'
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
                saveData,
                router
            }
        },
    }

</script>
