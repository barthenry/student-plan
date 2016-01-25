import { find, map } from 'lodash';

export function coursesReducer(courses = {}, action) {
  switch (action.type) {
  case 'SELECT_COURSE':
    const previouslySelected = find(courses.byIDs, (course) => course.isSelected);

    if (previouslySelected) {
      courseReducer(previouslySelected, action);
    }

    courses.selected = courses.byIDs[action.id];
    courseReducer(courses.selected, action);

    return courses;
  case 'SELECT_GROUP':
    courseReducer(courses.selected, action);
    return courses;
  case 'SET_PLAN':
    Object.assign(courses, action.data.courses);

    return courses;
  case 'UNSELECT_GROUP':
    const courseWithUnselectedGroup = find(map(courses.byIDs, (course) => course), (course) => {
      const chosenGroup = find(course.groups.byIDs, (group) => group.isChosen);
      return chosenGroup && chosenGroup.id === action.id;
    });

    courseReducer(courseWithUnselectedGroup, action);
    return courses;
  default:
    return courses;
  }
}

export function planReducer(plan = {}, action) {
  switch (action.type) {
  case 'SET_PLAN':
    const { privateId, publicId, isEditable } = action.data;

    Object.assign(plan, {
      privateId,
      publicId,
      isEditable
    });

    return plan;
  default:
    return plan;
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

