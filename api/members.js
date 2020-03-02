import axios, { delayResponse } from './';

export default function (id) {
  return axios.get("https://asia-east2-legcohk-6dc46.cloudfunctions.net/members", {
    crossdomain: true
  })
    .then(({ data: { data, count }}) => {
      return data.map((m) => {
        const { vote_count = 0, no_vote_count = 0 } = m.statistic.vote_rate[0] || {};
        const { present_count = 0, absent_count = 0 } = m.statistic.attendance_rate[0] || {};

        return {
          ...m,
          name: m.name_zh,
          party: m.political_affiliation,
          image: m.avatar,
          constituencyType: m.constituency_type,
          constituencyDistrict: m.constituency_district,
          statistic: {
            motionCount: m.statistic.motion_count,
            voteRate: (vote_count / (vote_count + no_vote_count) * 100).toFixed(2),
            attendanceRate: (present_count / (present_count + absent_count) * 100).toFixed(2),
          }
        };
      })
    });  
}
