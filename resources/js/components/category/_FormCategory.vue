<template>
    <form class="row g-3" @submit.prevent="emitSaveData">
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
</template>
<script>
    import {
        reactive
    } from 'vue';

    export default {
        props: {
            category: {
                type: Object,
                default: () => {
                    return {
                        name: '',
                        detail: ''
                    }
                }
            }
        },
        emits:['saveData'],
        setup(props, {emit}) {

            const category = reactive(props.category);

            const emitSaveData =()=> {
                emit('saveData', category);
            }


            return {
                category,
                emitSaveData
            }
        },
    }

</script>
