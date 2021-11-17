import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'The sum of 2 numbers 5 and 4 is',
      answer: [
        { option: '9', correct: true },
        { option: '7', correct: false },
        { option: '11', correct: false },
        { option: '8', correct: false },
      ]
    },
    {
      question: 'Multiply two numbers 5 and 8',
      answer: [
        { option: '30', correct: false },
        { option: '35', correct: false },
        { option: '40', correct: true },
        { option: '45', correct: false },
      ]
    },
    {
      question: 'Square of 6?',
      answer: [
        { option: '25', correct: false },
        { option: '36', correct: true },
        { option: '49', correct: false },
        { option: '64', correct: false }
      ]
    },
    {
      question: 'Square-root of 16 is ?',
      answer: [
        { option: '4', correct: true },
        { option: '5', correct: false },
        { option: '6', correct: false },
        { option: '3', correct: false }
      ]
    },
    {
      question: 'What is the next prime number after 7?',
      answer: [
        { option: '9', correct: false },
        { option: '13', correct: false },
        { option: '11', correct: true },
        { option: '15', correct: false }
      ]
    },
    {
      question: 'How many days are there in a week?',
      answer: [
        { option: '7', correct: true },
        { option: '6', correct: false },
        { option: '8', correct: false },
        { option: '5', correct: false }
      ]
    },
    {
      question: 'How many months are there in a year ?',
      answer: [
        { option: '10', correct: false },
        { option: '12', correct: true },
        { option: '14', correct: false },
        { option: '16', correct: false }
      ]
    },
    {
      question: 'How many sides does a square have?',
      answer: [
        { option: '5', correct: false },
        { option: '2', correct: false },
        { option: '3', correct: false },
        { option: '4', correct: true },
      ]
    },
    {
      question: '8 raised to the power 0 is equal to:',
      answer: [
        { option: '0', correct: false },
        { option: '8', correct: false },
        { option: '1', correct: true },
        { option: '16', correct: false }
      ]
    },
    {
      question: 'Cube of 5 is equal to ?',
      answer: [
        { option: '25', correct: false },
        { option: '125', correct: true },
        { option: '625', correct: false },
        { option: '825', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}
