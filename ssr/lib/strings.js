
export const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1)

export const encode = str => str.replace(/'/g, '\'\'')

// eslint-disable-next-line
const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const hasValidEmail = (email) => emailRE.test(email)

// eslint-disable-next-line
const unameRE = /^[a-zA-Z0-9\-_\.]+$/
export const hasValidUname = (uname) => unameRE.test(uname)

export const isEmptyString = (text) => /^\s*$/.test(text)

export const relaceWhiteSpace = (text) => text.replace(/\s/g, '')
