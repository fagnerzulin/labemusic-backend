# Get All Musics

Usado para listar todas as músicas daquele usuário.

**URL** : `/music/all/`

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
  "musics": [
    {
      "id": "00ac277e-d7e8-4cad-ae2e-7d43688da1f4",
      "subtitle": "Slow It Down",
      "author": "Fagner",
      "file": "https://www.youtube.com/watch?v=JFVtb5_Pec4",
      "genre": [
        "Blues",
        "Rock"
      ],
      "album": "Ceremonials",
      "date": "2021-07-07T10:23:13.000Z"
    },
    {
      "id": "7e5e8903-bebf-4af9-a3b1-c44fa7535c7c",
      "subtitle": "Give Me the Night",
      "author": "Fagner",
      "file": "https://www.youtube.com/watch?v=Omnpu8mzX4c",
      "genre": [
        "Blues",
        "Rock"
      ],
      "album": "Ceremonials",
      "date": "2021-07-07T10:19:57.000Z"
    },
    {
      "id": "809c7999-db37-47f9-bd7e-efc3ceaf73cf",
      "subtitle": "Queen of Peace",
      "author": "Fagner",
      "file": "https://www.youtube.com/watch?v=KSM0lLbVYOo",
      "genre": [
        "Blues",
        "Rock"
      ],
      "album": "Ceremonials",
      "date": "2021-07-06T18:01:45.000Z"
    },
    {
      "id": "c0980482-361a-4a57-adf0-f3bbc78a768a",
      "subtitle": "I Wish",
      "author": "Fagner",
      "file": "https://www.youtube.com/watch?v=Me-HOoM-3D4",
      "genre": [
        "Blues",
        "Rock"
      ],
      "album": "Ceremonials",
      "date": "2021-06-07T00:00:00.000Z"
    }
  ]
}
}
```
