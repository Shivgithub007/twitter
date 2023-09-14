- `find().limit(value)`It is used to put a limit on fetching the data.
- `find().lean()` It is used to convert the mongoose object into the js object.
- `find().skip(value)` It is used the skip the data coming form mongodb.
- `console.log(data[0])` By this you can limit to get only the index 0 data.
- `console.log(data[0].id)` By this you can get the id of the current object easily in mongoose.

## Virtual data in mongoose

- They used to give some extra properties which are not present in the database but you can call them.

- Use mongoose docs for understanding furthur.