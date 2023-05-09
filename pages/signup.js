import Head from 'next/head'
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/form.module.css'
import { useState } from 'react';

export default function Order() {
  const router = useRouter();
  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [bookingdate, setBookingdate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Call your API to submit the order
    await fetch('/api/submit-booking', {
      method: 'POST',
      body: JSON.stringify({ username, phone, email, amount, bookingdate }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // Redirect to the confirmed and pay page
        if (data.orderId) {
          router.push(`/payment/${data.orderId}`);
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
            <h1>Sign Up Here</h1>
          </div>
          <div>
            <div className={utilStyles.flexcc}>
            <div className={utilStyles.three}><p>使用者名稱:</p></div>
              <input className={formStyles.input} type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className={utilStyles.flexcc}>
            <div className={utilStyles.three}><p>連絡電話:</p></div>
              <input className={formStyles.input} type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={utilStyles.flexcc}>
            <div className={utilStyles.three}><p>email:(使用為登入帳號)</p></div>
              <input className={formStyles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <div className={utilStyles.flexcc}>
            <div className={utilStyles.three}><p>密碼</p></div>
              <input className={formStyles.input} type="type" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className={utilStyles.flexcc}>
            <div className={utilStyles.three}><p>確認密碼:</p></div>
              <input className={formStyles.input} type="text" value={bookingdate} onChange={(e) => setBookingdate(e.target.value)} />
            </div>
          </div>

          <div className={utilStyles.flexcc}>
            <button className={formStyles.button} type="submit" onClick={handleSubmit}>Sign Up</button>
            {isSubmitting ? ' 註冊中...' : ''}
            </div>
      </div>
    </section >
    </Layout >
  );
};

