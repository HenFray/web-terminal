document.addEventListener('DOMContentLoaded', function() {
    const commandInput = document.getElementById('commandInput');
    const outputContainer = document.getElementById('outputContainer');
    let isClearing = false; // Variable para controlar si se está ejecutando el comando de limpiar

    function simulateHackerLoading() {
        const commands = [
            { command: "Decrypting firewall", progress: 30 },
            { command: "Hacking mainframe", progress: 40 },
            { command: "Injecting malware", progress: 20 },
            { command: "Cracking encryption", progress: 10 },
            { command: "Bypassing security", progress: 50 },
            { command: "Executing code", progress: 60 },
            { command: "Cooking Cookies", progress: 100}
        ];
    
        let index = 0;
    
        function executeCommand() {
            if (index < commands.length) {
                const command = commands[index].command;
                const progress = commands[index].progress;
    
                const outputElement = document.createElement('p');
                outputElement.textContent = `henfray@DESKTOP-MAUROF:~$ ${command}`;
                outputContainer.appendChild(outputElement);
    
                let progressValue = 0;
                const progressInterval = setInterval(() => {
                    progressValue += 1;
                    progressBar.style.width = `${progressValue}%`;
    
                    if (progressValue >= progress) {
                        clearInterval(progressInterval);
                        index++;
                        executeCommand();
                    }
                }, 50);
            } else {
                if (isClearing) {
                    clearTerminal();
                    isClearing = false; // Restablecer isClearing a false después de limpiar
                }
            }
        }
    
        executeCommand();
    }
    

    function clearTerminal() {
        outputContainer.innerHTML = '';
        progressBar.style.width = '0%';
    }

    function listSkills() {
        const skills = [
            "python.py",
            "pandas.py",
            "javascript.js",
            "index.html",
            "styles.css",
            "c#.cs",
            "query.sql"
        ];

        // Añadido un espacio antes de la lista de habilidades
        const spaceElement = document.createElement('p');
        spaceElement.textContent = '';
        outputContainer.appendChild(spaceElement);

        skills.forEach(skill => {
            const skillElement = document.createElement('p');
            skillElement.textContent = skill;
            outputContainer.appendChild(skillElement);
        });
    }

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = commandInput.value;
            const outputElement = document.createElement('p');
            outputElement.textContent = `henfray@DESKTOP-MAUROF:~$ ${command}`;
            outputContainer.appendChild(outputElement);
            commandInput.value = '';
            outputContainer.scrollTop = outputContainer.scrollHeight;

            switch (command.trim().toLowerCase()) {
                case 'clear':
                    isClearing = true;
                    setTimeout(clearTerminal, 0);
                    break;
                case 'skills':
                    listSkills();
                    break;
            }
        }
    });

    window.addEventListener('load', function() {
        simulateHackerLoading();
    });
});
