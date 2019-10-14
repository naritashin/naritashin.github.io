export default ({ minutes = 0, hours = 0 }) => {
  const minutesOfHours = Math.floor(hours * 60);

  return minutes + minutesOfHours;
};
