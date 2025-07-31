       let nomesAmigo = []; // Array para armazenar os nomes

        function adicionarNome() {
            const nomeInput = document.getElementById('nomeAmigo');
            const nome = nomeInput.value.trim(); // Pega o valor e remove espaços em branco

            if (nome === '') {
                alert('Por favor, digite um nome válido!');
                return; // Impede que a função continue se o campo estiver vazio
            }

            nomes.push(nome); // Adiciona o nome ao array
            atualizarListaNomes(); // Atualiza a lista visível na página
            nomeInput.value = ''; // Limpa o campo de texto
            nomeInput.focus(); // Coloca o foco de volta no campo
        }

        function atualizarListaNomes() {
            const listaNomesElement = document.getElementById('listaNomes');
            listaNomesElement.innerHTML = ''; // Limpa a lista atual

            nomes.forEach(nome => {
                const li = document.createElement('li');
                li.textContent = nome;
                listaNomesElement.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (nomes.length === 0) {
                alert('Por favor, adicione nomes à lista antes de sortear!');
                return;
            }

            const indiceSorteado = Math.floor(Math.random() * nomes.length);
            const amigoSorteado = nomes[indiceSorteado];

            document.getElementById('resultadoSorteio').textContent = amigoSorteado;
        }