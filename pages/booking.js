import Head from 'next/head'
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/form.module.css'
import { useState, useEffect } from 'react';

export default function Order() {
  const router = useRouter();
  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [bookingdate, setBookingdate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)
  const teacherid = 1;
  const [options, setOptions] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      await fetch('/api/get-timesheet', {
        method: 'POST',
        body: JSON.stringify({ teacherid }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {

          setOptions(data)
        })
        .catch(error => {
          // console.log(error);
          router.push('/error')
        });
    }

    fetchData();
  }, [teacherid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await fetch('/api/create-booking', {
      method: 'POST',
      body: JSON.stringify({ username, phone, email, amount, bookingdate }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.orderid) {
          router.push(`/checkout/${data.orderid}`);
        }
      })
      .catch(error => {
        console.log(error);
      });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={utilStyles.textMd}>
          <div className={formStyles.formtitle}>
            <h1>預約課程</h1>
          </div>

          <div className={utilStyles.flexc}>
            <div className={formStyles.twomode}>
              <h1 className={formStyles.twomodeheader}>Child</h1>
              <h3>(1) 2000/hr NTD</h3>
              <h3>(2) 3000/hr NTD</h3>
            </div>
            <div className={formStyles.twomode}>
              <h1 className={formStyles.twomodeheader}>Adult</h1>
              <h3>3000/hr NTD</h3>
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className={utilStyles.flexcc}>
              <div className={utilStyles.three}><p>使用者名稱:*</p></div>
              <input className={formStyles.input} type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className={utilStyles.flexcc}>
              <div className={utilStyles.three}><p>連絡電話:*</p></div>
              <input className={formStyles.input} type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={utilStyles.flexcc}>
              <div className={utilStyles.three}><p>email:*(查詢帳號)</p></div>
              <input className={formStyles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

        
            <div className={utilStyles.flexcc}>
              <label className={utilStyles.three} for="amount">大人/小孩:*</label>
              <select className={formStyles.select} id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}>
                <option value="0">請選擇</option>
                <option value="3000">大人(3000)</option>
                <option value="3000">小孩(3000)</option>
                <option value="2500">小孩(2500)</option>
              </select>
            </div>
            <div className={utilStyles.flexcc}>
              <label className={utilStyles.three} for="bookingdate">預約日期時段:*</label>
              <select className={formStyles.select} id="bookingdate" name="bookingdate" value={bookingdate} onChange={(e) => setBookingdate(e.target.value)}>
               <option value="1900-01-01">請選擇</option>
                {options.map((option) => (
                  <option value={option.opendatetime.replace('T',' ').replace(':000Z','')}>{option.opendatetime.replace(':00.000Z','').replace('T',' ')}</option>))} 
              </select>
            </div>
          </div>

          <div className={utilStyles.flexcc}>
            <button className={formStyles.button} type="submit" onClick={handleSubmit}>預約課程</button>
            {isSubmitting ? ' 預約中...' : ''}
          </div>
        </div>
      </section >
    </Layout >
  );
};

