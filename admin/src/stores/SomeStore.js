import { defineStore } from "pinia";

// JUST AN EXAMPLE HOW TO CREATE STORES

const useSomeStore = defineStore('someStore', {
    state: () => ({ 
        // some states
    })
})