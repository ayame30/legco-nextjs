
import gql from 'graphql-tag';

const MEMBER_QUERY = gql`
  query Member($id: Int!) {
    member: legco_CouncilMembers_by_pk(id: $id) {
      id
      Individual {
        id
        image
        name_ch
        Party {
          id
          name_short_ch
          name_ch
        }
      }
      CouncilMembershipType {
        id
        category
        sub_category
      }
    }
  }
`;

export default MEMBER_QUERY;