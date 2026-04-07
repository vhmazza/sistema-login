const form = document.getElementById('loginForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
      e.preventDefault(); 

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      result.textContent = '';
      result.className = '';

      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
          result.textContent = data.message;
          result.className = '';
        } else {
          result.textContent = data.message;
          result.className = 'error';
        }

      } catch (error) {
        result.textContent = 'Erro ao conectar com o servidor.';
        result.className = 'error';
      }
});