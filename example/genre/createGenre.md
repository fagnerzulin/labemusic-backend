# Create Genre

Usado para criar um novo gênero.

**URL** : `/genre/create/`

**Method** : `POST`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

```json
{
  "name": "[nome do gênero]"
}
```

**Exemplo**

```json
{
  "name": "Blues"
}
```

---

## Success Response

**Code** : `201 CREATED`

**Retorno**

```json
{
  "id": "46305ed0-76a1-457d-9970-0d70b671f70b",
  "genre": "Blues"
}
```

---

## Error Response

**Condição** : Caso falte o campo de nome.

**Code** : `422 UNPROCESSABLE ENTITY`

**Retorno** :

```json
{
  "message": "The name field is missing"
}
```

---
