import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import Progress from './Progress';
export default ({ question, onSelect, onPrevPage, page, total }) => {
    return (
        <>
            <section className="bg-white border-radius mt-4 pb-4">
                <div className="p4 text-center">
                    <h5 className="grey b py-1">法案 ({page + 1}/{total})</h5>
                    <h2>{question.title}</h2>
                </div>
                <div className="p4 text-center">
                    <h5 className="grey b py-1">法案撮要</h5>
                    <p className="text-left">{question.description}</p>
                </div>
                <div className="flex-row multiline p2">
                    <div className="width-50p p2">
                        <div className="border border-green p2">
                            <h5 className="underline green">利</h5>
                            <ul className={styles.list}>
                                {question.pros.map(text => <li>{text}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="width-50p p2">
                        <div className="border border-red p2">
                            <h5 className="underline red">弊</h5>
                            <ul className={styles.list}>
                                {question.cons.map(text => <li>{text}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="width-100p p2">
                        <div className="border border-grey p2">
                            <h5 className="underline grey">爭議</h5>
                            <ul className={styles.list}>
                                {question.conflict.map(text => <li>{text}</li>)}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="px-3 flex-row">
                    <div className="m1 flex">
                        <button onClick={() => onSelect('no')} className="bg-red text-center white border-radius h2 p1 fullwidth">
                            <i className="fas fa-times-circle mr-2" />
                            反對
                        </button>
                    </div>
                    <div className="m1 flex">
                        <button onClick={() => onSelect('yes')} className="bg-green text-center white border-radius h2 p1 fullwidth">
                            <i className="fas fa-check-circle mr-2" />
                            贊成
                        </button>
                    </div>
                </div>
            </section>
            {page > 0 &&
                <button className="white h4 py-3" onClick={onPrevPage}>
                    <i className="fas fa-caret-left mr-2" />
                    上一題
                </button>}
        </>
    );
}