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
  /** @type {import('./models/Testimonial.js').Schedule[]} */
  schedules: [],
  /** @type {import('./models/Schedule.js').Schedule | null} */
  activeSchedule: null,

  activeImage: null,

  //-----------------------------ADMIN PAGE-----------------------------------//

  admin: null,
  uploadedImgs: [],
  collections: [],
  formPaginate: 0,
  loading: null,
  // activeTab: "Home",

  /** @type {import('./models/Testimonial.js').Testimonial.js[]} */
  testimonials: [],
  /** @type {import('./models/FAQ.js').FAQ[]} */
  FAQS: [],
});
