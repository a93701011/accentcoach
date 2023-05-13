import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/form.module.css'

export default function Payment() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handlePayment = async () => {
    setIsSubmitting(true)
    console
    await fetch('/api/ecpay-orderresultback', {
      method: 'POST',
      body: JSON.stringify({ 'RtnCode': '1', 'RtnMsg': 'Succeeded' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setIsSubmitting(false)
  };



  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div className={utilStyles.textMd}>
          <div className={formStyles.formtitle}>
            <h1></h1>
          </div>
          <div>
            <div className={utilStyles.flexcc}>
              <button className={formStyles.button} onClick={handlePayment}>前往付款</button>
              {isSubmitting ? '付款轉跳中...' : ''}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


