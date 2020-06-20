import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import Progress from './Progress';
import Member from 'components/Member';

export default ({ reference, answers, question }) => {
    const scores = reference.map((ref) => {
        return {
            ...ref,
            score: ref.answers.reduce((acc, ans, i) => answers[i] === ans ? acc + 1 : acc, 0),
        };
    }).sort((a, b) => b.score - a.score);

    const likely = scores[0];
    const unlikely = scores[scores.length - 1];
    return (
        <>
            <h3 className="white text-center">結果</h3>
            <section className="bg-green border-radius my-2 p2">
                <h1 className="white text-center">最似你嘅議員係...</h1>
                <Member {...likely}/>
                <div className="white h5 text-center">
                    和你的取態有 {Math.round(likely.score / answers.length * 100)}% 相似
                </div>
            </section>
            <section className="bg-red border-radius my-2 p2">
                <h1 className="white text-center">最唔似你嘅議員係...</h1>
                <Member {...unlikely}/>
                <div className="white h5 text-center">
                    和你的取態有 {Math.round(unlikely.score / answers.length * 100)}% 相似
                </div>
            </section>
            <button className="bg-grey3 fullwidth border-radius my-2 p2">
                <div className="white h5 text-center">
                    查看完整結果
                </div>
            </button>
            <div className="p4 py-2 text-center">
                <h5 className="white b py-1">法案撮要</h5>
                <p className="text-left white">{question.description}</p>
            </div>
            <section className="bg-white border-radius my-2 p2">
                <div className="h5 text-center">
                    和朋友分享結果！
                </div>
                <div className="text-center mt-1">
                    <a className="fab fa-facebook m1" />
                    <a className="fab fa-facebook m1" />
                    <a className="fab fa-facebook m1" />
                </div>
                
            </section>

        </>
    );
}