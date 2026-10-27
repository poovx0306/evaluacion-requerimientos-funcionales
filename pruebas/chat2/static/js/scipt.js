async function evaluacion() {
    try {
        const uri = "http://localhost:11434/v1/systemone";
        const requerimiento = prompt("Requerimiento Funcional: ");

        const data = {
            model: "d1-omni:600m",
            state: requerimiento,
            questions: {
                condicion: {
                    type: "bool",
                    instructions: "¿Incluye una situación que detone el evento?",
                    criteria: {
                        true: "Especifica claramente el evento o situación detonante",
                        false: "No menciona qué situación dispara la acción"
                    }
                }
            }
        };

        const response = await fetch(uri, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${await response.text()}`);
        }

        const resultado = await response.json();
        console.log("Conexión con la API exitosa");
        console.log("Respuesta completa:", resultado);
        console.log("Criterio:", resultado.answers?.condicion);

    } catch (error) {
        console.error("Ups, algo falló:", error);
    }
}

evaluacion();