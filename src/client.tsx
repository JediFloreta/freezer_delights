import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: process.env.REACT_APP_COLD_SLICE_SPACE_ID,
  accessToken: process.env.REACT_APP_COLD_SLICE_ACCESS_TOKEN
})