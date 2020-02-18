var times = [
  {singular: "year", plural: "years", f: "years"},
  {singular: "month", plural: "months", f: "months"},
  {singular: "day", plural: "days", f: "days"},
  {singular: "hour", plural: "hours", f: "hours"},
  {singular: "minute", plural: "minutes", f: "minutes"}
]


$(document).ready(function() {
  var age = document.getElementById("age");
  let iWasBorn = moment.tz("1995-05-18 00:00", "America/Chicago");
  let setAge = () => {
    let now = moment()
    let diff = now.diff(iWasBorn);
    var duration = moment.duration(diff);
    age.innerText = times.map(x => {
      let count = duration[x.f]();
      if(count === 0) return null;
      if(count === 1) return `${count} ${x.singular}`;
      return `${count} ${x.plural}`;
    }).filter(x => x).join(", ");
  }
  setAge();
  setInterval(setAge, 2000);
});
