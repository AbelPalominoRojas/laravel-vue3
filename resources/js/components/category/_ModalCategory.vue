<template>
    <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <pre>{{category}}</pre>
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
        emits: ['showCategory'],
        setup(props, {
            emit
        }) {

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
                console.log('showModal', data);

                category.name = data.name;
                category.description = data.description;

                currentModal.show();
            };

            const emitShowCategory = () => {
                emit('showCategory', true);
            };


            return {
                category,
                showModal,
                emitShowCategory
            }
        },
    }

</script>
