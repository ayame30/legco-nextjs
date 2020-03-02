import axios, { delayResponse } from './';
import response from './test.json';

const members = response
  .reduce((acc, r) => acc.concat(r.members), [])
  .filter((m, i, arr) => i !== arr.findIndex(obj => obj.id === m.id));

export default function (keyword = '') {
  const parsedKeyword = keyword.toUpperCase();
  return axios.get('https://asia-east2-legcohk-6dc46.cloudfunctions.net/searchMember', {
    params: {
      keyword: parsedKeyword
    }
  })
    .then(({ data }) => {
      return data.map((member) => ({
        ...member,
        id: member.member_id,
        name: member.name_zh,
        name_en: member.name_en,
        constituency_type: member.constituency_type,
        district: member.district,
      }));
    });
}
export function findByArea(area = '') {
  return delayResponse(
    members
      .map(m => ({
        id: m.id,
        name: m.name_ch,
        avatar: `https://g0vhk.io${m.image}`,
        party: m.party && m.party.name_ch,
        attendanceRate: m.id % 100,
        voteRate: m.id % 100,
        lastAction: ['agree', 'disagree', 'abstention', 'absent'][m.id % 4],
      }))
    )
} 