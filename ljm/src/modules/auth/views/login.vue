<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Para movernos de página al entrar
import { authService } from './services/authService';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMsg = ref(''); // Para mostrar si algo sale mal

const onLogin = async () => {
  errorMsg.value = '';
  
  try {
    const data = await authService.login(username.value, password.value);
    console.log('¡Éxito!', data);
    
    // Si el login es correcto, lo mandamos a la pantalla principal
    // (Asegúrate de tener una ruta llamada 'home')
    router.push({ name: 'home' }); 
    
  } catch (err: any) {
    errorMsg.value = err; // Mostramos el error de la BD (ej: "Usuario no existe")
  }
};
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0a1224] p-4 font-sans text-white">
    
    <div class="absolute inset-0 z-0">
      <img 
        alt="Cruise ship deck" 
        class="h-full w-full object-cover opacity-20 blur-sm" 
        src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=2000"
      />
      <div class="absolute inset-0 bg-[#0a1224]/60"></div>
    </div>

    <div class="relative z-10 flex w-full max-w-md flex-col items-center justify-center">
      
      <div class="mb-8 text-center">
        <p class="mb-2 text-sm font-medium tracking-widest text-[#eacea9]/80 uppercase">LJM SEALINE</p>
        <h1 class="font-display text-5xl font-bold leading-tight text-white md:text-6xl">Welcome Aboard</h1>
        <h2 class="mt-2 text-base font-normal text-white/80 md:text-lg">Access your voyage management system</h2>
      </div>

      <div class="w-full rounded-xl bg-white/5 p-8 backdrop-blur-md border border-white/10">
        <form @submit.prevent="onLogin" class="flex flex-col gap-6">
          
          <div class="relative flex flex-col text-left">
            <label class="pb-2 text-sm font-medium text-white/90" for="username">Username</label>
            <div class="relative">
              <span class="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">person</span>
              <input 
                v-model="username"
                type="text"
                class="form-input h-14 w-full rounded-lg border border-[#eacea9]/20 bg-black/20 p-4 pl-12 text-base text-white placeholder:text-white/40 focus:border-[#eacea9] focus:outline-0 focus:ring-1 focus:ring-[#eacea9]" 
                id="username" 
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div class="relative flex flex-col text-left">
            <label class="pb-2 text-sm font-medium text-white/90" for="password">Password</label>
            <div class="relative">
              <span class="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">lock</span>
              <input 
                v-model="password"
                type="password"
                class="form-input h-14 w-full rounded-lg border border-[#eacea9]/20 bg-black/20 p-4 pl-12 text-base text-white placeholder:text-white/40 focus:border-[#eacea9] focus:outline-0 focus:ring-1 focus:ring-[#eacea9]" 
                id="password" 
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button 
            type="submit"
            class="flex h-14 cursor-pointer items-center justify-center rounded-lg bg-[#eacea9] px-5 text-base font-bold tracking-wider text-[#0a1224] shadow-lg shadow-[#eacea9]/20 transition hover:brightness-110 active:scale-95"
          >
            <span>Sign In</span>
          </button>
        </form>
      </div>

      <p class="mt-8 text-center text-sm font-normal text-[#eacea9]/70 underline-offset-4 cursor-pointer hover:text-[#eacea9] hover:underline">
        Forgot your password?
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Aquí traemos las fuentes que definimos en index.html */
.font-sans {
  font-family: 'Montserrat', sans-serif;
}
.font-display {
  font-family: 'Cormorant Garamond', serif;
}
input::placeholder {
  color: #b5aba1;
  opacity: 0.6;
}
</style>