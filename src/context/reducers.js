export default function (state, action) {
  switch (action.type) {
    case 'SET_JOBNAME':
      return {...state, jobName: action.payload.jobName};
    case 'ADD_FAVORITE':
      const {job} = action.payload;
      const newList = [...state.favoritedJobs, job];
      return {...state, favoritedJobs: newList};
    default:
      return state;
  }
}
