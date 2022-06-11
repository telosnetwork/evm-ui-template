import { defineStore } from 'pinia';
import { web3 } from 'boot/web3';

export const useAccountStore = defineStore('account', {
  id: "account",

  state: () => ({
    loading: false,
    authenticated: false,
    address: '',
    truncatedAddress: ''
  }),

  getters: {
    isLoading: state => state.loading,
    isAuthenticated: state => state.authenticated,
    getAddress: state => state.address,
    getTruncatedAddress: state => state.truncatedAddress
  },

  actions: {
    setAddress(address){
        this.address = address;
        this.truncatedAddress = (address.length > 12) ? address.slice(0, 5) + "..." + address.slice(-5) : address;
    },
    async login(){
        if(web3.signer === null) {
            return "No provider found. Download Metamask and reload the page";
        }
        this.loading = true;
        await web3.signer.send("eth_requestAccounts", []).then(async (response) => {
            this.authenticated = true;
            this.loading = false;
            this.setAddress(response[0]);
            return false;
        }).catch(e => {
            this.loading = false;
            return "Login error: " + e.message;
        });
    },
    logout(){
      try {
        this.authenticated = false;
        this.address = null;
        // Login & loadAccount
      } catch (e) {
        return "Logout error: " + e.message;
      }
    },
  }
})
