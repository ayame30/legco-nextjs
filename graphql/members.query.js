
import gql from 'graphql-tag';

const MEMBERS_QUERY = gql`
  query Members {
    legco_CouncilMembers(where: {Council: {start_year: {_eq: 2016}}}) {
      disqualified
      id
      member
      membership_type
      CouncilMembershipType {
        id
        category
        sub_category
      }
      Individual {
        Party {
          id
          name_ch
          name_short_ch
        }
        id
        image
        name_ch
      }
    }
  }
`;

export default MEMBERS_QUERY;