# graphql-tools-stitching-errors

Repro demonstrating issues with graphql-tools error stitching.

## Steps

```
git clone https://github.com/hwillson/graphql-tools-stitching-errors.git
cd graphql-tools-stitching-errors
npm i
npm start
```

**Test good response (no stitching):**

```
curl -X POST http://localhost:3000/graphql \
  -H 'Content-Type:application/json' \
  -H 'Accept:application/json' \
  -d '{"query":"query{cars{inventory}}"}'
```

**Test bad response (stitching):**

```
curl -X POST http://localhost:3001/graphql \
  -H 'Content-Type:application/json' \
  -H 'Accept:application/json' \
  -d '{"query":"query{cars{inventory}}"}'
```
