import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
  query SPATquery {
    projectens {
      categorie
      createdAt
      intro
      plaats {
        latitude
        longitude
      }
      image {
        url
      }
      title
      slug
    }
    kennisbanks {
      author
      categorie
      createdAt
      date
      image {
        url
      }
      title
      content {
        html
      }
      slug
    }
  }
  ` 
  
  return await hygraph.request(query)
}

