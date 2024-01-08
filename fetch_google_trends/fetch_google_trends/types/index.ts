export interface Article {
  articleTitle: string
  url: string
  source: string
  time: string
  snippet: string
}

export interface GoogleTrendsStory {
  id: string
  image: {
    newsUrl: string
    imageUrl: string
    source: string
  }
  shareUrl: string
  articles: Article[]
  entityNames: string[]
}

export interface GoogleTrendsStorySummaries {
  trendingStories: GoogleTrendsStory[]
}

export interface GoogleTrends {
  storySummaries: GoogleTrendsStorySummaries
  date: string
}

export interface TrendsStory {
  id: string
  image: {
    newsUrl: string
    imageUrl: string
    source: string
  }
  shareUrl: string
  articles: Article[]
  entityNames: string[]
}

export interface TrendsApiRequestParams {
  stories: TrendsStory[]
  reportDate: string
}
