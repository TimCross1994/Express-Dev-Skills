const devSkills = [
    {skill: "Typing"},
    {skill: "White Boarding"},
    {skill: "Music Selection"},
    {skill: "Teaching"}
];

module.exports = {
    getAll,
    deleteOne,
    getOne,
    post
};

function getOne(id) {
    return devSkills[id];
}

function getAll() {
    return devSkills; 
}
function deleteOne(id) {
    devSkills.splice(id,1)
}
function post(id) {
    devSkills.push(id,1)
}