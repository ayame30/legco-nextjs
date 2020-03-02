import axios, { delayResponse } from './';

export default function (id) {
  return axios.get(`/legco/individual/${id}`)
    .then(({ data }) => {
      const { yes = 0, no = 0, absent = 0, abstain = 0, present = 0 } = data;
      const countTotalVote = no + yes + absent + abstain;
      const countTotalMeeting = countTotalVote + present;

      return Promise.resolve({
        id: id,
        name: data.name_ch,
        name_en: data.name_en,
        avatar: `https://g0vhk.io${data.image}`,
        party: data.party && data.party.name_ch,
        attendanceRate: (100 - (absent / countTotalMeeting * 100)).toFixed(2),
        voteRate: ((no + yes + abstain) / countTotalVote * 100).toFixed(2),
        questionRate: '-',
        speechCount: '-',
        amendmentCount: '-',
        lastAction: 'agree',
        tags: [
          '建制', '功能組別','建制', '功能組別','建制', '功能組別'
        ]
      })
    });  
}

export function voteHistory(id) {
  return delayResponse([
    {
      id: '123121',
      voteResult: 'passed',
      name: '逃犯條例修訂案',
      date: '23/04/2019',
      action: 'agree',
      avatar: 'assets/img/avatars/1.jpg',
    },
    {
      id: '123122',
      voteResult: 'passed',
      name: '逃犯條例修訂案',
      date: '23/04/2019',
      action: 'absent', //TODO
      avatar: 'assets/img/avatars/1.jpg',
    },
    {
      id: '123123',
      voteResult: 'negatived',
      name: '逃犯條例修訂案',
      date: '23/04/2019',
      action: 'disagree', //TODO
      avatar: 'assets/img/avatars/1.jpg',
    },
    {
      id: '123124',
      voteResult: 'passed',
      name: '逃犯條例修訂案',
      date: '23/04/2019',
      action: 'abstention', //TODO
      avatar: 'assets/img/avatars/1.jpg',
    },
    {
      id: '123125',
      voteResult: 'negatived',
      name: '逃犯條例修訂案',
      date: '23/04/2019',
      action: 'disagree', //TODO
      avatar: 'assets/img/avatars/1.jpg',
    },
    {
      id: '123126',
      voteResult: 'passed',
      name: '逃犯條例修訂案',
      date: '23/04/2019',
      action: 'abstention', //TODO
      avatar: 'assets/img/avatars/1.jpg',
    }
  ]);  
}
export function speech(id) {
  return delayResponse([
    {
      id: '1234351',
      title: '逃犯條例修訂案',
      contentHtml: `
      <p>
        足進中度市，別自分業聞家間該是，性清所民國現示生小了，他中消配一事有我林來先，大很得時爭己白自坐機外小。房燈西常低要生無歡中見口？事成報，了空民明當開過一來那量北的就的辦科？於子是心意他你樣明麼來唱河。
      </p>
      <p>
        只場如不……就還月作物產常水。
      </p>`,
      date: '23/04/2019',
    },
    {
      id: '1234352',
      title: '逃犯條例修訂案',
      contentHtml: `
      <p>
        足進中度市，別自分業聞家間該是，性清所民國現示生小了，他中消配一事有我林來先，大很得時爭己白自坐機外小。房燈西常低要生無歡中見口？事成報，了空民明當開過一來那量北的就的辦科？於子是心意他你樣明麼來唱河。
      </p>
      <p>
        只場如不……就還月作物產常水。
      </p>`,
      date: '23/04/2019',
    },
    {
      id: '1234353',
      title: '逃犯條例修訂案',
      contentHtml: `
      <p>
        足進中度市，別自分業聞家間該是，性清所民國現示生小了，他中消配一事有我林來先，大很得時爭己白自坐機外小。房燈西常低要生無歡中見口？事成報，了空民明當開過一來那量北的就的辦科？於子是心意他你樣明麼來唱河。
      </p>
      <p>
        只場如不……就還月作物產常水。
      </p>`,
      date: '23/04/2019',
    },{
      id: '1234354',
      title: '逃犯條例修訂案',
      contentHtml: `
      <p>
        足進中度市，別自分業聞家間該是，性清所民國現示生小了，他中消配一事有我林來先，大很得時爭己白自坐機外小。房燈西常低要生無歡中見口？事成報，了空民明當開過一來那量北的就的辦科？於子是心意他你樣明麼來唱河。
      </p>
      <p>
        只場如不……就還月作物產常水。
      </p>`,
      date: '23/04/2019',
    },
  ]);
}
export function news(id) {
  return delayResponse([
    {
      id: '124341',
      url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
      date: '2019-04-23',
      source: '香港01',
      title: '【逆權運動】民主派倡警執勤衝突前讀誓詞被否決 沙田區會主席稱令警「仲失控'
    },
    {
      id: '124342',
      url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
      date: '2019-04-23',
      source: '香港01',
      title: '【逆權運動】民主派倡警執勤衝突前讀誓詞被否決 沙田區會主席稱令警「仲失控'
    }
  ]);  
}