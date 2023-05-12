import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css'
import formStyles from '../../styles/form.module.css'

export default function Payment() {
  const router = useRouter();
  const { orderid } = router.query;
  const [booking, setBooking] = useState([]);
  const [isloading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {

    setIsLoading(true);
    const fetchData = async () => {

      // await fetch(`/api/get-booking/${orderid}`)
      await fetch('/api/get-booking', {
        method: 'POST',
        body: JSON.stringify({orderid}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            setBooking(data);
            // console.log(booking)
            setIsLoading(false);
          }
          
        })
        .catch(error => {
          console.log(error);
        });
    }

    fetchData();
  
  }, [orderid])

  const handlePayment = async () => {
    setIsSubmitting(true)
    await fetch('/api/ecpay-addcheckvalue', {
      method: 'POST',
      body: JSON.stringify({orderid, 'amount': booking.amount, 'itemname':booking.itemname, 'bookingdate':booking.bookingdate, 'email':booking.email}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        let form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5');
        form.setAttribute('enctype', 'application/x-www-form-urlencoded');
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = key;
            console.log(data[key])
            input.value = data[key];
            form.appendChild(input);
          }
        }
        console.log(form)
        // 將表單元素添加到網頁中
        document.body.appendChild(form);

        // 提交表單
        form.submit();
     
      })

      setIsSubmitting(false)
  };



  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {!isloading ? (
        <section>
          <div className={utilStyles.textMd}>
            <div className={formStyles.formtitle}>
              <h1>預約確認及付款</h1>
            </div>
            <div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>訂單編號：</p></div>
                <div className={utilStyles.five} ><p>{booking.orderid}</p></div>
              </div>

              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>付款金額(訂金)：</p></div>
                <div className={utilStyles.five} ><p>{booking.amount*0.2}</p></div>
              </div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>付款金額(剩餘款項)：</p></div>
                <div className={utilStyles.five} ><p>NTD {booking.amount*0.8}</p></div>
              </div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>使用者名稱:</p></div>
                <div className={utilStyles.five} ><p>NTD {booking.username}</p></div>
              </div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>連絡電話:</p></div>
                <div className={utilStyles.five} ><p>{booking.phone}</p></div>
              </div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>email:</p></div>
                <div className={utilStyles.five} ><p>{booking.email}</p></div>
              </div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>預約項目:</p></div>
                <div className={utilStyles.five} ><p>{booking.itemname}</p></div>
              </div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>預約日期:</p></div>
                <div className={utilStyles.five} ><p>{booking.bookingdate}</p></div>
              </div>
              <div className={utilStyles.flexcc}>
                <div className={utilStyles.three}><p>付款狀態:</p></div>
                <div className={utilStyles.five} ><p>{booking.bookstatus==0 ? '待付款' : null}</p></div>
              </div>

              <div className={utilStyles.flexcc}>
                <button className={formStyles.button} onClick={handlePayment}>前往付款</button>
                {isSubmitting ? '付款轉跳中...' : ''}
              </div>
            </div>
          </div>
        </section>) : null}
    </Layout>
  );
};


