# Get All Genre

Usado para listar todos os gêneros.

**URL** : `/genre/all/`

**Method** : `GET`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "genres": [
    {
      "id": "d117e5ec-33b0-450e-9eb9-df0490bbc858",
      "genre": "American Funk"
    },
    {
      "id": "46305ed0-76a1-457d-9970-0d70b671f70b",
      "genre": "Blues"
    },
    {
      "id": "e8a67de1-351a-41b5-9720-898b08b4623f",
      "genre": "Rock"
    }
  ]
}
```
