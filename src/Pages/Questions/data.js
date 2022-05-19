import {
    badminton,cricket,football
  } from "./../../Image"
  export const quizQuestion = [
    {
      categoryId: '1',
      categoryName: 'cricket',
      categoryImg: cricket,
      categoryDescription:"You don't Play For the Crowd,you Play For the country!",
      questions: [
        {
          question:
         " 1. What is the length of a professional cricket pitch?",
          points: 10,
          options: [
            {
              value: '29 Yards',
              isRight: false,
            },
            {
              value: '28 Yards',
              isRight: false,
            },
            {
              value: '22 Yards',
              isRight: true,
            },
            {
              value: '27 Yards',
              isRight: false,
            },
          ],
        },
        {
          question:
            'What does DRS stand for?',
          points: 10,
          options: [
            {
              value: 'Decision Review System',
              isRight: true,
            },
            {
              value: 'Decision Review Scenario',
              isRight: false,
            },
            {
              value: 'Decision Review State',
              isRight:false,
            },
            {
              value: ' Decision Relief System',
              isRight: false,
            },
          ],
        },
        {
          question:
            ' What is the length of a professional cricket stump?',
          points: 10,

          options: [
            {
              value: '28 inches',
              isRight: true,
            },
            {
              value: '24 inches',
              isRight: false,
            },
            {
              value: '20 inches',
              isRight: false,
            },
            {
              value: '22 inches',
              isRight: false,
            },
          ],
        },
        {
          question:
            ' How much does a new cricket ball weigh?.',
          points: 10,
          options: [
            {
              value: ' 5.5 ounces',
              isRight: true,
            },
            {
              value: '6 ounces',
              isRight: false,
            },
            {
              value: ' 6.5 ounces',
              isRight: false,
            },
            {
              value: '7 ounces',
              isRight: false,
            },
          ],
        },
        {
          question:
            ' Which West Indian fast bowler was known as “Hit Man”?',
          points: 10,
          options: [
            {
              value: ' Andy Roberts',
              isRight:true,
            },
            {
              value: ' Michael Holding',
              isRight: false,
            },
            {
              value: 'Joel Garner',
              isRight: false,
            },
            {
              value: 'Colin Croft',
              isRight: false,
            },
          ],
        },
      ],
    },
    {
      categoryId: '2',
      categoryName: 'football',
      categoryImg: football,
      categoryDescription:"You don't Play For the Crowd,you Play For the country!",
      questions: [
        {
          question:
            
            'Which nation won the 1986 World Cup?',
          points: 10,
          options: [
            {
              value: 'West Germany',
              isRight: false,
            },
            {
              value: ' Brazil',
              isRight: false,
            },
            {
              value: 'Colin Croft',
              isRight: false,
            },
            {
              value: ' Argentina',
              isRight: true,
            },
          ],
        },
        {
          question: 'What is the maximum circumference of a football? -',
          points: 10,
          options: [
            {
              value: ' 60 centimetres',
              isRight: false,
            },
            {
              value: '75 centimetres',
              isRight: false,
            },
            {
              value: '70 centimetres',
              isRight: true,
            },
            {
              value: '80 centimetres',
              isRight: false,
            },
          ],
        },
        {
          question: 'Who was in 2008 (from 1998) president of FIFA? ',
          points: 10,
          options: [
        
            {
              value: 'Joseph Sepp Blatter',
              isRight: true,
            },
            {
              value: 'Rodolphe William Seeldrayers',
              isRight: false,
            },
            {
              value: 'Sir Stanley Rous',
              isRight: false,
            },
            {
              value: 'Arthur Drewry',
              isRight: false
            },
          ],
        },
        {
          question: 'In which year was the FIFA established? ',
          points: 10,
          options: [
            {
              value: '1929',
              isRight: false,
            },
            {
              value: '1904',
              isRight: false,
            },
            {
              value: '1937',
              isRight: true,
            },
            {
              value: '1943',
              isRight: false,
            },
          ],
        },
        {
          question:
            'What is the maximum allowable weight for a football? ',
          points: 10,
          options: [
            {
              value: '450 grams',
              isRight: false,
            },
            {
              value: '550 grams',
              isRight: false,
            },
            {
              value: '400 grams',
              isRight: false,
            },
            {
              value: '500 grams',
              isRight: true,
            },
          ],
        },
      ],
    },
    {
      categoryId: '3',
      categoryName: 'badminton',
      categoryImg:badminton,
      categoryDescription:"You don't Play For the Crowd,you Play For the country!",
    }
  ]
  