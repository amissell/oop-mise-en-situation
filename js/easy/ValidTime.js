function isValid24HourTime(time) {
    const parts = time.split(':');
  
    if (parts.length !== 2) {
      return false;
    }
  
    const hour = parseInt(parts[0], 10);
    const minute = parseInt(parts[1], 10);
  
    if (
      isNaN(hour) || isNaN(minute) ||
      hour < 0 || hour > 23 ||
      minute < 0 || minute > 59
    ) {
      return false;
    }
  
    if (
      parts[0].length !== 2 || parts[1].length !== 2
    ) {
      return false;
    }
  
    return true;
  }
  
  console.log(isValid24HourTime("23:59")); 
  console.log(isValid24HourTime("00:00")); 
  console.log(isValid24HourTime("24:00")); 
  console.log(isValid24HourTime("12:60")); 
  console.log(isValid24HourTime("7:5"));
  