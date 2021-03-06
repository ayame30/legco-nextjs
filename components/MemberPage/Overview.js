import React from 'react';
import Bill from 'components/Bill';
import Article from 'components/Article';
import { Line } from 'react-chartjs-2';
import VoteStats from './VoteStats';
import News from './News';
import Questions from './Questions';
import _ from 'lodash';
import moment from 'moment';

const sampleCard = (
  <Bill
    readStatus={2}
    tags={['長者', '福利']}
    name="全方位支援 60 歲至 64 歲長者"
    meetingDate="2019-11-12"
  />
);

export default ({ member }) => {
  const voteRate = {
    thisMonth: _.find(member.voteRecord, { datetime: moment().format('MMM YY') }).rate,
    lastMonth: _.find(member.voteRecord, { datetime: moment().subtract(1, 'months').format('MMM YY') }).rate
  };
  const attendanceRate = {
    thisMonth: _.find(member.attendanceRecord, { datetime: moment().format('MMM YY') }).rate,
    lastMonth: _.find(member.attendanceRecord, { datetime: moment().subtract(1, 'months').format('MMM YY') }).rate
  };
  
  return (
    <div className="p2 overflow-y fullheight">
      <Article title="統計數字">
        <div className="flex-row">
          <div className="halfwidth p1">
            {attendanceRate.thisMonth &&
            <div className="flex-row py-1">
              <span className="flex">近月出席率</span>
              <span className="flex text-right">{attendanceRate.thisMonth}%</span>
              <span className="flex-50 text-right">
              {attendanceRate.thisMonth && attendanceRate.lastMonth && attendanceRate.thisMonth !== attendanceRate.lastMonth &&
                <>
                  {Math.abs(attendanceRate.thisMonth - attendanceRate.lastMonth)}
                  {attendanceRate.thisMonth > attendanceRate.lastMonth && <i className="arrow-up green" />}
                  {attendanceRate.thisMonth < attendanceRate.lastMonth && <i className="arrow-down red" />}
                </>}
              </span>
            </div>}
            {voteRate.thisMonth &&
            <div className="flex-row py-1">
              <span className="flex">近月投票率</span>
              <span className="flex text-right">{voteRate.thisMonth}%</span>
              <span className="flex-50 text-right">
              {voteRate.thisMonth && voteRate.lastMonth && voteRate.thisMonth !== voteRate.lastMonth &&
                <>
                  {Math.abs(voteRate.thisMonth - voteRate.lastMonth)}
                  {voteRate.thisMonth > voteRate.lastMonth && <i className="arrow-up green" />}
                  {voteRate.thisMonth < voteRate.lastMonth && <i className="arrow-down red" />}
                </>}
              </span>
            </div>}
          </div>
          <div className="halfwidth">
            <Line
              data={{
                labels: member.voteRecord.map(rate => rate.datetime),
                datasets: [
                  {
                    label: '投票率',
                    backgroundColor: 'transparent',
                    borderColor: '#B23131',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: member.voteRecord.map(d => d.rate),
                  },
                  {
                    label: '出席率',
                    backgroundColor: 'transparent',
                    borderColor: '#2DA948',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: member.attendanceRecord.map(d => d.rate),
                  },
                ],
              }}
              options={mainChartOpts}
              height={150}
            />
          </div>
        </div>
      </Article>
      <VoteStats member={member} />
      {/* <Article title="議員關係">
        <div className="flex-row border-bottom my-2">
          <span className="flex">表決意向接近的議員</span>
          <span className="flex-100 text-right green"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right green"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row border-bottom my-2">
          <span className="flex">最常支持誰的議案</span>
          <span className="flex-100 text-right green"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right green"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row border-bottom my-2">
          <span className="flex">提出的議案最常被誰支持</span>
          <span className="flex-100 text-right green"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right green"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row border-bottom my-2">
          <span className="flex">表決意向相反的議員</span>
          <span className="flex-100 text-right red"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right red"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row border-bottom my-2">
          <span className="flex">最常反對誰的議案</span>
          <span className="flex-100 text-right red"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right red"><b>葛珮帆 (83%)</b></span>
        </div>
        <div className="flex-row border-bottom my-2">
          <span className="flex">提出的議案最常被誰反對</span>
          <span className="flex-100 text-right red"><b>何君堯 (86%)</b></span>
          <span className="flex-100 text-right red"><b>葛珮帆 (83%)</b></span>
        </div>          
            </Article> */}
      <Article title="贊成的法案" onMore={() => {}}>
        {sampleCard}{sampleCard}{sampleCard}
      </Article>
      <Article title="反對的法案" onMore={() => {}}>
        {sampleCard}{sampleCard}{sampleCard}
      </Article>
      <News member={member} />
      <Questions member={member} />
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
