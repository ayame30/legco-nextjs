import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import Progress from './Progress';
export default () => {
    return (
        <>
            <div className="my-1"><Progress /></div>
            <h3 className="white">邊個議員最似你？</h3>
            <section className="bg-white border-radius mt-4 pb-4">
                <div className="p4 text-center">
                    <h5 className="grey b py-1">法案 (13/20)</h5>
                    <h2>全方位支援 60 歲至 64 歲長者</h2>
                </div>
                <div className="p4 text-center">
                    <h5 className="grey b py-1">法案撮要</h5>
                    <p className="text-left">令 60 歲至 64 歲的長者獲得支援，促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。</p>
                </div>
                <div className="flex-row multiline p2">
                    <div className="width-50p p2">
                        <div className="border border-green p2">
                            <h5 className="underline green">利</h5>
                            <ul className={styles.list}>
                                <li>加 $3000 綜緩</li>
                                <li>長者乘車優惠</li>
                                <li>免費派口罩</li>
                                <li>人手撰寫的重點</li>
                            </ul>
                        </div>
                    </div>
                    <div className="width-50p p2">
                        <div className="border border-red p2">
                            <h5 className="underline red">弊</h5>
                            <ul className={styles.list}>
                                <li>加 $3000 綜緩</li>
                                <li>長者乘車優惠</li>
                            </ul>
                        </div>
                    </div>
                    <div className="width-100p p2">
                        <div className="border border-grey p2">
                            <h5 className="underline grey">爭議</h5>
                            <ul className={styles.list}>
                                <li>加 $3000 綜緩</li>
                                <li>長者乘車優惠</li>
                                <li>免費派口罩</li>
                                <li>人手撰寫的重點</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="px-3 flex-row">
                    <div className="m1 flex">
                        <button className="bg-red text-center white border-radius h2 p1 fullwidth">
                            <i className="fas fa-times-circle mr-2" />
                            反對
                        </button>
                    </div>
                    <div className="m1 flex">
                        <button className="bg-green text-center white border-radius h2 p1 fullwidth">
                            <i className="fas fa-check-circle mr-2" />
                            贊成
                        </button>
                    </div>
                </div>
            </section>
            <button className="white h4 py-3">
                <i className="fas fa-caret-left mr-2" />
                上一題
            </button>
        </>
    );
}