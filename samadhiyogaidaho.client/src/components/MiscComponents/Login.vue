<template>
  <span class="navbar-text text-center">
    <button class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" @click="login"
      v-if="!user.isAuthenticated">
      Login
    </button>
    <div v-else>
         <img :src="account.picture || user.picture" alt="account photo" height="80" class="rounded" />
     
    </div>
  </span>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../../AppState'
import { AuthService } from '../../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
