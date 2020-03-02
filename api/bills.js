import { delayResponse } from './';

export function listHottest() {
  return delayResponse([
    {
      id: 'b123',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b124',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b125',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
  ]);
}

export function listUpComing() {
  return delayResponse([
    {
      id: 'b126',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b127',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b128',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
  ]);
}

export function listUpdates() {
  return delayResponse([
    {
      id: 'b129',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b130',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b131',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
  ]);
}

export function listByCategory(category = '', page, limit) {
  return delayResponse([
    {
      id: 'b126',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: [category],
      status: '二讀',
    },
    {
      id: 'b127',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: [category],
      status: '二讀',
    },
    {
      id: 'b128',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利', category],
      status: '二讀',
    },
    {
      id: 'b126',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: [category],
      status: '二讀',
    },
    {
      id: 'b127',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: [category],
      status: '二讀',
    },
    {
      id: 'b128',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: [category],
      status: '二讀',
    },
    {
      id: 'b129',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b130',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
    {
      id: 'b131',
      meetingDate: '2019-11-12',
      title: '全方位支援 60 歲至 64 歲長者',
      tags: ['長者', '福利'],
      status: '二讀',
    },
  ]);
}


export function get(id) {
  return delayResponse({
    id: 'b126',
    meetingDate: '2019-11-12',
    title: '全方位支援 60 歲至 64 歲長者',
    description: '現時，本港並沒有法定退休年齡，故不少僱員年齡達60歲便被迫退休；他們在退休後，往往因為年齡、身體狀況、適合的職位不足及年齡歧視等因素，以致難以重投勞動市場，而政府為長者提供的大部分社會服務及福利的申請門檻均在65歲或以上，令60歲至64歲的長者未能獲得支援；就此，本會促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。',
    author: {
      id: 'm123',
      name: '田北辰',
    },
    tags: ['長者', '福利'],
    status: '二讀',
    processes: ['一讀', '討論', '二讀', '討論', '三讀'],
    processIndex: 3,
    votes: [
      {
        title: '二讀表決結果',
        result: 'pass',
        host: {
          id: 'm123',
          name: '田北辰',
        },
        vote: [
          { member: {id: 'm1', name: '田北辰'}, party: { id: 12, name: '民主黨'}, decision: 'agree', constituencyType: 'G'},
          { member: {id: 'm2', name: '田北辰'}, party: { id: 12, name: '民主黨'}, decision: 'agree', constituencyType: 'G'},
          { member: {id: 'm3', name: '田北辰'}, party: { id: 12, name: '民主黨'}, decision: 'absent', constituencyType: 'G'},
          { member: {id: 'm4', name: '田北辰'}, party: { id: 12, name: '民主黨'}, decision: 'against', constituencyType: 'G'},
          { member: {id: 'm5', name: '田北辰'}, party: { id: 13, name: '自由黨'}, decision: 'against', constituencyType: 'G'},
          { member: {id: 'm6', name: '田北辰'}, party: { id: 13, name: '自由黨'}, decision: 'against', constituencyType: 'G'},
          { member: {id: 'm7', name: '田北辰'}, party: { id: 13, name: '自由黨'}, decision: 'abstain', constituencyType: 'G'},
          { member: {id: 'm8', name: '田北辰'}, party: { id: 13, name: '自由黨'}, decision: 'abstain', constituencyType: 'F'},
          { member: {id: 'm9', name: '田北辰'}, party: { id: 13, name: '自由黨'}, decision: 'abstain', constituencyType: 'F'},
          { member: {id: 'm10', name: '田北辰'}, party: { id: 14, name: '民建聯'}, decision: 'against', constituencyType: 'F'},
          { member: {id: 'm11', name: '田北辰'}, party: { id: 14, name: '民建聯'}, decision: 'abstain', constituencyType: 'G'},
          { member: {id: 'm12', name: '田北辰'}, party: { id: 14, name: '民建聯'}, decision: 'abstain', constituencyType: 'G'},
        ]
      }
    ],
    news: [
      {
        image: 'https://static.appledaily.hk/images/e-paper/20190912/large/1568282043_9a4a.jpg',
        title: '60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏',
        source: {
          flag: '',
          name: '香港01',
        },
        date: '2019-08-28',
        url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
      },
      {
        image: 'https://static.appledaily.hk/images/e-paper/20190912/large/1568282043_9a4a.jpg',
        title: '60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏',
        source: {
          flag: '',
          name: '香港01',
        },
        date: '2019-08-28',
        url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
      },
      {
        image: 'https://static.appledaily.hk/images/e-paper/20190912/large/1568282043_9a4a.jpg',
        title: '60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏',
        source: {
          flag: '',
          name: '香港01',
        },
        date: '2019-08-28',
        url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
      },
    ],
    questions: [
      { id: 434, member: {id: 'm4', name: '田北辰'}, target: '社會福利署', title: '現時長者福利'},
      { id: 435, member: {id: 'm4', name: '田北辰'}, target: '社會福利署', title: '現時長者福利'},
      { id: 436, member: {id: 'm4', name: '田北辰'}, target: '社會福利署', title: '現時長者福利'},
      { id: 437, member: {id: 'm4', name: '田北辰'}, target: '社會福利署', title: '現時長者福利'},
      { id: 438, member: {id: 'm4', name: '田北辰'}, target: '社會福利署', title: '現時長者福利'},
    ],
  });
}