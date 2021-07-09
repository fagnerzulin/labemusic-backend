# Get Music By Id

Usado para pegar uma música pelo seu id.

**URL** : `/music/:id`

**Method** : `GET`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req params_ o id da música se deseja consultar.

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "music": {
    "id": "7e5e8903-bebf-4af9-a3b1-c44fa7535c7c",
    "subtitle": "Give Me the Night",
    "author": "Fagner",
    "file": "https://www.youtube.com/watch?v=Omnpu8mzX4c",
    "genre": ["Blues", "Rock"],
    "album": "Ceremonials",
    "date": "2021-07-07T10:19:57.000Z"
  }
}
```

---

## Error Response

**Condição** : Caso a música não seja encontrada.

**Code** : `404 NOT FOUND`

**Retorno** :

```json
{
  "message": "Music not found"
}
```
