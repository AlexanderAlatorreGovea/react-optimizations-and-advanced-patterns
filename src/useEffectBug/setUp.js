// add this to your setupFilesAfterEnv config in jest so it's imported for every test file

export async function mockFetch(url) {
  switch (url) {
    case url.includes(
      "https://hn.algolia.com/api/v1/search?query="
    ): {
      return {
        ok: true,
        status: 200,
        json: async () => {
          return {
            hits: [
              {
                author: "alex",
                points: 2280,
                story_text: null,
                comment_text: null,
                num_comments: 498,
                story_id: null,
                story_title: null,
                story_url: null,
                parent_id: null,
                created_at_i: 1506117116,
                relevancy_score: 7675,
                _tags: [
                  "story",
                  "author_dwwoelfel",
                  "story_15316175",
                ],
                objectID: "15316175",
                _highlightResult: {
                  title: {
                    value:
                      "Relicensing <em>React</em>, Jest, Flow, and Immutable.js",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["react"],
                  },
                  url: {
                    value:
                      "https://code.facebook.com/posts/300798627056246",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  author: {
                    value: "dwwoelfel",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                },
              },
              {
                created_at: "2019-11-14T16:35:38.000Z",
                title: "Build Your Own React",
                url: "https://pomb.us/build-your-own-react/",
                author: "pomber",
                points: 1478,
                story_text: null,
                comment_text: null,
                num_comments: 108,
                story_id: null,
                story_title: null,
                story_url: null,
                parent_id: null,
                created_at_i: 1573749338,
                _tags: [
                  "story",
                  "author_pomber",
                  "story_21536789",
                ],
                objectID: "21536789",
                _highlightResult: {
                  title: {
                    value: "Build Your Own <em>React</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["react"],
                  },
                  url: {
                    value:
                      "https://pomb.us/build-your-own-<em>react</em>/",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["react"],
                  },
                  author: {
                    value: "pomber",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                },
              },
              {
                created_at: "2021-05-08T08:09:23.000Z",
                title:
                  "Show HN: A portfolio website simulating macOS's GUI using React",
                url: "https://portfolio.zxh.io",
                author: "oh-renovamen",
                points: 683,
                story_text: null,
                comment_text: null,
                num_comments: 191,
                story_id: null,
                story_title: null,
                story_url: null,
                parent_id: null,
                created_at_i: 1620461363,
                _tags: [
                  "story",
                  "author_oh-renovamen",
                  "story_27084995",
                  "show_hn",
                ],
                objectID: "27084995",
                _highlightResult: {
                  title: {
                    value:
                      "Show HN: A portfolio website simulating macOS's GUI using <em>React</em>",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["react"],
                  },
                  url: {
                    value: "https://portfolio.zxh.io",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  author: {
                    value: "oh-renovamen",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                },
              },
            ],
          };
        },
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}

// beforeAll(() => jest.spyOn(window, "fetch"));
// beforeEach(() => window.fetch.mockImplementation(mockFetch));
