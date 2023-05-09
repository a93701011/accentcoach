import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/form.module.css'

export default function querybooking() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [orders, setOrders] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOrders, setIsOrders] = useState(false)



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Call your API to submit the order
    await fetch('/api/query-bookinghist', {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // Redirect to the confirmed and pay page
        // console.log(data)
        setOrders(data)
        if (data) {
          setIsOrders(true);
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
            <h1>預約查詢</h1>
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
              <div className={utilStyles.three}><p>email:</p></div>
              <input className={formStyles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className={utilStyles.flexcc}>
              <button className={formStyles.button} onClick={handleSubmit}>查詢預約</button>
              {isSubmitting ? ' 查詢中...' : ''}
            </div>
          </div>
        </div>
      </section>
      {isOrders ? (
        <section>
          <div>
            <div className={formStyles.formtitle}>
              <h1>Your Booking Orders</h1></div>
            <div className={utilStyles.flexcc}>

              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>Bookingdate</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.orderid}>
                      <td>{order.orderid}</td>
                      <td>{order.username}</td>
                      <td>{order.phone}</td>
                      <td>{order.email}</td>
                      <td>{order.amount}</td>
                      <td>{order.bookingdate}</td>
                      <td>{order.bookstatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>) : null}
    </Layout>
  );
};


