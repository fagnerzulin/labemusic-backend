# Get All Albums

Usado para listar todos os albums.

**URL** : `/album/all/`

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
  "albums": [
    {
      "id": "e9f9caa2-9ba9-4fb3-8293-1ab21fb1be24",
      "album": "A Night at the Opera"
    },
    {
      "id": "5db21f67-949e-499f-ac55-642bd922e03e",
      "album": "Ceremonials"
    },
    {
      "id": "8affed88-7603-453f-8b4e-8d9028d41dde",
      "album": "High As Hope"
    },
    {
      "id": "078daead-dce7-45ec-9faf-b840a75d5fc7",
      "album": "The Dark & The Light"
    },
    {
      "id": "c2e74b7b-c361-4d12-bdee-f9b80e995dad",
      "album": "Xscape"
    }
  ]
}
```
