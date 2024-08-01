// Task 3: Write a  function that generates unique ID's. Use a closure keep track of the last generated ID and increment it with each call.
function generateUniqeId(){
    trackLastID=0;
    return function(){
        trackLastID++;
        return trackLastID
    }
}
const CheckgneratedId=generateUniqeId()
console.log(CheckgneratedId());
console.log(CheckgneratedId());
console.log(CheckgneratedId());
