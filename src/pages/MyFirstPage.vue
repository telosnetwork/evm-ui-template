<template>
    <q-page class="full-width">
        <div class="flex centered mt40">
            <LoginRequired v-if="!account.isAuthenticated" loginLabel="Login to see this page" />
            <div v-else>
                <div class="flex centered">
                    <q-icon name="check_circle" size="10em" />
                </div>
                <h2 class="text-h2 text-bold flex"> Welcome {{ account.truncatedAddress }} !</h2>
            </div>
        </div>
    </q-page>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useAccountStore } from 'stores/account';
    import LoginRequired from "components/Login/LoginRequired.vue";

    const account = useAccountStore();

    export default defineComponent({
        name: 'MyFirstPage',
        components: {
            LoginRequired
        },
        setup(){
            return {
                account: account,
            }
        },
    })
</script>