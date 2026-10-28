async function evaluacion() {
    try{

        const uri= "https://potential-guide-5vq55475qxr5f49jq-11434.app.github.dev/v1/systemone";
        const requerimiento = document.getElementById("requerimiento").value;

        const data = {
            model : 'tev1:0.8b',
            state : requerimiento,
            questions : {
                'condicion': {
                    'type': 'noul',
                    'instructions': '¿Incluye una situación que detone el evento?',
                    'criteria': {
                        'true': 'Especifica claramente el evento o situación detonante',
                        'false': 'No menciona qué situación dispara la acción',
                    }
                },
                'sujeto': {
                    'type': 'noul',
                    'instructions': '¿Indica quién realiza la acción (el sistema, un módulo o un actor)?',
                    'criteria': {
                        'true': 'Especifica claramente el sujeto que realiza la acción',
                        'false': 'No indica quién realiza la acción',
                    }
                },
                'verbo': {
                    'type': 'noul',
                    'instructions': '¿Incluye un verbo que exprese obligación, como "debe" o "deberá"?',
                    'criteria': {
                        'true': 'Usa un verbo de obligación como debe o deberá',
                        'false': 'No expresa obligación con un verbo',
                    }
                },
                'accion': {
                    'type': 'noul',
                    'instructions': '¿Describe qué acción concreta debe realizar el sistema?',
                    'criteria': {
                        'true': 'Especifica claramente la acción a realizar',
                        'false': 'No describe la acción a realizar',
                    }
                },
                'objeto': {
                    'type': 'noul',
                    'instructions': '¿Indica sobre qué elemento o dato se realiza la acción?',
                    'criteria': {
                        'true': 'Especifica el objeto o dato sobre el que se actúa',
                        'false': 'No indica sobre qué se realiza la acción',
                    }
                },
                'criterio': {
                    'type': 'noul',
                    'instructions': '¿Incluye un criterio de aceptación o validación verificable?',
                    'criteria': {
                        'true': 'Define un criterio claro para verificar que se cumple',
                        'false': 'No define cómo verificar que se cumple',
                    }
                }
            }
        }

        const response = await fetch(
            uri,
            {
                method:"POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            }
        );
        const resultado = await response.json();

        console.log("Conexión con la API exitosa")

        document.getElementById("condicion").value = resultado.answers.condicion.noul;
        document.getElementById("sujeto").value = resultado.answers.sujeto.noul;
        document.getElementById("verbo").value = resultado.answers.verbo.noul;
        document.getElementById("accion").value = resultado.answers.accion.noul;
        document.getElementById("objeto").value = resultado.answers.objeto.noul;
        document.getElementById("criterio").value = resultado.answers.criterio.noul;

    } catch (error){
        console.log("Ups, algo falló", error.message)
        throw error;
    }

}