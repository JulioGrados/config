'use strict'

module.exports = {
  db: {
    database: process.env.DB_NAME || 'eai',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '12345678',
    host: process.env.DB_HOST || 'localhost',
    env: process.env.NODE_ENV || 'development'
  },
  server: {
    port: process.env.PORT || 8001,
    env: process.env.NODE_ENV || 'development',
    localUrl: 'http://localhost:8001',
    productionUrl: 'https://api.eai.edu.pe'
  },
  auth: {
    secret: process.env.SECRET || 'americanschool'
  },
  dash: {
    env: process.env.NODE_ENV || 'development',
    localUrl: 'https://dash.eai.edu.pe',
    productionUrl: 'https://dash.eai.edu.pe'
  },
  teach: {
    env: process.env.NODE_ENV || 'development',
    localUrl: 'https://teach.eai.edu.pe',
    productionUrl: 'https://teach.eai.edu.pe'
  },
  media: {
    port: process.env.PORT || 8002,
    env: process.env.NODE_ENV || 'development',
    localUrl: 'https://media.eai.edu.pe',
    productionUrl: 'https://media.eai.edu.pe'
  },
  sendgrid: {
    key:
      process.env.SENDGRID_KEY ||
      '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'
  },
  sentry: {
    dns: 'DNS'
  },
  facture: {
    url: 'https://eainnovacion.facturate.pe/api/v1/invoice/',
    token: '54e7ddac4e511481372f3b79e21f9980acac5f0c'
  },
  moodle: {
    service: process.env.SERVICE || 'access_eai',
    token: process.env.TOKEN_MOODLE || 'ca27f68d60ff203731882a141e2da38b',
    wwwroot: 'https://cursos.eai.edu.pe',
    functions: {
      getCourses: 'core_course_get_courses',
      getUsersForField: 'core_user_get_users_by_field',
      enrolCourse: 'enrol_manual_enrol_users',
      createUser: 'core_user_create_users',
      userField: 'core_user_get_users_by_field',
      coursesUser: 'core_enrol_get_users_courses',
      gradeUser: 'gradereport_user_get_grade_items',
      enrolGetCourse: 'core_enrol_get_enrolled_users',
      quizGetCourse: 'mod_quiz_get_quizzes_by_courses',
      assignGetCourse: 'mod_assign_get_assignments',
      moduleGetCourse: 'core_course_get_contents',
      feedbackGetQuiz: 'mod_feedback_get_responses_analysis',
      feedbackListCourse: 'mod_feedback_get_feedbacks_by_courses',
      unenrolUsers: 'core_enrol_submit_user_enrolment_form',
      enrolMethods: 'core_enrol_get_course_enrolment_methods '
    }
  },
  hostgator: {
    host: process.env.HOSTGATOR_HOST || '192.254.236.26',
    user: process.env.HOSTGATOR_USER || 'manvicio',
    password: process.env.HOSTGATOR_PASS || 'FAG_9416$_94siuj',
    database: process.env.HOSTGATOR_DB || 'manvicio_optq'
  },
  migo: {
    url: 'https://api.migo.pe/api/v1',
    tokens: [
      'wCBFTAPU2uv0U1pjreEsu63G8BpuOx8EXm5gqVS3wgUecZ5i6BMjxs3rULpt'
    ]
  },
  mongo: {
    env: process.env.NODE_ENV || 'development',
    localUrl: '127.0.0.1:27017/eai',
    productionUrl: 'mongo:carmenunt1@unt_incubaunt:27017/?tls=false'
  },
  facebook: {
    pixel: '294234647833467',
    token: 'EAAbyVOZA2fwgBADbf8U7pghvQUmhoXZCANrWpmWWMEdzLau9wjx5RS84vwScYgqmEZCvdcx6W644LAjnlZC3kEFgZBbTw4LNSnPMGwsFqB8Fdlo4edujZBPZCNnS0fAaodVbbZActmIwMqR45lYddZBaNqjpqeBrKEIB6IGB6BbsXaeOHyyWbrJKE'
  },
  zadarma: {
    url: 'https://api.zadarma.com',
    userkey: '1b20de7a095b90fc7785',
    secretkey: 'e393dc202d15cf1bcfd3'
  },
  paychash: {
    url: 'https://api-pais-emisor.paycashglobal.com/v1',
    keys: [{country: 'colombia', key: '2910c98bf25311ecb74402f5311cbc9f'}, {country: 'mexico', key: '93f3de57fbea11ec8e5402f0a6827489'}],
    id: '128'
  },
  callbell: {
    url: 'https://api.callbell.eu/v1/messages/send',
    token: 'JtyxyBD37fp9xWJ4zVrSfwsQQHc2nPMS.46a6db72eddcc089d587c059ac82c936d2753b56feaba3891996c5ab3d37004f'
  },
  google: {
    id: '97121591050-dae0qg3mo4d3v9n4v16qemqm5p0gdj6j.apps.googleusercontent.com',
    secret: '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',
    url: 'https://developers.google.com/oauthplayground',
    token: '1//04sWwOoHiDb2fCgYIARAAGAQSNwF-L9Irr8_Eh_TpXoQnM9j84imF1OR_uDlk4f0HltB7Ltlg-bXFl9Acgter4frSOUwAXG9biO4',
    token_access: 'ya29.a0Ael9sCPckehDoHo-Vz1v_PqqEr48VmSmUmPvxbmDEi5Nh8_nVB3RZCRwWq4kTsVVxWqOyHuUjfA7Ykzv0rrzcfAtXSIgfdNtXfOHNajbZBOlieQsvyIB_6UALOdH_BbmqiCiytIephR1Gp2QLwWTcWHMaU-qaCgYKASESARISFQF4udJhDmY96jNVfFVeGhFsX7D8Dg0163'
  }
}