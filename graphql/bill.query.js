
import gql from 'graphql-tag';

const BILL_QUERY = gql`
  query Bill($internal_key: String!) {
    bill: legco_Bill_by_pk(internal_key: $internal_key) {
      author: proposed_by_chi
      title: bill_title_chi
      id: internal_key
    }
    billReading: legco_BillReading_by_pk(internal_key: $internal_key) {
      first_reading_date
      second_reading_date
      third_reading_date
    }
    billDescription: legco_BillDescription_by_pk(internal_key: $internal_key) {
      description
    }
    billMeeting: legco_BillMeeting(internal_key: $internal_key) {
      agenda
      attendance
      cancelled
      internal_key
      date
      minutes
    }
  }
`;

export default BILL_QUERY;