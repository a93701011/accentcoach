import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/form.module.css'
// import { getSortedPostsData } from '../lib/posts'
// import Link from 'next/link'
// import Image from 'next/image'
import React, { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState('zh')

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        
        <h1 className={utilStyles.heading2Xl}>American Accent Private Coach</h1>
        <div className={utilStyles.flexcc}>
          {language === 'en' ? '>' : ''}<div className={utilStyles.button} onClick={() => setLanguage('en')}>English</div>{language === 'en' ? '<' : ''}
          {language === 'zh' ? '>' : ''}<div className={utilStyles.button} onClick={() => setLanguage('zh')}>中文</div>{language === 'zh' ? '<' : ''}
        </div>
      </section>

      <section>
        <div className={utilStyles.flexcc}>
          <img
            src="/images/accent a.svg"
            className={utilStyles.imageslarge}
          />
        </div>
        <h3 className={utilStyles.headingLg}>
          {language === 'en' ? `What you Look like != What you SOUND like` : ' 你看起來像什麼 != 你聽起來像什麼'}
        </h3>
        <div className={utilStyles.flexcc}>
          <img
            src="/images/accent b.svg"
            className={utilStyles.imageslarge}
          />
        </div>
      </section>
      <div className={utilStyles.space}></div>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>
          {language === 'en' ? 'Why ?' : '為什麼 ?'} </h1>

        <h3>
          {language === 'en' ? `We don't get to choose every aspect of our identities but we CAN CHOOSE some!` : '我們不能選擇自己各方面的身份, 但我們可以選擇其中的一部分'}
        </h3>

        <div className={utilStyles.textMd}>

          <p>{language === 'en' ? '- speak smoothly' : ' -  說話流暢'}</p>
          <p>{language === 'en' ? '- build confidence' : ' - 建立自信'}</p>
          <p>{language === 'en' ? '- create attitude' : ' - 塑造態度'}</p>
          <p>{language === 'en' ? '- career opportunities' : ' - 職業機會'}</p>
          <p>{language === 'en' ? '- increase hearing sensitivity' : ' - 提高聽覺敏感度'}</p>
          <p>{language === 'en' ? '- expand Skillset' : ' - 擴展技能範圍'}</p>
          <p>{language === 'en' ? '- sharpen vocal instrument' : ' - 磨練聲音器官'}</p>
          <p>{language === 'en' ? '- tongue flexibility' : ' - 提高舌靈活性'}</p>
          <p>{language === 'en' ? '- understand other accents better' : ' - 更好地理解其他口音'}</p>
          <p>{language === 'en' ? '- take control in what you say' : ' - 控制自己的言詞'}</p>
        </div>
      </section>
      <div className={utilStyles.space}></div>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>
          {language === 'en' ? 'Who is eligible ?' : '誰符合條件 ?'} </h1>
        <div>
          <div className={utilStyles.fiveinline}>
            <h3>
              {language === 'en' ? 'Children (3yrs - 14yrs)' : '小孩 (3yrs - 14yrs)'}
            </h3>
          </div>
          <div className={utilStyles.fiveinline}>
            <h3>
              {language === 'en' ? 'Adults (15yrs+)' : '大人 (15yrs+)'}
            </h3>

          </div>
        </div>
        <div >
          <div className={utilStyles.fiveinline}>
            <h3>
              {language === 'en' ? '"Subconscious Learning"' : '"潛意識學習"'}
            </h3>

          </div>
          <div className={utilStyles.fiveinline}>
            <h3>
              {language === 'en' ? '"Focused Learning"' : '"專注學習"'}
            </h3>
          </div>
        </div>
        <div className={utilStyles.flexc}>
          <div className={utilStyles.five}>

            <div className={utilStyles.textMd}>
              <p>{language === 'en' ? ' - play' : ' - 遊戲'}</p>
              <p>{language === 'en' ? ' - picture' : ' - 圖片'}</p>
              <p>{language === 'en' ? ' - movement' : ' - 動作'}</p>
              <p>{language === 'en' ? ' - natural interest' : ' - 與生俱來興趣'}</p>
              <p>{language === 'en' ? ' - copying : hearing + speaking repetition' : ' - 模仿：聆聽 + 口語重複'}</p>
            </div>

          </div>
          <div className={utilStyles.five}>

            <div className={utilStyles.textMd}>
              <p>{language === 'en' ? ' - must know some English' : ' - 必須具備一定的英語能力'}</p>
              <p>{language === 'en' ? ' - consistent study' : ' - 持續學習'}</p>
              <p>{language === 'en' ? ' - recorder' : ' - 錄音裝置'}</p>
              <p>{language === 'en' ? ' - reading/writing/speaking goals' : ' - 閱讀、寫作、口語的目標'}</p>
              <p>{language === 'en' ? ' - hearing' : ' - 聽力'}</p>
            </div>

          </div>
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
        <div>
          {/* <img
            src="/images/accent d.svg"
          /> */}
          <h3>
            {language === 'en' ? '**Note: Some children may be more suitable for "Focused Learning"' : ''}
          </h3>
        </div>
      </section>
      <div className={utilStyles.space}></div>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>
          {language === 'en' ? 'What will I Learn ?' : '我會學到什麼 ?'} </h1>
        <h3>
          {language === 'en' ? 'In-person demonstrations, practicing, corrections graphics are intende as a general idea of what may be covered' : '面對面方式, 盡可能提供涵蓋一般概念的示範、練習、修正嘴型'}
        </h3>
        <div>
          <div className={utilStyles.fiveinline}>
            <img
              src="/images/accent e.svg"
              className={utilStyles.imagesmall}
            />
            <h3>{language === 'en' ? `"rrr" sound` : `"rrr"音`}</h3>
            <img
              src="/images/accent f.svg"
              className={utilStyles.imagesmall}
            />
            <h3>{language === 'en' ? `native  Asian speaker's "L" sound` : `母語為亞洲語言的人的"L"音`}</h3>
            <img
              src="/images/accent g.svg"
              className={utilStyles.imagesmall}
            />
            <h3>{language === 'en' ? `native English speaker's "L sound"` : `母語為英語的人的"L"音`}</h3>
          </div>
          <div className={utilStyles.fiveinline}>
            <h3 className={utilStyles.headingLg}>TONGUE POSITION</h3>
            <img
              src="/images/accent h.svg"
              className={utilStyles.imagesmall}
            />

          </div>
        </div>
        <div>
          <div className={utilStyles.threeinline}>
            <h3>{language === 'en' ? 'JAW POSTITON' : '下巴位置'}</h3>
            <img
              src="/images/accent i.svg"
            />
          </div>
          <div className={utilStyles.threeinline}>
            <h3>{language === 'en' ? 'LIP POSITON' : '嘴唇位置'}</h3>
            <img
              src="/images/accent j.svg"
            />
          </div>
          <div className={utilStyles.threeinline}>
            <h3>{language === 'en' ? 'PRESSURE/SPEED' : '壓力/語速'}</h3>
            <img
              src="/images/accent k.svg"

            />
          </div>
        </div>

        <div>
          <h3>{language === 'en' ? 'SPEAKING STYLES' : '說話風格'} </h3>
          <div className={utilStyles.fiveinline}>
            <img
              src="/images/accent l.svg"
              className={utilStyles.imagesmall}
            />
            <p>{language === 'en' ? 'Casual' : '隨興'}</p>
          </div>
          <div className={utilStyles.fiveinline}>
            <img
              src="/images/accent m.svg"
              className={utilStyles.imagesmall}
            />
            <p>{language === 'en' ? 'Formal' : '正式'} </p>
          </div>
        </div>
        <div className={utilStyles.flexccc}>
          <h3>{language === 'en' ? 'PEAKING RHYTHMS' : '閱讀朗讀'}</h3>
          <div className={utilStyles.textMd}>
            <p>{language === 'en' ? ' - Reading Aloud' : ' - 說話的節奏'}</p>
            <p>{language === 'en' ? ' - Candid Thought/Response' : ' - 直覺的想法/回應'}</p>
            <p>{language === 'en' ? ' - Prepared Speech' : ' - 預備演講'}</p>
          </div>
        </div>
      </section>

      <div className={utilStyles.space}></div>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>
          {language === 'en' ? 'What to expect ?' : '期待有什麼樣收穫 ?'} </h1>
        <p>{language === 'en' ? ` - Understand Client's Purpose and Goals` : '- 理解客戶的目的和目標'}</p>
        <div className={utilStyles.textMd}>
          <div className={utilStyles.threeinline}>
            <p className={utilStyles.pbold}>{language === 'en' ? 'Business' : '商用'}</p>
            <p>{language === 'en' ? 'small business' : '小型企業'}</p>
            <p>{language === 'en' ? 'international conference' : '國際會議'}</p>
            <p>{language === 'en' ? 'industry-specific' : '行業特定'}</p>
          </div>
          <div className={utilStyles.threeinline}>
            <p className={utilStyles.pbold}>{language === 'en' ? 'Leisure' : '休閒'}</p>
            <p>{language === 'en' ? 'making friends' : '交朋友'}</p>
            <p>{language === 'en' ? 'travel' : '旅遊'}</p>
            <p>{language === 'en' ? 'lifestyle content creator' : '生活方式內容創作者'}</p>
          </div>
          <div className={utilStyles.threeinline}>
            <p className={utilStyles.pbold}>{language === 'en' ? 'Eductional' : '教育意義'}</p>
            <p>{language === 'en' ? 'school' : '學校'}</p>
            <p>{language === 'en' ? 'overseas student' : '留學生'}</p>
            <p>{language === 'en' ? 'graduate research' : '研究生研究'}</p>
          </div>
        </div>
        <div className={utilStyles.flexccc}>
          <div className={utilStyles.textMd}>
            <p>{language === 'en' ? ` - Run through speaking all sound of American English` : ' - 以美式英語口音進行朗讀練習'}</p>
            <p>{language === 'en' ? ` - Analyze hearing sensitivity` : ' - 分析聽覺敏感度'}</p>
            <p>{language === 'en' ? ` - Results for specifics of individual sound tuning` : ' - 分析個別聲音調整的具體結果'}</p>
            <p>{language === 'en' ? ` - Personalized list of sentences / vocabulary to exercise` : ' - 提供個人化的句子/詞彙練習清單'}</p>
          </div>
        </div>
        <div>
          <p className={utilStyles.pbold}>{language === 'en' ? `shortened Example of Results` : ''}</p>
          <img
            src="/images/accent n.svg"
            className={utilStyles.imagesmall}
          />
        </div>

      </section>

      <div className={utilStyles.space}></div>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>
          {language === 'en' ? 'Reality Sessions' : '期待什麼結果 ?'} </h1>

        <p>{language === 'en' ? `Real World Practice, if suitable, solidifies the learning experience. This is the glue to take what;s been learned and then put into action.
      Live analysis and self-recording have been proven to make massive impact.` : '實際的實踐經驗，如果適當的話，能夠鞏固學習體驗。這是將所學知識付諸行動的黏合劑。實時分析和自我錄製已被證明能產生巨大的影響。'}</p>
        <img
          src="/images/accent o.svg"
          className={utilStyles.imagesmall}
        />
      </section>
    </Layout >
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
