import * as types from '../actions/action-types'

export var initialData = {
  qualifications: {
    '1': {qualId: 1, title: 'Qualification 1', criteria: ['1', '2']},
    '2': {qualId: 2, title: 'Qualification 2', criteria: ['3', '4']},
  },

  qualSelected: 1,

  units: {
    '1': { id: '212/21/21', name: 'Unit 1', credit: 2, level: 1, dateCompleted: null},
    '2': { id: '2', name: 'Unit 2', credit: 3, level: 2, dateCompleted: null},
    '3': { id: '3', name: 'Unit 3', credit: 1, level: 1, dateCompleted: null },
    '4': { id: '4', name: 'Unit 4', credit: 2, level: 4, dateCompleted: null },
    '5': { id: '5', name: 'Unit 5', credit: 2, level: 1, dateCompleted: null },
    '6': { id: '6', name: 'Unit 6', credit: 1, level: 8, dateCompleted: null },
    '7': { id: '7', name: 'Unit 7', credit: 1, level: 2, dateCompleted: null },
    '8': { id: '8', name: 'Unit 8', credit: 3, level: 3, dateCompleted: null },
    '9': { id: '9', name: 'Unit 9', credit: 2, level: 2, dateCompleted: null },
    '10': { id: '10', name: 'Unit 10', credit: 1, level: 4, dateCompleted: null },
    '11': { id: '11', name: 'Unit 11', credit: 1, level: 5, dateCompleted: null },
  },

  groups: {
    '1': {
      title: 'group 1 title',
      qualId: '1',
      units: [ '3', '1' ]
    },
    '2': {
      title: 'group 2 title',
      qualId: '1',
      units: [ '7', '5' ]
    },
    '3': {
      qualId: '1',
      title: 'group 3 title',
      units: [ '9' ]
    },
    '4': {
      qualId: '1',
      title: 'group 4 title',
      units: [ '6', '8', '10' ]
    },
    '5': {
      qualId: '1',
      title: 'group 5 title',
      units: [ '2', '4', '11' ]
    }
  },

  criteria: {
    '1': {
      qualId: '1',
      overview: 'Overview 1',
      groups: [ '1' ],
      type: 'MANDITORY',
      criteria: null,
      minimumScore: null,
    },
    '2': {
      qualId: '1',
      overview: 'Overview 2',
      groups: [ '2', '3' ],
      type: 'OPTIONAL',
      criteria: 'COMPLETE_ON_CREDITS',
      minimumScore: 0
    },
    '3': {
      qualId: '1',
      overview: 'Overview 3',
      groups: [ '4' ],
      type: 'OPTIONAL',
      criteria: 'MANDITORY',
      minimumScore: 0
    },
    '4': {
      qualId: '2',
      overview: 'Overview 4',
      groups: [ '5' ],
      type: 'OPTIONAL',
      criteria: 'COMPLETE_ON_CREDITS',
      minimumScore: 0
    }
  }
}

export default (state = initialData, action) => {
  switch (action.type) {
    default:
      return state
  }
}