
const fatwajat = [
  {
    type: "chapter",
    name: "عبادات",
    totalCategories: 5,
    categories: [
      {
        type: "category",
        name: "نماز",
        totalTopics: 5,
        topics: [
          {
            type: "topic",
            name: "فرض نماز کے مسائل",
            totalQuestions: 5,
            questions: [
              {
                question:
                  "فرض نماز میں بھول چوک ہو جائے تو سجدہ سہو کب اور کیسے کیا جاتا ہے؟",
                answer: "",
              },
              {
                question:
                  "فرض نماز میں بھول چوک ہو جائے تو سجدہ سہو کب اور کیسے کیا جاتا ہے؟",
                answer: "",
              },
            ],
          },
          {
            type: "topic",
            name: "سنت نماز کے مسائل",
            totalQuestions: 5,
            questions: [
              {
                question:
                  "فرض نماز میں بھول چوک ہو جائے تو سجدہ سہو کب اور کیسے کیا جاتا ہے؟",
                answer: "",
              },
            ],
          },
        ],
      },
      {
        type: "category",
        name: "نماز",
        totalTopics: 5,
        topics: [
          {
            type: "topic",
            name: "فرض نماز کے مسائل",
            totalQuestions: 5,
            questions: [
              {
                question:
                  "فرض نماز میں بھول چوک ہو جائے تو سجدہ سہو کب اور کیسے کیا جاتا ہے؟",
                answer: "",
              },
              {
                question:
                  "فرض نماز میں بھول چوک ہو جائے تو سجدہ سہو کب اور کیسے کیا جاتا ہے؟",
                answer: "",
              },
            ],
          },
          {
            type: "topic",
            name: "سنت نماز کے مسائل",
            totalQuestions: 5,
            questions: [
              {
                question:
                  "فرض نماز میں بھول چوک ہو جائے تو سجدہ سہو کب اور کیسے کیا جاتا ہے؟",
                answer: "",
              },
            ],
          },
        ],
      },
    ],
    totalTopics: 5,
    totalQuestions: 45,
  },
];

const chapter = {};
const category = {};
const topic = {};
// const question = {};

const chapters = [
  {
    type: "chapter",
    hasTopics: true,
    categories: [
      {
        type: "category",
        topics: [
          {
            type: "topic",
            questions: [
              {
                type: "question",
                statement: "",
                asnwer: "",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    name: "میراث",
    hasTopics: false,
    categories: [
      {
        type: "category",
        questions: [
          {
            type: "question",
            statement: "",
            asnwer: "",
          },
        ],
      },
    ],
  },
];

// Chapters ---> Categories ---> Topics ---> Questions
// Ibadat          Namaz          Farz        what about...
// Ibadat          roza           Farz        what about...
// Ibadat          zakat          Farz        what about...

// Chapters ---> Categories  ---> Questions
// Miras --->

// loop through chapters
const questionsData1 = chapters.map((chapter, index) => {
  if (chapter.hasTopics) {
    // loop through categories
    const x = chapter.categories?.map((category, index) => {
      // loop through topics
      const y = category.topics?.map((topic, index) => {
        // loop through questions
        const z = topic.questions?.map((question, index) => {
          const statement = question.statement;
        });
      });
    });
  } else {
    // loop through categories
    const x = chapter.categories?.map((category, index) => {
      // loop through questions
      const y = category.questions?.map((question, index) => {
        const statement = question.statement;
      });
    });
  }
});

// routing
// /fatwajat/chapter-name/category/topic/question

// DB ---> Fatawajat JSON object
/*

1. /api/get-chapters   -->  return all chapters with basic details
2. /api/get-categories -->  return all categories with basic details
3. /api/get-topics     -->  return all topics with basic details
4. /api/get-questions  -->  return all questions with basic details

*/

// DB TABELS

const data1 = [
  {
    _id: "676e1df1d92a10ee89d28308_1",
    name: "ibadaat 4444",
    title: "نکاح و طلاق1",
    slug: "عبادات",
    description: "اس باب میں موجود وضاحت اب تبدیل شدہ ہے۔",
    isPublished: true,
    createdAt: "2024-12-27T03:24:33.929Z",
    updatedAt: "2024-12-27T13:09:03.531Z",
    __v: 0,
    tree: {
      totalCategories: 0,
      topicsCount: 0,
      totalQuestions: 0,
    },
  },
  {
    _id: "676e1df1d92a10ee89d28308_2",
    name: "ibadaat 4444",
    title: "نکاح و طلاق1",
    slug: "عبادات",
    description: "اس باب میں موجود وضاحت اب تبدیل شدہ ہے۔",
    isPublished: true,
    createdAt: "2024-12-27T03:24:33.929Z",
    updatedAt: "2024-12-27T13:09:03.531Z",
    __v: 0,
    tree: {
      totalCategories: 0,
      topicsCount: 0,
      totalQuestions: 0,
    },
  },
  {
    _id: "676e1df1d92a10ee89d28308_3",
    name: "ibadaat 4444",
    title: "نکاح و طلاق1",
    slug: "عبادات",
    description: "اس باب میں موجود وضاحت اب تبدیل شدہ ہے۔",
    isPublished: true,
    createdAt: "2024-12-27T03:24:33.929Z",
    updatedAt: "2024-12-27T13:09:03.531Z",
    __v: 0,
    tree: {
      totalCategories: 0,
      topicsCount: 0,
      totalQuestions: 0,
    },
  },
  {
    _id: "676e1df1d92a10ee89d28308_4",
    name: "ibadaat 4444",
    title: "نکاح و طلاق1",
    slug: "عبادات",
    description: "اس باب میں موجود وضاحت اب تبدیل شدہ ہے۔",
    isPublished: true,
    createdAt: "2024-12-27T03:24:33.929Z",
    updatedAt: "2024-12-27T13:09:03.531Z",
    __v: 0,
    tree: {
      totalCategories: 0,
      topicsCount: 0,
      totalQuestions: 0,
    },
  },
  {
    _id: "676e1df1d92a10ee89d28308_5",
    name: "ibadaat 4444",
    title: "نکاح و طلاق1",
    slug: "عبادات",
    description: "اس باب میں موجود وضاحت اب تبدیل شدہ ہے۔",
    isPublished: true,
    createdAt: "2024-12-27T03:24:33.929Z",
    updatedAt: "2024-12-27T13:09:03.531Z",
    __v: 0,
    tree: {
      totalCategories: 0,
      topicsCount: 0,
      totalQuestions: 0,
    },
  },
  {
    _id: "676e1df1d92a10ee89d28308_6",
    name: "ibadaat 4444",
    title: "نکاح و طلاق1",
    slug: "عبادات",
    description: "اس باب میں موجود وضاحت اب تبدیل شدہ ہے۔",
    isPublished: true,
    createdAt: "2024-12-27T03:24:33.929Z",
    updatedAt: "2024-12-27T13:09:03.531Z",
    __v: 0,
    tree: {
      totalCategories: 0,
      topicsCount: 0,
      totalQuestions: 0,
    },
  },
];
