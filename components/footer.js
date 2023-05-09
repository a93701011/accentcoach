import utilStyles from '../styles/utils.module.css';
import formStyles from '../styles/form.module.css'
import Link from 'next/link';
import footerStyles from './footer.module.css';
import { useState } from 'react';




export default function Footer() {
    const [email, setEmail] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitSuccess(false)
        await fetch('/api/create-newsletter', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.email === email) {
                    setSubmitSuccess(true)
                }
            })
            .catch(error => {
                console.log(error);
            });
        setIsSubmitting(false)
    };


    return (
        <div className={footerStyles.bgcontainer}>
            <div className={footerStyles.container}>
                <div className={footerStyles.format}>
                    <div className={footerStyles.three}>
       
                        <p className={utilStyles.pbold}>Accent Private Coach</p>
                        <p>關於我們</p>
                        <p><Link href="/privacy">隱私權政策</Link></p>
                        <p><Link href="/terms">使用條款</Link></p>
                        <p><Link href="/refund">退款政策</Link></p>
                   
                    </div>
                    <div className={footerStyles.three}>
                        <p className={utilStyles.pbold}>聯絡我們</p>
                        <p>服務時間 : 周一至周五 10:00-18:00</p>
                        <p>Email : accentprivatecoach@gmail.com</p>

                    </div>
                    <div className={footerStyles.three}>
                        <p className={utilStyles.pbold}>網站地圖</p>
                        <p><Link href="/">首頁</Link></p>
                        <p><Link href="/booking">預約私人教練</Link></p>
                        <p><Link href="/querybooking">查詢預約</Link></p>
                    </div>
                </div>

                <div>
                    <div className={footerStyles.newletter}>
                        <p className={utilStyles.pbold} >訂閱電子報</p>
                        <input className={formStyles.inputsubscription} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className={formStyles.button} type="submit" onClick={handleSubmit}> Submit</button>
                        {isSubmitting ? ' 訂閱中...' : ''}
                        {submitSuccess ? (<p>訂閱成功</p>) : ''}
                    </div>
                </div>
                {/* <div className={utilStyles.space}></div> */}
                <div className={footerStyles.undertext}>
                    <p>Copyright © 2023</p>
                    <br />
                    <p>網站設計委託在家料.com以及金流服務整合綠界支付</p>
                </div>
            </div>
            <div className={utilStyles.space}></div>
        </div>
    )
}