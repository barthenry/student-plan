import { find } from 'lodash';

export default function(courses = {}, action) {
  switch (action.type) {
  case 'SELECT_COURSE':
    const previouslySelected = find(courses.byIDs, (course) => course.isSelected);
    console.log('select course');
    console.log(courses);


    if (previouslySelected) {
      courseReducer(previouslySelected, action);
    }

    courses.selected = courses.byIDs[action.id];
    courseReducer(courses.selected, action);

    return courses;
  case 'SELECT_GROUP':
      console.log('select group');
    courseReducer(courses.selected, action);
      console.log(courses);
    return courses;
  case 'SET_PLAN':
      console.log("SET_PLAN invoked");
      courses = action.courses;
      return courses;
  case 'UNSELECT_GROUP':
    courseReducer(courses.selected, action);
    return courses;
  default:
    return courses;
  }
}

function courseReducer(course = {}, action) {
  switch (action.type) {
  case 'SELECT_COURSE':
    course.isSelected = false;

    if (course.id === action.id) {
      course.isSelected = true;
    }

    return course;
  case 'SELECT_GROUP':
    course.isGroupChosen = true;
    groupsReducer(course.groups, action);

    return course;
  case 'UNSELECT_GROUP':
    course.isGroupChosen = false;
    groupsReducer(course.groups, action);

    return course;
  default:
    return course;
  }
}

function groupsReducer(groups = {}, action) {
  switch (action.type) {
  case 'SELECT_GROUP':
    const previouslySelected = find(groups.byIDs, (group) => group.isChosen);

    if (previouslySelected) {
      groupReducer(previouslySelected, action);
    }

    groups.selected = groups.byIDs[action.id];
    groupReducer(groups.selected, action);

    return groups;
  case 'UNSELECT_GROUP':
    groupReducer(groups.selected, action);
    groups.selected = {};

    return groups;
  default:
    return groups;
  }
}

function groupReducer(group = {}, action) {
  switch (action.type) {
  case 'SELECT_GROUP':
    group.isChosen = false;

    if (group.id === action.id) {
      group.isChosen = true;
    }

    return group;
  case 'UNSELECT_GROUP':
    group.isChosen = false;

    return group;
  default:
    return group;
  }
}

