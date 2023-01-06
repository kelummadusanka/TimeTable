const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const choosedSem = [2, 4, 6, 8];
class GridData{
  createWeekDays() {
    return WeekDays
  }


 createHours() {
    var hours = [];
    for (let j = 1; j < 9; j++) {
      hours.push(`${7 + j}:30-${8 + j}:30`);
    }
    return hours;
  }
createPeriods(semId) {
    var grid = [];
    for (let i = 1; i < 6; i++) {
      for (let j = 1; j < 9; j++) {
        grid.push({
          type: "period",
          value: `${7 + j}:30-${8 + j}:30`,
          isSelected: true,
          id: parseInt(`${semId}` +`${i}` + `${j}`),
          day: WeekDays[i - 1],
          Semester:0,
        });
      }
    }
  
    return grid;
  }
  
  // const Periods = createPeriods();
  // const Hours = createHours();
  
  
  // ----------------------------------------------------------------------------------------------------------------------
  
  

  
  EmptyTimeCell(choosedSem){
    const TimeSlots = [{}];
      choosedSem.forEach(element => {
        for (let i = 1; i < 6; i++) {
          for (let j = 1; j < 9; j++) {
            TimeSlots.push({
              id: parseInt(`${element}`+`${i}` + `${j}`),
              type: "period",
              semester:element,
              time: `${7 + j}:30-${8 + j}:30`,
              day: WeekDays[i - 1],
              room:'',
              lectrurer:'',
              Modcode:'',
              ModName:''
            });
          }
  
        }
      });
  
  
    return TimeSlots;
  }


  RoomTime(rooms){
    const Allroomshours = [{}];
    rooms.forEach(element => {
        for (let i = 1; i < 6; i++) {
          for (let j = 1; j < 9; j++) {
            Allroomshours.push({
              id: parseInt(`${element._id}`+`${i}` + `${j}`),
              type: "period",
              semester:element,
              time: `${7 + j}:30-${8 + j}:30`,
              day: WeekDays[i - 1],
              room:'',
              lectrurer:'',
              Modcode:'',
              ModName:''
            });
          }
  
        }
      });
  
  
    return Allroomshours;
  }
  
 // const AllTimeSlots =EmptyTimeCell(choosedSem);
  
  // ----------------------------------------------------------------------------------------------------------------------
}
export default new GridData();





//export { WeekDays, Periods, Hours, AllTimeSlots };
