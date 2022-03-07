import { t } from 'i18next';
import React from 'react';
import { useT } from '../../../custom/hooks/useT';
import './style.css'

const BoshqarmaHaqida = () => {

    const {t, lang} = useT();

    let letter = t(`bHaqida.${lang}`).split('\n');

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`bHaqidaTitle1.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3'>{t(`bHaqidaTitle2.${lang}`)}</h5>
                        <h4 className='text-center mb-4 mt-4'>{t(`bHaqidaTitle3.${lang}`)}</h4>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                           {
                               letter.map(item => (
                                   <div key={item} style={{textIndent: "30px", marginBottom: "20px"}}>
                                    {item}<br/>
                                   </div>
                               ))
                           }
                        <div className='d-flex justify-content-between fw-bold mt-5 mb-5'>
                            <span>{t(`bHaqidaTitleBottom.${lang}`)}</span>
                            <span>И.Хошимов</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoshqarmaHaqida;
