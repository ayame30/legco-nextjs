import { useQuery } from '@apollo/react-hooks';
import BILL_QUERY from '../graphql/bill.query';
import _ from 'lodash';
const getStatus = (billReading) => {
    if (billReading.third_reading_date !== 'None') return '三讀';
    if (billReading.second_reading_date !== 'None') return '二讀';
    if (billReading.first_reading_date !== 'None') return '一讀';
    return null;
}
const getProcesses = (billReading) => {
    if (billReading.third_reading_date) return ['一讀', '二讀', '三讀'];
    if (billReading.second_reading_date) return ['一讀', '二讀'];
    if (billReading.first_reading_date) return ['一讀'];
    return ['一讀'];
}
const getProcessIndex = (billReading) => {
    if (billReading.third_reading_date !== 'None') return 3;
    if (billReading.second_reading_date !== 'None') return 2;
    if (billReading.first_reading_date !== 'None') return 1;
    return 0;
}

export default ({ id }) => {
    const { data, ...rest } = useQuery(BILL_QUERY, {
        variables: { internal_key: id }
    });

    const bill = _.get(data, 'bill', {});
    const billDescription = _.get(data, 'billDescription', {});
    const billReading = _.get(data, 'billReading', {});

    const billData = {
        id: _.get(bill, 'id', ''),
        meetingDate: '2019-11-12',
        title: _.get(bill, 'title', ''),
        description: _.get(billDescription, 'description', ''),
        author: _.get(bill, 'author', ''),
        tags: ['長者', '福利'],
        status: getStatus(billReading || {}),
        processes: getProcesses(billReading || {}),
        processIndex: getProcessIndex(billReading || {}),
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
      };

    return {
        data: billData,
        original: data,
        ...rest,
    };
}