import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private'

console.log(`URL: ${HYGRAPH_URL}
KEY: ${HYGRAPH_KEY}

`)

import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`,
  },
})