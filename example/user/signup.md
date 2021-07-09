# Signup

Usado para cadastrar um novo usuário.

- Obs: A senha precisa ter no mínimo 6 caracteres, com ao menos uma letra, um numero e um caracter especial
- Obs: O email e o nickname são valores únicos

**URL** : `/user/signup/`

**Method** : `POST`

**Auth required** : NO

**Dados necessários**

```json
{
  "email": "[endereço de e-mail válido]",
  "password": "[senha valida]",
  "nickname": "[nickname]",
  "name": "[nome do usuário]"
}
```

**Exemplo**

```json
{
  "name": "ale",
  "email": "ale@mail.com",
  "nickname": "ale123",
  "password": "asdas1213@asda"
}
```

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

---

## Error Response

**Condição** : Caso falte algum dos campos.

**Code** : `422 UNPROCESSABLE ENTITY`

**Retorno** :

```json
{
  "message": "Some field is missing"
}
```

---

**Condição** : Caso o email não seja válido.

**Code** : `422 UNPROCESSABLE ENTITY`

**Retorno** :

```json
{
  "message": "The email is not valid"
}
```

---

**Condição** : Caso a senha não respeite as regras.

**Code** : `400 BAD REQUEST`

**Retorno** :

```json
{
  "message": "The password must have at least six characters, at least one letter, one number and one special character"
}
```
