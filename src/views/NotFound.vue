<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 2.5rem;
  color: #ff6f61;
}

.not-found p {
  font-size: 1.2rem;
  color: #555;
}

.not-found a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
</style>
