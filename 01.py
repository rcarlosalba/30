print(f'Ingresa la palabra: ')
palabra = input().lower().strip()
vocales = ['a', 'e', 'i', 'o', 'u']


def contar_vocales(palabra):
    contador = 0
    for letra in palabra:
        if letra in vocales:
            contador += 1
    return contador


print(f'La palabra tiene {contar_vocales(palabra)} vocales')
