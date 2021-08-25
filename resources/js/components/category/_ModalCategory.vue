<template>
    <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Category detail</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">Name</label>
                            <span type="text" v-text="category.name" class="form-control"></span>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Description</label>
                            <span type="text" v-text="category.description" class="form-control"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getCurrentInstance,
        onMounted,
        onUnmounted,
        reactive
    } from 'vue';
    import {
        Modal
    } from 'bootstrap';

    export default {
        setup() {

            const category = reactive({
                name: '',
                description: ''
            });
            const internalInstance = getCurrentInstance();
            let currentModal = null;

            onMounted(() => {
                currentModal = new Modal(internalInstance.ctx.$el, {
                    keyboard: false
                });
            });

            onUnmounted(() => {
                currentModal.dispose();
            });

            const showModal = (data) => {

                category.name = data.name;
                category.description = data.description;

                currentModal.show();
            };

            return {
                category,
                showModal
            }
        },
    }

</script>
