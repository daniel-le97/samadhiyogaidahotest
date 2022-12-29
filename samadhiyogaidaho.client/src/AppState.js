import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/NewsLetter.js').NewsLetter[]} */
  newsLetterSubscription: [],
  /** @type {import('./models/Event.js').Event[]} */
  events: [],
  /** @type {import('./models/Event.js').Event | null} */
  activeEvent: null,
  /** @type {import('./models/Retreat.js').Retreat[]} */
  retreats: [],
  /** @type {import('./models/Retreat.js').Retreat | null} */
  activeRetreat: null,
  /** @type {import('./models/Retreat.js').Retreat} */
  currentRetreat: {},
  /** @type {import('./models/Retreat.js').Retreat[]} */
  archivedRetreats: [],
  /** @type {import('./models/Schedule.js').Schedule[]} */
  schedules: [],
  /** @type {import('./models/Schedule.js').Schedule | null} */
  activeSchedule: null,
  
  activeImage: null,
  
  //-----------------------------ADMIN PAGE-----------------------------------//
  
  admin: null
  uploadedImgs: [],
  collections: [],
  formPaginate: 0,
  loading: null,
  // activeTab: "Home",

  testimonials: [
    {
      rating: 5,
      text: "Katie provided an amazing, welcoming, and nourishing experience! It was my first ever yoga retreat, and i cannot wait to join her again for another. I felt comfortable, learned a lot about myself and the yoga practice.",
      name: "Makayla Webb",
    },
    {
      rating: 5,
      text: "Katie and brandy are an incredible duo! Their 2022 Oregon Coast yoga retreat was so thoughtfully planned and executive. We had the best time exploring, connecting, journaling, and doing some really fun flows and workshops with Katie. Brandy's food is insane, I wouldn't have wanted to spend such an introspective and impactful week with anyone else.",
      name: "Tristen Brown",
    },
    {
      rating: 5,
      text: "I have been taking private yoga lessons with Katie and Samadhi Yoga and I would recommend her to anyone! She customized the lessons towards my personalized needs, and encourages me to be my best self. Katie has extensive knowledge of her profession, and is always learning more so she can provide the best for her clients. Definitely a five-star experience.",
      name: "Carsen",
    },
    {
      rating: 5,
      text: "Between 2019 and 2020, I have undergone three different surgeries: a knee and hip replacement, and shoulder surgery. I spent all 2021 trying to recover from these surgeries, and lost a lot of maneuverability, flexibility, and gained 50 Ibs. Katie is great and is helping me get back on track. Her lessons are easy to follow, she takes her time in showing me how to do each pose, and helps me with modifications when i can't do the pose or hold it. She brings energy and heart into every one of her lessons. I highly recommended her if you are looking for a yoga teach who cares and will personalize your classes to be gears towards you.",
      name: "Barbara J.",
    },
    {
      rating: 5,
      text: "I LOVED every minute of this retreat. It was planned out so well, with all of us in mind. The food made by Brandy was amazing. I still think about some of those meals and have officially switched to gluten free bread after experience what a difference i felt after that retreat. The yoga practice was challenging and so rewarding! Katie allowed us to ask questions and take our time. She spent time with each of us on perfecting our form. It was SO nice to have our days planned out for us. We saw so many beautiful places within the short time we were at the Coast. The part i thought would be my least favorite of the retreat ended up being my favorite part! i'm not a writer, and I don't enjoy journaling. I figured when everyone was else journaling, I'd write out my 'to-do' list, or shopping list for the week. To my surprise, Katie dove in with some great questions that had the whole group interacting and sharing their intentions, their fears, desires, and challenges in life. I opened up about things I didn't think I ever would, and I felt like I had started the process of healing through sharing my thoughts. It brought everyone closer together and I ended up looking forward to our journaling session every day. The cost of the retreat was extremely fair, and I feel like I got so much more out of it than I ever expected. I really can't wait to join in on the next one!",
      name: "Carly Hurrt",
    },
  ],
  FAQS: [
    {
      q: "Why should I book a private event or workshop?",
      a: "Booking a private event for your team, a bridal party, birthday event, or any other special event is a great way to start the event off great and bring you and your companions closer together. We can design the private workshop or event to be anything you want or could possibly need. From beginners to the advanced, we will make it an event to remember.",
    },
    {
      q: "Why should I book a private lesson?",
      a: "Private lessons can be for any person from the beginner to the advanced. Whether you are looking to make sure your alignment is correct and get adjustments, want to learn more about the eight limbs of yoga or history of yoga, or want help with something specific in general, we will build your practice around you. We will build from the ground up and can provide a comfortable private space or come to your home if that makes you feel more comfortable. We can help you to build a personal home practice, build the foundations of a yoga practice, or help you to advance your practice. You'll feel so much more comfortable with your body, mind, and emotions by building this meditative practice in your life. ",
    },
    {
      q: "What are the benefits of yoga?",
      a: "  With regular practice, you will notice your body getting stronger and more flexible; you will feel more grounded and have better posture. On a mental level you will notice improved focus, the ability to stay calm and maintain relaxed breathing.",
    },
    {
      q: "Can I eat before a yoga session?",
      a: " It is best to wait an hour after eating before practicing yoga, but a small snack before your class is perfectly alright. Observe your body to learn how much time you need to digest your food before practice.",
    },
    {
      q: "What do I need to bring?",
      a: " Just bring yourself, in appropriate clothing, a yoga mat if you have one, and a bottle of water.",
    },
    {
      q: "What should I wear during a session?",
      a: " Some people wear baggy, loose fitting bottoms or shorts and a t shirt. Other people wear tight, stretchy leggings plus tops. The only thing that matters is that you wear comfortable clothes that you can easily move and stretch in. It's good to have clothes that keep you cool when you are active in yoga.",
    },
    {
      q: "Do I need to be flexible to do yoga?",
      a: "No you don't have to be flexible to do yoga It is an urban myth that people who tight can't do yoga. Yoga isn't just stretching it's extremely toning, calming, meditative, spiritual, healing and opening. Flexibility is only one aspect of it. Once you practice yoga for a period of time naturally you will gain flexibility with a myriad of other benefits",
    },
    {
      q: "What is Vinyasa Yoga?",
      a: "Vinyasa yoga focuses on connecting the breath to your movements, which tend to be set at a faster pace. In a vinyasa practice, you can expect to stay in a constant flow of movements.",
    },
    {
      q: "What is Baptiste style yoga?",
      a: "Baptiste power yoga is a type of Vinyasa yoga with the poses flowing from one to another in a sequence rather than being held for seconds or even minutes, as is the case in some other forms of yoga.",
    },
    {
      q: "What is Yin Yoga?",
      a: "Yin Yoga is a slower-paced, more meditative version of the popular physical and spiritual discipline of yoga. In Yin yoga, the poses are held for a long period of time (typically three to five minutes or longer) to target the connective tissues (such as the ligaments) rather than focusing on the muscles",
    },
  ],
});
