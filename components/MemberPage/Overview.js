import React from 'react';
import Bill from 'components/Bill';
import Article from 'components/Article';
import Card from 'components/Card';
import CardImage from 'components/CardImage';
import { Line } from 'react-chartjs-2';
import ProgressBar from 'components/ProgressBar';
import VoteStats from './VoteStats';

const sampleCard = (
  <Bill
    readStatus={2}
    tags={['長者', '福利']}
    name="全方位支援 60 歲至 64 歲長者"
    meetingDate="2019-11-12"
  />
);


export default ({ id, individualId }) => {
  return (
    <div className="p2 overflow-y fullheight">
      <Article title="統計數字">
        <div className="flex-row-parent">
          <div className="halfwidth p1">
            <div className="flex-row-parent py-1">
              <span className="flex-expand">近月出席率</span>
              <span className="flex-expand text-right">92%</span>
              <span className="flex-50 text-right">7<i className="arrow-up green" /></span>
            </div>
            <div className="flex-row-parent py-1">
              <span className="flex-expand">近月投票率</span>
              <span className="flex-expand text-right">89%</span>
              <span className="flex-50 text-right">14<i className="arrow-down red" /></span>
            </div>
          </div>
          <div className="halfwidth">
            <Line data={mainChart} options={mainChartOpts} height={150} />
          </div>
        </div>
      </Article>
      <VoteStats id={id} individualId={individualId} />
      <Article title="議員關係">
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-expand">表決意向接近的議員</span>
          <span className="flex-100 text-right green"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right green"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-expand">最常支持誰的議案</span>
          <span className="flex-100 text-right green"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right green"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-expand">提出的議案最常被誰支持</span>
          <span className="flex-100 text-right green"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right green"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-expand">表決意向相反的議員</span>
          <span className="flex-100 text-right red"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right red"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-expand">最常反對誰的議案</span>
          <span className="flex-100 text-right red"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right red"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-expand">提出的議案最常被誰反對</span>
          <span className="flex-100 text-right red"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right red"><b>葛珮帆 (83%)</b></span>
        </div>          
      </Article>
      <Article title="贊成的法案" onMore={() => {}}>
        {sampleCard}{sampleCard}{sampleCard}
      </Article>
      <Article title="反對的法案" onMore={() => {}}>
        {sampleCard}{sampleCard}{sampleCard}
      </Article>
      <Article title="相關新聞" onMore={() => {}}>
        <Card>
          <div className="flex-row-parent">
            <div className="flex-100"><CardImage /></div>
            <div className="flex-expand pl-1 flex-column-parent flex-space-between ">
              <h5>60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏</h5>
              <div className="flex-row-parent flex-space-between">
                <span>Flag - 香港01</span>
                <span>2019-08-28</span>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex-row-parent">
            <div className="flex-100"><CardImage /></div>
            <div className="flex-expand pl-1 flex-column-parent flex-space-between">
              <h5>60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏</h5>
              <div className="flex-row-parent flex-space-between">
                <span>Flag - 香港01</span>
                <span>2019-08-28</span>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex-row-parent">
            <div className="flex-100"><CardImage /></div>
            <div className="flex-expand pl-1 flex-column-parent flex-space-between">
              <h5>60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏</h5>
              <div className="flex-row-parent flex-space-between">
                <span>Flag - 香港01</span>
                <span>2019-08-28</span>
              </div>
            </div>
          </div>
        </Card>
      </Article>
      
      <Article title="質詢紀錄" onMore={() => {}}>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-50">1</span>
          <span className="flex-50"><b>田北辰</b></span>
          <span className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-50">2</span>
          <span className="flex-50"><b>田北辰</b></span>
          <span className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-50">3</span>
          <span className="flex-50"><b>田北辰</b></span>
          <span className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-50">4</span>
          <span className="flex-50"><b>田北辰</b></span>
          <span className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</span>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <span className="flex-50">5</span>
          <span className="flex-50"><b>田北辰</b></span>
          <span className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</span>
        </div>
      </Article>
    </div>
  )
}

const mainChartOpts = {
  tooltips: {
    enabled: true,
    intersect: true,
    mode: 'index',
    position: 'nearest',
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          max: 100,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

var elements = 12;
var data1 = [];
var data2 = [];
var data3 = [];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 100));
  data2.push(random(50, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['2018/12', '2019/01', '2019/02',
    '2019/03', '2019/04', '2019/05', '2019/06', '2019/07',
    '2019/08', '2019/09', '2019/10', '2019/11'],
  datasets: [
    {
      label: '投票率',
      backgroundColor: 'transparent',
      borderColor: '#B23131',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: '出席率',
      backgroundColor: 'transparent',
      borderColor: '#2DA948',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
  ],
};
