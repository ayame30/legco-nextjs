import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import Progress from './Progress';
import Member from 'components/Member';

export default () => {
    return (
        <>
            <h3 className="white text-center">結果</h3>
            <section className="bg-green border-radius my-2 p2">
                <h1 className="white text-center">最似你嘅議員係...</h1>
                <Member />
                <div className="white h5 text-center">
                    和你的取態有 83% 相似
                </div>
            </section>
            <section className="bg-red border-radius my-2 p2">
                <h1 className="white text-center">最唔似你嘅議員係...</h1>
                <Member />
                <div className="white h5 text-center">
                    和你的取態有 83% 相似
                </div>
            </section>
            <button className="bg-grey3 fullwidth border-radius my-2 p2">
                <div className="white h5 text-center">
                    查看完整結果
                </div>
            </button>
            <div className="p4 py-2 text-center">
                <h5 className="white b py-1">法案撮要</h5>
                <p className="text-left white">令 60 歲至 64 歲的長者獲得支援，促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。</p>
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