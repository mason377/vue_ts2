const isProd = process.env.NODE_ENV === "production"
export const Configs = {
  DEV: {
    API_BASE: ""
  },
  PRODUCTION: {
    API_BASE: ""
  }
}

export const cookieConfig = {
  userseaToken: "_usersea_token",
  userseaUser: "_usersea_user",
  userseaTicket: "_ticket_"
}
