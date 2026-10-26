import ollama

requerimiento = input("Requerimiento Funcional: ")

response = ollama.systemone(
    model='d1-omni:600m',
    state=requerimiento,
    questions={
        'condicion': {
            'type': 'noul',
            'instructions': '¿Incluye una situación que detone el evento?',
            'criteria': {
                'true': 'Especifica claramente el evento o situación detonante',
                'false': 'No menciona qué situación dispara la acción',
            }
        }
    },
)

condicion = response.answers['condicion'].noul

if condicion >= 0.5:
    print("1. Cumple la condición")
else:
    print("NO cumple con la condición ", response.answers['condicion'].noul)