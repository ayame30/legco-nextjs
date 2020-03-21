
import gql from 'graphql-tag';

const MEMBER_VOTE_QUERY = gql`
  query MemberVote($individualId: Int) {
    yes: legco_IndividualVote_aggregate(where: {individual: {_eq: $individualId}, result: {_eq: "YES"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    no: legco_IndividualVote_aggregate(where: {individual: {_eq: $individualId}, result: {_eq: "NO"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    abstain: legco_IndividualVote_aggregate(where: {individual: {_eq: $individualId}, result: {_eq: "ABSTAIN"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    absent: legco_IndividualVote_aggregate(where: {individual: {_eq: $individualId}, result: {_eq: "ABSENT"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    present: legco_IndividualVote_aggregate(where: {individual: {_eq: $individualId}, result: {_eq: "PRESENT"}}) {
      aggregate {
        count(columns: result, distinct: false)
      }
    }
    
  }
`;

export default MEMBER_VOTE_QUERY;