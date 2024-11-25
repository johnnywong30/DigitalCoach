import { TSubject } from "@App/lib/question/models";

const questionsData: any[] = [
  {
    subject: "Business Accounting and Analytics",
    questions: [
      "Are you interested in public accounting, private, or government?",
      "Do you consider yourself to be detail-oriented? If so, give me an example of a time when your attention to detail was critical.",
      "Tell me about a time when you had to work as part of a team.",
      "What characteristics make accounting a good career fit for you?",
      "Analyze a personal budget and find areas where you can cut expenses in order to pay a tax debt.",
      "Are you willing to travel for work?",
      "Aside from mathematical efficiency, what do you think is the most important skill set of a successful accountant?",
      "Describe a time that you had to present financial data to individuals without a financial background.",
      "Describe a time when you have worked under intense pressure.",
      "Describe how your past experience will assist you during the busy tax season?",
      "Describe your computer skills, including any accounting software programs. Please rank your ability as Advanced, Intermediate or Basic.",
      "Discuss examples of accounting reports you have prepared.",
      "Do you plan to pursue an accounting designation after graduation? If not, why not? If so, which one and why?",
      "Do you plan to sit for the CPA exam? If so, are you eligible and when will you sit for the exam?",
      "Identify tax forms such as T5, T3 and T1.",
      "If I buy a piece of equipment, walk me through the impact on the three financial statements.",
      "If you are interested in public accounting, are you more interested in tax or audit?",
      "If you were working on an audit for a major client and noticed several errors in the company's reports, how would you communicate this to a project leader who is known to have a short temper and little tolerance for disagreement?",
      "Provide me with an example of your problem-solving ability.",
      "Tell me about your experience in reconciliation.",
      "Tell me of a situation where you handled a large volume of data.",
      "What accounting skills do you have and how can you apply them to this position?",
      "What are some of your strengths that will allow you to endure the frantic demands of tax season or a difficult audit?",
      "What areas of accounting are you most interested in and why?",
      "What aspect of accounting do you dislike most?",
      "What characteristics do you think a good accountant should have?",
      "What do you do for fun?",
      "What do you do outside of work?",
      "What do you know about CASB?",
      "What do you know about the process and requirements of becoming a CA, CGA and CMA ?",
      "What do you know about the three professional accounting designations in Canada ( CA.CGA.CMA ) ?",
      "What do you think is the biggest challenge facing the accounting profession at this time and how are you prepared to handle it?",
      "What is the difference between accounts and finance?",
      "What is the difference between cost accounting and financial accounting?",
      "What is your experience managing accounts receivable? Accounts payable?",
      "What is your favorite extracurricular activity?",
      "What is your favorite hobby?",
      "What kind of work environment and job activities do junior accountants have?",
      "What steps will you have to take to become a certified public accountant?",
      "What type of an accounting position would you would like to be working in five years after university graduation ?",
      "What type of an accounting position would you would like to be working in five years after university graduation?",
      "What was the most challenging accounting task you had to accomplish in your career?",
      "Who else are you interviewing with?",
      "Whom do you most admire?",
      "Why are you interested in our firm?",
      "Why are you interested in pursuing a career in accounting?",
      "Why did you choose to study accounting?	",
      "Why do you want to be a CA?",
      "What is a debit and credit?",
      "What is the difference between accrual and cash accounting?",
      "How do you handle discrepancies in financial statements?",
      "What is the difference between accounts payable and accounts receivable?",
      "How do you stay updated on changes in accounting standards and regulations?",
      "How do you handle tight deadlines and pressure in a financial reporting role?",
      "Discuss a challenging financial project you worked on and how you contributed to its success",
    ],
  },
  {
    subject: "Engineering",
    questions: [
      "Tell me about the most challenging engineering project you've worked on",
      "Explain a time you had to use logic to solve an engineering problem",
      "What engineering skills have you learned or improved upon in the past six months?",
      "What software packages are you familiar with?",
      "Describe a time you had to work on a team and something didn't go well. What would you do differently?",
      "Have you ever had an experience with a difficult client, employer, or employee? How did you handle the situation?",
      "What strengths do you have that make you a good engineer?",
      "What is the most challenging engineering project you dealt with? How did you ensure it was a success?",
      "What processes do you use to make sure you haven’t made any mistakes?",
      "What steps do you take to keep your engineering skills current?",
      "Can you tell me about a project that fell behind schedule? What happened, and what was the outcome of the project?",
      "Can you tell me about the most challenging technical report you ever had to create?",
    ],
  },
  {
    subject: "Computer Science",
    questions: [
      "What are your preferred programming languages and why?",
      "What is a class? What is a super-class?",
      "What is the difference between C and C++ ? Would you prefer to use one over the other?",
      "Can you give an example of a time when you had to troubleshoot a technical issue and how you went about solving it?",
      "Can you give an example of a project where you had to work with a team and how you contributed to its success?",
      "Can you walk us through your experience with a specific programming language or technology?",
      "Can you give an example of how you have applied your technical skills to provide a business solution?",
      "How would you implement a breadth-first search algorithm?",
      "How would you implement a depth-first search algorithm?",
      "Can you write a SQL query to retrieve data from a database table?",
      "Walk me through your resume and explain how your experience fits this role.",
      "What programming language do you know the best and which do you use the most often?",
      "Explain the role of Object Oriented Programming in languages like Java.",
      "What experience do you have with website development, specifically using Node and javascript frameworks?",
      "What is Big O notation and how can it be used to analyze the complexity of algorithms?",
      "How would you implement a secure user authentication system in a web application?",
      "What is a relational database and how would you store information in one, consider using SQL?",
      "In concurrency, explain the concept of deadlock and how it can be prevented.",
      "What are the main differences between a process and a thread?",
      "Describe how blockchain functions and some of its potential applications.",
    ],
  },
  {
    subject: "Finance",
    questions: [
      "What is the greatest achievement in your financial career so far?",
      "If you could use just one type of statement to assess the financial health of a company, which would you choose and why?",
      "What are three types of short-term financing that our company could use to fulfill its cash needs?",
      "What impact would the purchase of an asset have on our balance sheet, income statement and cash flow statement?",
      "What is the difference between the clean and dirty prices of bonds?",
      "What multiples are most commonly used in valuation?",
      "Why might we use a deferred tax liability?",
      "What is the greatest financial challenge facing our industry today?",
      "What are three financial changes that you anticipate in our industry over the next ten years?",
      "Why have you chosen to work in finance?",
      "If I could use only one statement to review the overall health of a company, which statement would I use, and why?",
      "When should a company consider issuing debt instead of equity?",
      "Which is cheaper, debt or equity?",
      "When do you capitalize rather than expense a purchase?",
      "Why would two companies merge?",
      "What major factors drive mergers and acquisitions?",
      "Why would a company fund its operations by issuing equity rather than debt?",
    ],
  },
  {
    subject: "Data Science",
    questions: [
      "Explain the difference between Data Analytics and Data Science.",
      "What are the differences between supervised and unsupervised learning?",
      "How can you avoid overfitting in your model?",
      "What is p-value and what is its significance?",
      "What is the difference between population and sample?",
      "Tell me about a time you had to communicate your technical findings to a non-technical audience.",
      "Tell me about a time you used data visualization in a project.",
      "How would you handle missing values in a dataset?",
      "Tell me about a project where your analysis had a significant impact on decision-making.",
    ],
  },
  {
    subject: "Human Resources",
    questions: [
      "Describe the significance of HR in an organization.",
      "Tell me about a time you had to collaborate with others at different levels of a company.",
      "How would you handle a conflict between employees?",
      "How would you ensure diversity and inclusion in a workplace?",
      "Tell me about a time you had a disagreement with leadership and how you approached this.",
      "How do you measure and improve employee engagement?",
      "Tell me about a time you handled a conflict between employees.",
    ],
  },
  {
    subject: "Information Technology",
    questions: [
      "What is your experience with cloud computing platforms?",
      "Tell me about a time you had to learn and implement a new technology.",
      "What considerations do you take into account when designing a new IT infrastructure?",
      "How do you ensure the security and integrity of a network/system?",
    ],
  },
  {
    subject: "Law",
    questions: [
      "Why did you choose to study law?",
      "Can you discuss a recent legal development or case that caught your attention?",
      "How do you approach legal research and stay updated on changes in laws and regulations?",
      "How do you handle ethical dilemmas or conflicts of interest in your practice?",
      "How do you handle stress and high-pressure situations in the legal profession?",
      "How do you keep your client informed and involved in their case?",
    ],
  },
  {
    subject: "Marketing",
    questions: [
      "What motivated you to pursue a career in marketing?",
      "Describe a successful marketing campaign you were a part of. What was your role, and what were the results?",
      "How do you approach market research, and what tools or methods do you use?",
      "Can you discuss a time when a marketing campaign didn't go as planned? What did you learn from that experience?",
      "Describe your experience with data analytics and how you use data to inform marketing decisions.",
    ],
  },
  {
    subject: "Operations",
    questions: [
      "How do you delegate work to employees?",
      "What is one example of a project you oversaw that involved multiple teams? How did you manage that situation, and what was the result?",
      "What do you do when facing a small budget or lack of resources? Have you faced this challenge in the past?",
      "Tell me about the best manager you’ve ever had.",
      "Which Management Information Systems have you used?",
      "Discuss an instance in which one of your ideas has helped to improve operations at other companies.",
    ],
  },
  {
    subject: "Product Management",
    questions: [
      "What role do you think communication plays in successful product management?",
      "What is your approach to learning about a new product or industry?",
      "How do you handle collaboration across different fields such as engineering, design, and other teams?",
      "Can you walk through the stages of a product life cycle?",
      "Describe a situation where you had to pivot a product strategy.",
      "What challenges have you faced during a product launch, and how did you overcome them?",
    ],
  },
  {
    subject: "Any",
    questions: [
      "Tell me about yourself.",
      "What interests you about this position with this company?",
      "What are your strengths?",
      "What are your weaknesses?",
      "What has been your recent greatest achievement?",
      "Where do you see yourself in 5 years?",
      "What skills and qualities do you possess that make you a good fit for this role?",
      "What makes you stand out from the other candidates?",
      "Describe a situation where you had to work with a difficult team member.",
      "Can you share an example of a project or task that didn't go as planned?",
      "Tell me about a situation where you received constructive feedback.",
      "Discuss a situation where you had to work under pressure to meet a project deadline.",
      "Describe a time when you had to step up and demonstrate leadership skills.",
      "Tell me about a time when you had to meet a tight deadline and how you managed your time?",
      "Do you prefer to work with others or individually?",
    ],
  },
  {
    subject: "Storytelling",
    questions: [
      "Was there ever a time when you tried something new and surprising? What was it, and how did you feel afterward?",
      "Can you think of a time when you had to take care of someone? How did it affect you?",
      "Tell me about a time when you accomplished something you’re really proud of, even if it was small.",
      "If you could interview anyone, what would you ask them and why?",
      "Describe a time when you worked hard to save or purchase something.",
      "Describe a time when you were scared. What happened?",
      "Describe a time where you made something for someone else? Why? What was their reaction?",
      "What was your most difficult class and what did you do to get through it?",
      "If you had to give advice to a younger version of yourself, what would it be?",
      "Was there ever a time when you worked hard to save or purchase something?",
      "Tell me about a time you had to work with a difficult team member. How did you handle the situation?",
      "If you could relive one day in your life, which day would it be and why?",
      "Tell me about a time when you took on a leadership role in a club, team, or school activity. What did you accomplish?",
      "Share a time when you had to meet a tight deadline. How did you ensure success?",
      "Have you ever had to resolve a conflict between two people? How did you handle it?",
      "Can you recall a moment when you received constructive criticism? How did you respond to it?",
      "Describe a situation where you had to persuade others to see things your way. How did you achieve this?",
      "Tell me about a time when you successfully managed multiple priorities. How did you organize your time?",
      "Share an experience where you solved a complex problem. What process did you use?",
      "Can you provide an example of when you worked on a project with little guidance? How did you manage it?",
      "Think of a time when you had to make a quick decision under pressure. What happened, and how did you handle it?",
      "Tell me about a time when you had to explain something complicated to someone. How did you make it clear and understandable?",
      "Describe a time when you worked on a group project in school. How did you contribute, and what was the result?",
      "Can you describe a time when you resolved a misunderstanding or prevented a conflict? How did you approach the situation?",
      "Share an experience where you were part of a team that achieved a significant accomplishment. What was your role in the success?",
      "If you could relive one day in your life, which day would it be and why?",
      "Tell me about a time when you faced a challenge in pursuing a hobby or activity you love. How did you overcome it?",
      "Think of an experience where you worked with others on a hobby-related project. What was your role?",
      "Describe a time when your hobby or interest led you to connect with someone new. What was the outcome?",
    ],
  },
  {
    subject: "Scenarios",
    questions: [
      "You’re struggling to understand a concept in class and need to prepare for an important exam. What steps would you take to overcome this challenge?",
      "Your team is assigned a project with minimal guidance from leadership. How would you take initiative to organize the team and ensure the project is completed successfully?",
      "Your group of friends decides to plan a trip or outing, but there’s a disagreement about the location. How would you step in to ensure everyone is satisfied?",
      "You notice a friend is being excluded from group activities or conversations. What would you do to include them and support them?",
      "A close friend achieves something significant, and you’re tasked with planning a small celebration. How would you go about organizing it?",
      "You decide to participate in a competition or event related to a hobby. What steps would you take to improve and perform your best?",
      "You’re asked to teach or share your hobby with someone who is completely new to it. How would you approach this task?",
      "You’re working on a team project, and a key team member suddenly quits or becomes unavailable right before a deadline. How would you handle their responsibilities?",
      "You miss an important deadline for an assignment due to a misunderstanding about the instructions. How would you address this with your teacher and move forward?",
      "A close friend confides in you about a personal problem they’re facing, but you’re unsure how to help. How would you approach offering support?",
    ],
  },
];

export default questionsData;
