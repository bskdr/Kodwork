export default function (state, action) {
  switch (action.type) {
    case 'SET_JOBNAME':
      return {...state, jobName: action.payload.jobName};
    case 'ADD_FAVORITE':
      const {job} = action.payload;
      if (state.favoritedJobs.find(x => x.id === job.id)) {
        console.log('Job already in the favorites list');
        return state;
      }
      const newList = [...state.favoritedJobs, job];
      return {...state, favoritedJobs: newList};
    case 'REMOVE_FAVORITE':
      const {removedJob} = action.payload;
      const newList2 = state.favoritedJobs.filter(x => x.id !== removedJob.id);
      return {...state, favoritedJobs: newList2};
    default:
      return state;
  }
}
