<template>
    <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
            List categories
            <div>
                <router-link :to="{ name: 'category.create' }" class="btn btn-sm btn-success">
                    <i class="fas fa-plus"></i>
                    <span class="d-none d-sm-inline-block ms-1">New</span>
                </router-link>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cat in categories" :key="cat.id">
                            <td>
                                <div class="text-nowrap">
                                    <button type="button" class="btn btn-sm btn-outline-warning border-0">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <router-link :to="{ name: 'category.edit', params:{id: cat.id } }"
                                        class="btn btn-sm btn-outline-info border-0">
                                        <i class="fas fa-edit"></i>
                                    </router-link>
                                    <button type="button" @click.prevent="deleteData(cat)"
                                        class="btn btn-sm btn-outline-danger border-0">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                            <td v-text="cat.id"></td>
                            <td v-text="cat.name"></td>
                            <td v-text="cat.description"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>
<script>
    import {
        onMounted,
        ref
    } from 'vue';
    import Swal from 'sweetalert2';

    export default {

        setup() {

            //reactive state
            let categories = ref([]);

            onMounted(() => {
                listData();
            });

            const listData = async () => {
                try {
                    const response = await fetch(`${appApiBaseUrl}/category`);
                    const data = await response.json();

                    categories.value = data;
                } catch (error) {
                    console.log(error);
                }
            }

            const deleteData = async (item) => {
                try {

                    const swalResponse = await Swal.fire({
                        title: 'Are you sure?',
                        html: `¿Estás seguro de que quieres eliminar <b>${item.name}</b>?`,
                        icon: 'warning',
                        showCancelButton: true,
                        customClass: {
                            confirmButton: 'btn btn-info mx-1',
                            cancelButton: 'btn btn-danger mx-1'
                        },
                        buttonsStyling: false,
                        confirmButtonText: 'confirmar',
                        cancelButtonText: 'cancelar',
                    });

                    if (swalResponse.isConfirmed) {
                        const response = await fetch(`${appApiBaseUrl}/category/${item.id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });

                        const data = await response.json();

                        console.log(data);

                        listData();
                    }

                } catch (error) {
                    console.log(error);
                }
            }

            return {
                categories,
                deleteData
            }
        },
    }

</script>
