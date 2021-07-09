# Create Music

Usado para criar uma nova música.

**URL** : `/music/create/`

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
  "subtitle": "[título da música]",
  "file": "[link para música]",
  "genre": ["[id de cada gênero que a música tem]"],
  "album": "[id do album da música]"
}
```

**Exemplo**

```json
{
  "subtitle": "Slow It Down",
  "file": "https://www.youtube.com/watch?v=JFVtb5_Pec4",
  "genre": [
    "46305ed0-76a1-457d-9970-0d70b671f70b",
    "e8a67de1-351a-41b5-9720-898b08b4623f"
  ],
  "album": "5db21f67-949e-499f-ac55-642bd922e03e"
}
```

---

## Success Response

**Code** : `201 CREATED`

**Retorno**

```json
{
  "id": "00ac277e-d7e8-4cad-ae2e-7d43688da1f4",
  "subtitle": "Slow It Down",
  "author": "c7d9d623-77f3-4327-b276-eecfc1765290",
  "file": "https://www.youtube.com/watch?v=JFVtb5_Pec4",
  "genre": [
    "46305ed0-76a1-457d-9970-0d70b671f70b",
    "e8a67de1-351a-41b5-9720-898b08b4623f"
  ],
  "album": "5db21f67-949e-499f-ac55-642bd922e03e",
  "date": "2021-07-07 10:23:13"
}
```

---

## Error Response

**Condição** : Caso falte algum campo.

**Code** : `422 UNPROCESSABLE ENTITY`

**Retorno** :

```json
{
  "message": "Some field is missing"
}
```

---
