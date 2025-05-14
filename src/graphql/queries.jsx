import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
    slug
    title
    id
    coverphoto {
      url
    }
    author {
      name
    }
  }
  }
  
`;
 export  {  GET_BLOGS_INFO}