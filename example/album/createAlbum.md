# Create Album

Usado para criar um novo álbum.

**URL** : `/album/create/`

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
  "name": "[nome do álbum]"
}
```

**Exemplo**

```json
{
  "name": "Xscape"
}
```

---

## Success Response

**Code** : `201 CREATED`

**Retorno**

```json
{
  "id": "c2e74b7b-c361-4d12-bdee-f9b80e995dad",
  "album": "Xscape"
}
```

---

## Error Response

**Condição** : Caso falte o campo de nome.

**Code** : `422 UNPROCESSABLE ENTITY`

**Retorno** :

```json
{
  "message": "The album name is missing"
}
```

---
