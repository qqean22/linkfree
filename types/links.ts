export interface Link {
  title: string
  url: string
  icon?: string
}

export interface Profile {
  name: string
  bio: string
  avatar: string
}

export interface Studio {
  profile: Profile
  links: Link[]
}

export interface LinksData {
  studios: {
    [key: string]: Studio
  }
}

