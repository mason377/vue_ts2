const isProd = process.env.NODE_ENV === "production"
export const Configs = {
  DEV: {
    API_BASE: "https://dev-zhiqu-api.beieryouxi.com/v3d2"
  },
  PRODUCTION: {
    API_BASE: "https://zhiqu-api.beieryouxi.com/v3d2"
  }
}

export const cookieConfig = {
  userseaToken: "_usersea_token",
  userseaUser: "_usersea_user",
  userseaTicket: "_ticket_"
}
