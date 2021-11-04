// Code your solution here
function findMatching(names, name) {
    return names.filter(user => user.toLowerCase() == name.toLowerCase());
}
function fuzzyMatch(names, name) {
    return names.filter(user => user.slice(0, name.length) === name);
}
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}