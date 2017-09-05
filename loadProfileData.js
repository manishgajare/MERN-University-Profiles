import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('profiles').insertMany([
    { id: 1,
      firstName: 'Manish',
      lastName: 'Gajare',
      description: 'Software Engineer at Wayfair - Actively looking for new opportunity',
      postId: 101,
      personalInfo: {
        birthdate: {
          date: 5,
          month: 'May',
          year: 1991
        },
        phoneNumber: '2028305422',
        emailId: 'manishgajare@gmail.com',
        address: {
          streetAddress: '114 Longwood Avenue, Apt 5',
          zipcode: '02446',
          city: 'Brookline',
          state: 'MA',
          country: 'USA'
        }
      },
      timestamp: new Date(),
    },
    { id: 2,
      firstName: 'Yash',
      lastName: 'Kochar',
      description: 'Software Engineer at DataXu',
      postId: 102,
      personalInfo: {
        birthdate: {
          date: 20,
          month: 'November',
          year: 1990
        },
        phoneNumber: '6174072168',
        emailId: 'yashkochar20@gmail.com',
        address: {
          streetAddress: '114 Longwood Avenue, Apt 5',
          zipcode: '02446',
          city: 'Brookline',
          state: 'MA',
          country: 'USA'
        }
      },
      timestamp: new Date()
    },
    { id: 3,
      firstName: 'Ronak',
      lastName: 'Massand',
      description: 'CEO at ParkLoco',
      postId: 102,
      personalInfo: {
        birthdate: {
          date: 16,
          month: 'November',
          year: 1990
        },
        phoneNumber: '4046610800',
        emailId: 'ronak@parkloco.com',
        address: {
          streetAddress: '114 Longwood Avenue, Apt 5',
          zipcode: '02446',
          city: 'Brookline',
          state: 'MA',
          country: 'USA'
        }
      },
      timestamp: new Date()
    },
    { id: 4,
      firstName: 'Prashant',
      lastName: 'Iyer',
      description: 'User Experience Designer and Researcher at Integrated Software Solutions',
      postId: 101,
      personalInfo: {
        birthdate: {
          date: 13,
          month: 'September',
          year: 1990
        },
        phoneNumber: '9292476619',
        emailId: 'praiyer@umich.edu',
        address: {
          streetAddress: '114 Longwood Avenue, Apt 5',
          zipcode: '02446',
          city: 'Brookline',
          state: 'MA',
          country: 'USA'
        }
      },
      timestamp: new Date()
    }
  ]).then(response => {
    console.info('Profiles', response.insertedCount);
    db.collection('posts').insertMany([
      { id: 101, name: 'Teacher', timestamp: new Date() },
      { id: 102, name: 'Student', timestamp: new Date() },
    ]).then(response => {
      console.info('Posts', response.insertedCount);
      db.close();
    });
  });
});
