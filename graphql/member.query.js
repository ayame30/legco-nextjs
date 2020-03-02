
import gql from 'graphql-tag';

const MEMBER_QUERY = gql`
  query Member {
    legco_CouncilMembers_by_pk(id: 1) {
      id
      Individual {
        id
        image
        name_ch
        Party {
          id
          name_short_ch
        }
      }
    }
    yes: legco_IndividualVote_aggregate(where: {individual: {_eq: 107}, result: {_eq: "YES"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    no: legco_IndividualVote_aggregate(where: {individual: {_eq: 107}, result: {_eq: "NO"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    abstain: legco_IndividualVote_aggregate(where: {individual: {_eq: 107}, result: {_eq: "ABSTAIN"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    absent: legco_IndividualVote_aggregate(where: {individual: {_eq: 107}, result: {_eq: "ABSENT"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    present: legco_IndividualVote_aggregate(where: {individual: {_eq: 107}, result: {_eq: "PRESENT"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    
    
  }
`;

export default MEMBER_QUERY;