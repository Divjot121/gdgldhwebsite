import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const THEME_COLOR = '#0277bd'

// Page route with the shared title/colour meta.
const page = (path, name, title, component) => ({
  path,
  name,
  component,
  meta: { title, color: THEME_COLOR }
})

// Child route of the custom event layout (/events/:id/<path>).
const eventPage = (path, name, component) => ({
  path,
  name,
  component,
  meta: { isEvent: true }
})

const routes = [
  page('/', 'Home', 'Home', () => import(/* webpackChunkName: "home" */ '../views/Home.vue')),
  page('/about', 'About', 'About', () => import(/* webpackChunkName: "about" */ '../views/About.vue')),
  page('/team', 'Team', 'Team', () => import(/* webpackChunkName: "team" */ '../views/Team.vue')),
  page('/team/:id', 'Team Details', 'Team Details', () => import(/* webpackChunkName: "team-details" */ '../views/Team/TeamDetails.vue')),
  page('/events', 'Events', 'Events', () => import(/* webpackChunkName: "events" */ '../views/Events.vue')),
  {
    path: '/events/:id',
    name: 'CustomEvent',
    component: () => import(/* webpackChunkName: "custom-event" */ '../views/Events/MainView.vue'),
    children: [
      { path: '', name: 'redirectCustomEvent', redirect: { path: 'about' }, meta: { isEvent: true } },
      eventPage('about', 'CustomEventHome', () => import(/* webpackChunkName: "custom-event-about" */ '../views/Events/About.vue')),
      eventPage('speakers', 'CustomEventSpeaker', () => import(/* webpackChunkName: "custom-event-speaker" */ '../views/Events/Speaker.vue')),
      eventPage('team', 'CustomEventTeam', () => import(/* webpackChunkName: "custom-event-team" */ '../views/Events/Team.vue')),
      eventPage('schedule', 'CustomEventSchedule', () => import(/* webpackChunkName: "custom-event-schedule" */ '../views/Events/Schedule.vue')),
      eventPage('partners', 'CustomEventPartners', () => import(/* webpackChunkName: "custom-event-partners" */ '../views/Events/Partners.vue'))
    ]
  },
  page('/speakers', 'Speakers', 'Speakers', () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue')),
  page('/speakers/:id', 'Speakers-Details', 'Speaker Details', () => import(/* webpackChunkName: "speakers-details" */ '../views/Speakers/SpeakerDetails.vue')),
  page('/volunteers', 'Volunteers', 'Volunteers', () => import(/* webpackChunkName: "volunteer" */ '../views/Volunteer.vue')),
  page('/partners', 'Partners', 'Partners', () => import(/* webpackChunkName: "partners" */ '../views/Partners.vue')),
  page('/contact', 'Contact', 'Contact', () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')),
  page('/blogs', 'Blogs', 'Blogs', () => import(/* webpackChunkName: "blogs" */ '../views/Blogs.vue')),
  { path: '*', name: 'redirect', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
