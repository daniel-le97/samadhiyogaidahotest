import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  admin: null,

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

  aug22RetreatImages: [],
  uploadedImgs: [],
  newActiveUpload: null,
  formPaginate: 0,
  loading: null,
  activeImage: null,
  activeTab: "Home",
  fakeStats: [
    { title: "visitors online", sub: "not sure", description: 100 },
    { title: "visitors this month", sub: "not sure", description: 10000 },
    { title: "earnings", sub: "not sure", description: 1000000 },
    { title: "subscriptions", sub: "not sure", description: 245 },
  ],

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
});
