import { gql } from "@apollo/client";

const PROJECTS = gql`
  query  {
    projects {
      budget
      id
      name
      percentage
      projectImage {
        url
      }
      members {
        url
      }
    }
  }
`;

const AUTHORS = gql`
  query authors {
  authors {
    email
    employed
    job
    id
    name
    online
    role
    image {
      url
    }
  }
}
`
const WORKS = gql`
  query works {
  works {
    id
    percentage
    project
    situation
    image {
      url
    }
    budget
  }
}
`

const TRANSACTIONS = gql`
  query transactions {
  transactions {
    date
    name
    id
    price
  }
}
`
export  {PROJECTS, AUTHORS, WORKS, TRANSACTIONS}