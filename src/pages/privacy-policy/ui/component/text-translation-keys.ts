type ISubcategories =
  | { subtitle: string; items: string[] }
  | {
      items: string[];
    };

type ITextKeys = { title: string; subcategories: ISubcategories[] };

export const textTranslationKeys: ITextKeys[] = [
  {
    title: "privacy-policy.title.title-one",
    subcategories: [
      {
        subtitle: "privacy-policy.subtitle.subtitle-one-a",
        items: ["privacy-policy.list.list-one-a"],
      },
      {
        subtitle: "privacy-policy.subtitle.subtitle-one-b",
        items: ["privacy-policy.list.list-one-b"],
      },
      {
        subtitle: "privacy-policy.subtitle.subtitle-one-c",
        items: ["privacy-policy.list.list-one-c"],
      },
    ],
  },
  {
    title: "privacy-policy.title.title-two",
    subcategories: [
      {
        subtitle: "privacy-policy.subtitle.subtitle-two-a",
        items: ["privacy-policy.list.list-two-a"],
      },
      {
        subtitle: "privacy-policy.subtitle.subtitle-two-b",
        items: ["privacy-policy.list.list-two-b"],
      },
    ],
  },
  {
    title: "privacy-policy.title.title-three",
    subcategories: [
      {
        subtitle: "privacy-policy.subtitle.subtitle-three",
        items: [
          "privacy-policy.list.list-three-a",
          "privacy-policy.list.list-three-b",
        ],
      },
    ],
  },
  {
    title: "privacy-policy.title.title-four",
    subcategories: [
      {
        subtitle: "privacy-policy.subtitle.subtitle-four-a",
        items: ["privacy-policy.list.list-four-a"],
      },
      {
        subtitle: "privacy-policy.subtitle.subtitle-four-b",
        items: ["privacy-policy.list.list-four-b"],
      },
    ],
  },
  {
    title: "privacy-policy.title.title-five",
    subcategories: [
      {
        items: [
          "privacy-policy.list.list-five-a",
          "privacy-policy.list.list-five-b",
        ],
      },
    ],
  },
  {
    title: "privacy-policy.title.title-six",
    subcategories: [
      {
        items: ["privacy-policy.list.list-six"],
      },
    ],
  },
  {
    title: "privacy-policy.title.title-seven",
    subcategories: [
      {
        items: ["privacy-policy.list.list-seven"],
      },
    ],
  },
  {
    title: "privacy-policy.title.title-eight",
    subcategories: [
      {
        items: ["privacy-policy.list.list-eight"],
      },
    ],
  },
];
