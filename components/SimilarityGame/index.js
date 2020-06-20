import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import Question from './Question';
import Progress from './Progress';
import Result from './Result';
import Member from 'components/Member';
import { useQuery } from 'react-fetching-library';

const data = {
    title: '邊個議員最似你？',
    description: '令 60 歲至 64 歲的長者獲得支援，促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。',
    questions: [
        {
            key: 6778,
            title: '全方位支援 60 歲至 64 歲長者',
            description: '令 60 歲至 64 歲的長者獲得支援，促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。',
            pros: [
                '加 $3000 綜緩',
                '長者乘車優惠',
                '免費派口罩',
                '人手撰寫的重點'
            ],
            cons: [
                '加 $3000 綜緩',
                '長者乘車優惠'
            ],
            conflict: [
                '加 $3000 綜緩',
                '長者乘車優惠',
                '免費派口罩',
                '人手撰寫的重點'
            ]
        },
        {
            key: 6779,
            title: '全方位支援 60 歲至 64 歲長者2',
            description: '令 60 歲至 64 歲的長者獲得支援，促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。',
            pros: [
                '加 $3000 綜緩',
                '長者乘車優惠',
                '免費派口罩',
            ],
            cons: [
                '加 $3000 綜緩',
                '長者乘車優惠'
            ],
            conflict: [
                '加 $3000 綜緩',
                '長者乘車優惠',
                '免費派口罩',
                '人手撰寫的重點'
            ]
        }
    ],
    reference: [
        {
            id: 15,
            name: 'AAA',
            answers: ['yes', 'yes'],
        },
        {
            id: 16,
            name: 'BBB',
            answers: ['yes', 'no'],
        },
        {
            id: 17,
            name: 'CCC',
            answers: ['no', 'no'],
        }
    ]
}
export default () => {
    const [ answers, setAnswers ] = useState(['', '']);
    const [ page, setPage ] = useState(0);

    if (page >= data.questions.length) {
        return <Result reference={data.reference} answers={answers} question={data} />;
    }
    return (
        <>
            <div className="my-1"><Progress answers={answers} /></div>
            <h3 className="white">{data.title}</h3>
            <Question
                question={data.questions[page]}
                page={page}
                total={data.questions.length}
                onSelect={(answer) => {
                    setAnswers(prev => {
                        const n = [...prev];
                        n[page] = answer;
                        return n;
                    });
                    setPage(prev => {
                        return prev + 1;
                    });
                }}
                onPrevPage={() => {
                    setPage(prev => {
                        return prev - 1;
                    });
                }}
            />
        </>
    );
}