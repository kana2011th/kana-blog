import { categoryField } from './categoryField'

export const blogPostField = `
slug
banner {
  url
  width
  height
}
title
subtitle
date
featured
author {
  name
}
content
categoryCollection {
  items {
    ${categoryField}
  }
}
`
