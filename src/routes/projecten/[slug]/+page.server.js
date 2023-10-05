import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
  query Projectens {
    projectens {
        id
        categorie
        intro
        plaats {
            latitude
            longitude
        }
        publishedAt
        slug
        title
    }
  }
  ` 
  
  return await hygraph.request(query)
}