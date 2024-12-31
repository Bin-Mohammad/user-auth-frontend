import React from 'react'
import { Separator } from './ui/separator'
import RichTextEditor from './RitchText/RichTextEditor'

const IntroSection = () => {
  return (
    <section className="section ">
    <div className="container mx-auto">
      <div className='bg-gray-100 text-gray-800 leading-relaxed'>
        <div className=' p-6 bg-white shadow-lg rounded-lg'>
          <h1 className='h1 text-left mb-10'>Introduction of Harakat Ansar Almadi </h1>
          <div>
            {/* <!-- Arabic Text Section --> */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 text-right">سَنُخُوضُ مَعَارِكُنَا مَعَهُمُ</h1>
              <div className="text-right font-serif text-2xl">
                <p>سَنُخُوضُ مَعَارِكُنَا مَعَهُمُ،</p>
                <p>وَفِي كُلِّ مَكَانٍ مَعَهُمُ،</p>
                <p>وَإِذَا لَمْ نَكُنْ جَيْشًا</p>
                <p>فَفِي أَكْثَرِ مَواقِفِنَا</p>
                <p>قَضِيَّةُ شَعْبٍ أُرِيدَتْ أَنْ تُحَلَّ</p>
                <p>تَجْبَرُ مُعْلَمَاتِ سَيْفِ الحُرِّيَّةِ</p>
                <p>وَيَعِيدُ أَطْهَرَ القُدْسِ مِن بَعْدِ الذُّلِّ</p>
                <p>وَذُلِّ النَّارِ كَانَتْ شَعْبًا</p>
                <p>وَيَرُدُّ صِيَاحَ الظَّلْمِ إِلَى بَرٍّ</p>
                <p>فَإِنَّهُ لَوْ لَمْ نَكُنْ قَطْرًا، فَفِي النَّصْرِ عِزُّ الشَّعْبِ</p>
                <p>وَفِي عَيْنِ النَّارِ كَانَتْ شَعْبًا</p>
                <p>وَفِي مَجْدِهِ قَدْ أَضَاءَ قَطْرُ الْقُدْسِ</p>
                <p>سَنُخُوضُ مَعَارِكُنَا مَعَهُمُ</p>
                <p>وَفِي النَّصْرِ عِزُّ الشَّعْبِ، كَانَتْ شَعْبًا</p>
              </div>
            </div>

            {/* <!-- English Translation Section --> */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">English Translation</h2>
              <p className="mb-2">We will fight our battles with them,</p>
              <p className="mb-2">And in every place with them,</p>
              <p className="mb-2">And if we are not an army,</p>
              <p className="mb-2">Then in most of our positions.</p>
              <p className="mb-2">A people’s cause that was wanted to be resolved,</p>
              <p className="mb-2">It imposes the marks of the sword of freedom.</p>
              <p className="mb-2">And we will restore the purest Jerusalem from after humiliation,</p>
              <p className="mb-2">And the humiliation of the fire that was a people.</p>
              <p className="mb-2">And it will return the cries of oppression to a shore,</p>
              <p className="mb-2">For if we were not a drop, then in victory is the honor of the people.</p>
              <p className="mb-2">And in the eye of the fire, it was a people,</p>
              <p className="mb-2">And in its glory, the drop of Jerusalem shone.</p>
              <p>We will fight our battles with them,</p>
              <p>And in victory is the honor of the people, it was a people.</p>
            </div>

            {/* <!-- Speech Section --> */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                From Pakistan’s Freedom to Palestine’s Fight: A Unified Call for Justice
              </h2>
              <p className="mb-4"><b>Assalamu Alaikum!</b></p>
              <p className="mb-4">
                Respected teachers, dear students, and honorable guests,
                Today, we gather here to celebrate Pakistan’s Independence Day—a day of great significance for every Pakistani.
                On August 14th, 1947, our beloved country emerged as a free and independent state. As we remember the sacrifices
                made for our freedom, it’s also important to think about those who are still fighting for their rights and
                freedom, like our brothers and sisters in Palestine.
              </p>

              <h3 className="text-xl font-bold mb-2">Our Journey to Freedom</h3>
              <p className="mb-4">
                Let’s take a moment to reflect on our own history. Under British rule, Muslims in the Indian subcontinent faced
                countless challenges. But with the leadership of Quaid-e-Azam Muhammad Ali Jinnah and the vision of Allama
                Iqbal, we began our struggle for a separate homeland. On March 23, 1940, the Pakistan Resolution was passed in
                Lahore, demanding a separate state for Muslims. After years of hard work, perseverance, and immense sacrifices,
                Pakistan became a reality on August 14, 1947.
              </p>

              <h3 className="text-xl font-bold mb-2">Solidarity with Palestine</h3>
              <p className="mb-4">
                As we celebrate our freedom today, we must not forget those who are still fighting for theirs. The people of
                Palestine, like us, desire to live in freedom and dignity. Their struggle for an independent state reminds us of
                our own fight for Pakistan. Just as we were once oppressed, they too face oppression, and it is our moral duty
                to stand with them in their quest for justice.
              </p>

              <h3 className="text-xl font-bold mb-2">Conclusion</h3>
              <p className="mb-4">
                On this Independence Day, let us not only celebrate our freedom but also extend our support to the Palestinian
                people. Their struggle is a reminder that the fight for justice is ongoing, and it requires our solidarity.
                Let’s honor the sacrifices made for our own independence by standing up for the rights of all oppressed peoples
                around the world.
              </p>
              <p className="font-semibold">May Allah grant peace, justice, and prosperity to Pakistan, Palestine, and all oppressed
                nations. Ameen.</p>
              <p className="font-bold text-center text-green-700 mt-4 text-lg">Pakistan Zindabad!</p>
            </div>
          </div>
        </div>

        <Separator />
        <RichTextEditor />
      </div>
    </div>
  </section>
  )
}

export default IntroSection